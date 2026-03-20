// ============================================================
// LRU Cache — Least Recently Used Cache
// ============================================================
// Implements an LRU cache using a doubly-linked list + hash map
// for O(1) get and put operations.
//
// Time Complexity: O(1) for both get and put
// Space Complexity: O(capacity)
//
// Design: The doubly-linked list maintains access order (most
// recent at head, least recent at tail). The hash map provides
// O(1) lookup by key. On access, nodes are moved to head.
// On capacity overflow, the tail node is evicted.
// ============================================================

interface CacheNode<K, V> {
  key: K;
  value: V;
  prev: CacheNode<K, V> | null;
  next: CacheNode<K, V> | null;
  expiresAt: number | null; // Unix timestamp for TTL
}

export interface CacheStats {
  hits: number;
  misses: number;
  evictions: number;
  size: number;
  capacity: number;
  hitRate: number;
}

export class LRUCache<K = string, V = unknown> {
  private capacity: number;
  private map: Map<K, CacheNode<K, V>>;
  private head: CacheNode<K, V> | null;
  private tail: CacheNode<K, V> | null;
  private hits: number;
  private misses: number;
  private evictions: number;

  constructor(capacity: number) {
    if (capacity <= 0) throw new Error('Cache capacity must be positive');
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
    this.hits = 0;
    this.misses = 0;
    this.evictions = 0;
  }

  /**
   * Get a value from the cache. Returns undefined if not found or expired.
   * Moves the accessed node to the head (most recently used).
   */
  get(key: K): V | undefined {
    const node = this.map.get(key);
    if (!node) {
      this.misses++;
      return undefined;
    }

    // Check TTL expiration
    if (node.expiresAt !== null && Date.now() > node.expiresAt) {
      this.removeNode(node);
      this.map.delete(key);
      this.misses++;
      return undefined;
    }

    this.hits++;
    this.moveToHead(node);
    return node.value;
  }

  /**
   * Put a key-value pair into the cache.
   * @param key - Cache key
   * @param value - Cache value
   * @param ttlMs - Time-to-live in milliseconds (optional)
   */
  put(key: K, value: V, ttlMs?: number): void {
    const existing = this.map.get(key);
    const expiresAt = ttlMs ? Date.now() + ttlMs : null;

    if (existing) {
      existing.value = value;
      existing.expiresAt = expiresAt;
      this.moveToHead(existing);
      return;
    }

    const newNode: CacheNode<K, V> = {
      key,
      value,
      prev: null,
      next: null,
      expiresAt,
    };

    this.map.set(key, newNode);
    this.addToHead(newNode);

    if (this.map.size > this.capacity) {
      this.evictLRU();
    }
  }

  /**
   * Check if a key exists in the cache (without affecting LRU order).
   */
  has(key: K): boolean {
    const node = this.map.get(key);
    if (!node) return false;
    if (node.expiresAt !== null && Date.now() > node.expiresAt) {
      this.removeNode(node);
      this.map.delete(key);
      return false;
    }
    return true;
  }

  /**
   * Delete a specific key from the cache.
   */
  delete(key: K): boolean {
    const node = this.map.get(key);
    if (!node) return false;
    this.removeNode(node);
    this.map.delete(key);
    return true;
  }

  /**
   * Clear all entries from the cache.
   */
  clear(): void {
    this.map.clear();
    this.head = null;
    this.tail = null;
  }

  /**
   * Get the current number of entries in the cache.
   */
  getSize(): number {
    return this.map.size;
  }

  /**
   * Get cache performance statistics.
   */
  getStats(): CacheStats {
    const total = this.hits + this.misses;
    return {
      hits: this.hits,
      misses: this.misses,
      evictions: this.evictions,
      size: this.map.size,
      capacity: this.capacity,
      hitRate: total > 0 ? this.hits / total : 0,
    };
  }

  // --- Doubly-linked list operations ---

  private addToHead(node: CacheNode<K, V>): void {
    node.prev = null;
    node.next = this.head;
    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  private removeNode(node: CacheNode<K, V>): void {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
    node.prev = null;
    node.next = null;
  }

  private moveToHead(node: CacheNode<K, V>): void {
    if (node === this.head) return;
    this.removeNode(node);
    this.addToHead(node);
  }

  private evictLRU(): void {
    if (!this.tail) return;
    const evicted = this.tail;
    this.removeNode(evicted);
    this.map.delete(evicted.key);
    this.evictions++;
  }
}
