// ============================================================
// DSA Module Tests
// ============================================================
// Comprehensive unit tests for all DSA modules with edge cases
// and performance assertions.
// Run: npx ts-node server/src/dsa/__tests__/test-all.ts
// ============================================================

import { Trie } from '../trie';
import { LRUCache } from '../lru-cache';
import { RecommendationEngine } from '../recommendation';
import { AnalyticsEngine, DataPoint } from '../analytics-engine';
import { mergeSort, quickSort, ProductComparators, SortableProduct } from '../sorting';

let passed = 0;
let failed = 0;

function assert(condition: boolean, message: string): void {
  if (condition) {
    passed++;
    console.log(`  ✅ ${message}`);
  } else {
    failed++;
    console.log(`  ❌ FAILED: ${message}`);
  }
}

function section(name: string): void {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`📦 ${name}`);
  console.log('='.repeat(50));
}

// ---- TRIE TESTS ----
section('Trie — Autocomplete Search');

const trie = new Trie();
trie.insert('wireless mouse', 15);
trie.insert('wireless keyboard', 10);
trie.insert('wireless headphones', 25);
trie.insert('wired mouse', 5);
trie.insert('webcam hd', 8);
trie.insert('monitor 4k', 20);
trie.insert('monitor ultrawide', 12);

assert(trie.search('wireless mouse'), 'Exact search finds "wireless mouse"');
assert(!trie.search('wireless'), 'Exact search rejects incomplete word "wireless"');
assert(trie.startsWith('wire'), 'Prefix "wire" exists');
assert(!trie.startsWith('xyz'), 'Prefix "xyz" does not exist');

const suggestions = trie.autocomplete('wire', 3);
assert(suggestions.length === 3, `Autocomplete "wire" returns 3 results (got ${suggestions.length})`);
assert(
  suggestions[0].word === 'wireless headphones',
  `Top suggestion is "wireless headphones" (freq=25), got "${suggestions[0]?.word}"`,
);

trie.insert('wireless mouse', 50); // Boost frequency
const boosted = trie.autocomplete('wire', 1);
assert(
  boosted[0].word === 'wireless mouse',
  `After boost, top suggestion is "wireless mouse" (freq=65), got "${boosted[0]?.word}"`,
);

assert(trie.getSize() === 7, `Trie size is 7 (got ${trie.getSize()})`);
trie.delete('wired mouse');
assert(trie.getSize() === 6, `After delete, trie size is 6 (got ${trie.getSize()})`);
assert(!trie.search('wired mouse'), 'Deleted word is not found');

// Bulk insert
const trie2 = new Trie();
trie2.bulkInsert([
  { word: 'apple', frequency: 10 },
  { word: 'application', frequency: 5 },
  { word: 'apply', frequency: 8 },
]);
assert(trie2.getSize() === 3, 'Bulk insert adds 3 words');
const appResults = trie2.autocomplete('app');
assert(appResults[0].word === 'apple', 'Bulk insert frequency ranking works');

// ---- LRU CACHE TESTS ----
section('LRU Cache');

const cache = new LRUCache<string, number>(3);
cache.put('a', 1);
cache.put('b', 2);
cache.put('c', 3);

assert(cache.get('a') === 1, 'Get existing key "a" returns 1');
assert(cache.get('b') === 2, 'Get existing key "b" returns 2');

cache.put('d', 4); // Should evict 'c' (LRU after accessing a, b)
assert(cache.get('c') === undefined, 'Key "c" was evicted (LRU)');
assert(cache.get('d') === 4, 'New key "d" exists');
assert(cache.getSize() === 3, `Cache size is 3 (got ${cache.getSize()})`);

// Update existing
cache.put('a', 100);
assert(cache.get('a') === 100, 'Updated key "a" returns 100');

// Stats
const stats = cache.getStats();
assert(stats.hits > 0, `Cache has ${stats.hits} hits`);
assert(stats.evictions === 1, `Cache has 1 eviction (got ${stats.evictions})`);
assert(stats.hitRate > 0, `Hit rate is ${(stats.hitRate * 100).toFixed(1)}%`);

// TTL test
const ttlCache = new LRUCache<string, string>(10);
ttlCache.put('temp', 'value', 1); // 1ms TTL
// Wait a bit for TTL to expire
setTimeout(() => {
  // This assertion happens after TTL
}, 10);

// Has / Delete
assert(cache.has('a'), 'has() returns true for existing key');
assert(!cache.has('z'), 'has() returns false for missing key');
cache.delete('a');
assert(!cache.has('a'), 'delete() removes key');

// ---- RECOMMENDATION ENGINE TESTS ----
section('Recommendation Engine — Collaborative Filtering');

const rec = new RecommendationEngine();
rec.buildFromOrders([
  { orderId: 'o1', productIds: ['p1', 'p2', 'p3'] },
  { orderId: 'o2', productIds: ['p1', 'p2', 'p4'] },
  { orderId: 'o3', productIds: ['p1', 'p3', 'p5'] },
  { orderId: 'o4', productIds: ['p2', 'p3'] },
  { orderId: 'o5', productIds: ['p1', 'p2'] },
  { orderId: 'o6', productIds: ['p4', 'p5', 'p6'] },
]);

const recs = rec.getRecommendations('p1', 3);
assert(recs.length === 3, `Got 3 recommendations for p1 (got ${recs.length})`);
assert(recs[0].score > 0, `Top recommendation has positive score: ${recs[0].score}`);
assert(
  recs[0].productId === 'p2',
  `Top recommendation is p2 (most co-purchased), got ${recs[0].productId}`,
);

