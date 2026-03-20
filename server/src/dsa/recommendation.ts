// ============================================================
// Recommendation Engine — Collaborative Filtering
// ============================================================
// Builds a co-purchase graph from order history and uses
// Jaccard similarity with a max-heap (priority queue) to
// generate product recommendations.
//
// Algorithm:
//   1. Build adjacency graph: products bought together in the
//      same order form edges with weights (co-purchase count).
//   2. For a given product, find all connected products.
//   3. Score each candidate using Jaccard similarity:
//      J(A,B) = |orders(A) ∩ orders(B)| / |orders(A) ∪ orders(B)|
//   4. Use a max-heap to extract top-N recommendations.
//
// Time Complexity:
//   Graph build: O(O * P²) where O = orders, P = avg products/order
//   Recommendation: O(E + N log N) where E = edges from product
//
// Space Complexity: O(P² + O*P) for the graph + order index
// ============================================================

interface RecommendationResult {
  productId: string;
  score: number;
  coPurchaseCount: number;
  reason: string;
}

interface OrderData {
  orderId: string;
  productIds: string[];
}

// Max-heap for extracting top-N scored items
class MaxHeap<T> {
  private items: Array<{ item: T; priority: number }> = [];

  insert(item: T, priority: number): void {
    this.items.push({ item, priority });
    this.bubbleUp(this.items.length - 1);
  }

  extractMax(): { item: T; priority: number } | null {
    if (this.items.length === 0) return null;
    const max = this.items[0];
    const last = this.items.pop()!;
    if (this.items.length > 0) {
      this.items[0] = last;
      this.bubbleDown(0);
    }
    return max;
  }

  get size(): number {
    return this.items.length;
  }

  private bubbleUp(i: number): void {
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.items[parent].priority >= this.items[i].priority) break;
      [this.items[parent], this.items[i]] = [this.items[i], this.items[parent]];
      i = parent;
    }
  }

  private bubbleDown(i: number): void {
    const n = this.items.length;
    while (true) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
      if (left < n && this.items[left].priority > this.items[largest].priority) {
        largest = left;
      }
      if (right < n && this.items[right].priority > this.items[largest].priority) {
        largest = right;
      }
      if (largest === i) break;
      [this.items[largest], this.items[i]] = [this.items[i], this.items[largest]];
      i = largest;
    }
  }
}

export class RecommendationEngine {
  // Adjacency graph: productId -> Map<relatedProductId, coPurchaseCount>
  private graph: Map<string, Map<string, number>>;
  // Product -> Set of orders containing it
  private productOrders: Map<string, Set<string>>;
  // Total orders processed
  private orderCount: number;

  constructor() {
    this.graph = new Map();
    this.productOrders = new Map();
    this.orderCount = 0;
  }

  /**
   * Process a batch of orders to build the co-purchase graph.
   */
  buildFromOrders(orders: OrderData[]): void {
    for (const order of orders) {
      this.addOrder(order);
    }
  }

  /**
   * Add a single order to the co-purchase graph.
   * Connects all products in the order to each other.
   */
  addOrder(order: OrderData): void {
    const { orderId, productIds } = order;
    this.orderCount++;

    // Index products by order
    for (const pid of productIds) {
      if (!this.productOrders.has(pid)) {
        this.productOrders.set(pid, new Set());
      }
      this.productOrders.get(pid)!.add(orderId);

      if (!this.graph.has(pid)) {
        this.graph.set(pid, new Map());
      }
    }

    // Build edges between all pairs of products in this order
    for (let i = 0; i < productIds.length; i++) {
      for (let j = i + 1; j < productIds.length; j++) {
        const a = productIds[i];
        const b = productIds[j];

        const edgesA = this.graph.get(a)!;
        const edgesB = this.graph.get(b)!;

        edgesA.set(b, (edgesA.get(b) || 0) + 1);
        edgesB.set(a, (edgesB.get(a) || 0) + 1);
      }
    }
  }

  /**
   * Get recommendations for a product using Jaccard similarity.
   * @param productId - The product to get recommendations for
   * @param topN - Number of recommendations to return (default: 5)
   */
  getRecommendations(productId: string, topN: number = 5): RecommendationResult[] {
    const edges = this.graph.get(productId);
    if (!edges || edges.size === 0) return [];

    const productOrderSet = this.productOrders.get(productId);
    if (!productOrderSet) return [];

    const heap = new MaxHeap<{ productId: string; coPurchaseCount: number }>();

    for (const [candidateId, coPurchaseCount] of edges) {
      const candidateOrderSet = this.productOrders.get(candidateId);
      if (!candidateOrderSet) continue;

      // Jaccard similarity: |A ∩ B| / |A ∪ B|
      const intersection = new Set([...productOrderSet].filter((x) => candidateOrderSet.has(x)));
      const union = new Set([...productOrderSet, ...candidateOrderSet]);
      const jaccardScore = intersection.size / union.size;

      // Combined score: Jaccard similarity * co-purchase weight
      const score = jaccardScore * Math.log2(coPurchaseCount + 1);

      heap.insert({ productId: candidateId, coPurchaseCount }, score);
    }

    const results: RecommendationResult[] = [];
    for (let i = 0; i < topN && heap.size > 0; i++) {
      const extracted = heap.extractMax()!;
      results.push({
        productId: extracted.item.productId,
        score: Math.round(extracted.priority * 1000) / 1000,
        coPurchaseCount: extracted.item.coPurchaseCount,
        reason: `Bought together ${extracted.item.coPurchaseCount} time(s)`,
      });
    }

    return results;
  }

  /**
   * Get the number of unique products in the graph.
   */
  getProductCount(): number {
    return this.graph.size;
  }

  /**
   * Get the total number of edges (co-purchase relationships).
   */
  getEdgeCount(): number {
    let count = 0;
    for (const edges of this.graph.values()) {
      count += edges.size;
    }
    return count / 2; // Undirected graph, each edge counted twice
  }

  /**
   * Get graph stats for debugging/display.
   */
  getStats() {
    return {
      products: this.getProductCount(),
      edges: this.getEdgeCount(),
      orders: this.orderCount,
      avgEdgesPerProduct:
        this.graph.size > 0
          ? Math.round(
              ([...this.graph.values()].reduce((sum, e) => sum + e.size, 0) / this.graph.size) *
                100,
            ) / 100
          : 0,
    };
  }
}
