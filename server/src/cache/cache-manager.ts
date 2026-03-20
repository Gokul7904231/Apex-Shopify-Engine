import { LRUCache } from '../dsa/lru-cache';

interface CacheOptions {
  redisUrl?: string;
  lruCapacity?: number;
  defaultTTLMs?: number;
}

export class CacheManager {
  private lruCache: LRUCache<string, string>;
  private defaultTTLMs: number;
  private mode: 'lru' | 'redis';

  constructor(options: CacheOptions = {}) {
    const { lruCapacity = 500, defaultTTLMs = 300000 } = options;
    this.lruCache = new LRUCache<string, string>(lruCapacity);
    this.defaultTTLMs = defaultTTLMs;
    this.mode = 'lru';
    console.log(`[CacheManager] Running in ${this.mode.toUpperCase()} mode (capacity: ${lruCapacity})`);
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const raw = this.lruCache.get(key);
      if (raw === undefined) return null;
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }

  async set<T>(key: string, value: T, ttlMs?: number): Promise<void> {
    const serialized = JSON.stringify(value);
    this.lruCache.put(key, serialized, ttlMs || this.defaultTTLMs);
  }

  async delete(key: string): Promise<void> {
    this.lruCache.delete(key);
  }

  async clear(): Promise<void> {
    this.lruCache.clear();
  }

  getStats() {
    return { mode: this.mode, ...this.lruCache.getStats() };
  }
}

let cacheInstance: CacheManager | null = null;

export function getCache(options?: CacheOptions): CacheManager {
  if (!cacheInstance) {
    cacheInstance = new CacheManager(options);
  }
  return cacheInstance;
}