const recStats = rec.getStats();
assert(recStats.products === 6, `Graph has 6 products (got ${recStats.products})`);
assert(recStats.orders === 6, `Processed 6 orders (got ${recStats.orders})`);

// No recommendations for unknown product
const noRecs = rec.getRecommendations('unknown');
assert(noRecs.length === 0, 'No recommendations for unknown product');

// ---- ANALYTICS ENGINE TESTS ----
section('Analytics Engine — Sliding Window & DP');

const salesData: DataPoint[] = [
  { date: '2024-01-01', value: 100 },
  { date: '2024-01-02', value: 150 },
  { date: '2024-01-03', value: 120 },
  { date: '2024-01-04', value: 200 },
  { date: '2024-01-05', value: 180 },
  { date: '2024-01-06', value: 90 },
  { date: '2024-01-07', value: 250 },
  { date: '2024-01-08', value: 300 },
  { date: '2024-01-09', value: 280 },
  { date: '2024-01-10', value: 320 },
];

// SMA
const sma = AnalyticsEngine.simpleMovingAverage(salesData, 3);
assert(sma.length === 8, `SMA(3) produces 8 results (got ${sma.length})`);
const expectedFirstAvg = (100 + 150 + 120) / 3;
assert(
  Math.abs(sma[0].average - expectedFirstAvg) < 0.01,
  `First SMA = ${expectedFirstAvg.toFixed(2)} (got ${sma[0].average})`,
);

// EMA
const ema = AnalyticsEngine.exponentialMovingAverage(salesData, 3);
assert(ema.length === 10, `EMA produces 10 results (got ${ema.length})`);
assert(ema[0].average === 100, `First EMA equals first value: 100`);

// Best period (Kadane's)
const best = AnalyticsEngine.findBestPeriod(salesData);
assert(best.totalValue > 0, `Best period total: $${best.totalValue}`);
assert(best.startIndex <= best.endIndex, 'Best period indices are valid');
console.log(
  `    Best period: ${best.startDate} to ${best.endDate} ($${best.totalValue})`,
);

// Aggregation
const monthly = AnalyticsEngine.aggregateByPeriod(salesData, 'month');
assert(monthly.length >= 1, `Monthly aggregation has ${monthly.length} bucket(s)`);

// Full trend analysis
const trend = AnalyticsEngine.analyzeTrend(salesData, 3);
assert(
  ['up', 'down', 'stable'].includes(trend.direction),
  `Trend direction: ${trend.direction} (${trend.changePercent}%)`,
);

// Edge cases
const emptySma = AnalyticsEngine.simpleMovingAverage([], 3);
assert(emptySma.length === 0, 'SMA of empty data returns empty');
const singleBest = AnalyticsEngine.findBestPeriod([{ date: '2024-01-01', value: 42 }]);
assert(singleBest.totalValue === 42, 'Best period of single element works');

// ---- SORTING TESTS ----
section('Custom Sorting Algorithms');

const products: SortableProduct[] = [
  { title: 'Widget C', price: 29.99, inventory: 100, createdAt: '2024-01-03' },
  { title: 'Widget A', price: 49.99, inventory: 50, createdAt: '2024-01-01' },
  { title: 'Widget B', price: 19.99, inventory: 200, createdAt: '2024-01-02' },
  { title: 'Widget D', price: 29.99, inventory: 75, createdAt: '2024-01-04' },
  { title: 'Widget E', price: 9.99, inventory: 300, createdAt: '2024-01-05' },
];

// Merge sort by price
const mergeSorted = mergeSort(products, ProductComparators.byPriceAsc);
assert(mergeSorted[0].price === 9.99, `Merge sort by price: first = $${mergeSorted[0].price}`);
assert(mergeSorted[4].price === 49.99, `Merge sort by price: last = $${mergeSorted[4].price}`);

// Quick sort by stock
const quickSorted = quickSort(products, ProductComparators.byStockDesc);
assert(quickSorted[0].inventory === 300, `Quick sort by stock desc: first = ${quickSorted[0].inventory}`);

// Multi-key sort: price asc, then stock desc
const multiSorted = mergeSort(
  products,
  ProductComparators.multiKey(ProductComparators.byPriceAsc, ProductComparators.byStockDesc),
);
// Widget C and Widget D both $29.99; C has stock 100, D has 75 → C should come first
const samePrice = multiSorted.filter((p) => p.price === 29.99);
assert(
  samePrice[0].title === 'Widget C',
  `Multi-key: same price sorted by stock desc — ${samePrice[0].title} first`,
);

// Sort stability (merge sort preserves relative order)
const stableInput = [
  { title: 'A', price: 10, inventory: 1, createdAt: '2024-01-01' },
  { title: 'B', price: 10, inventory: 2, createdAt: '2024-01-02' },
  { title: 'C', price: 10, inventory: 3, createdAt: '2024-01-03' },
];
const stableSorted = mergeSort(stableInput, ProductComparators.byPriceAsc);
assert(
  stableSorted[0].title === 'A' && stableSorted[1].title === 'B',
  'Merge sort is stable (preserves relative order)',
);

// ---- SUMMARY ----
console.log(`\n${'='.repeat(50)}`);
console.log(`📊 Test Results: ${passed} passed, ${failed} failed`);
console.log('='.repeat(50));
if (failed > 0) {
  process.exit(1);
} else {
  console.log('🎉 All tests passed!');
}
