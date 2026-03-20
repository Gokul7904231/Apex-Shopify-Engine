export class CacheService {
  private cache = new Map<string, { data: any, expiry: number }>();
  private TTL = 1000 * 60 * 5; // 5 mins default

  set(key: string, data: any, ttl?: number) {
    this.cache.set(key, { data, expiry: Date.now() + (ttl || this.TTL) });
  }

  get(key: string) {
    const item = this.cache.get(key);
    if (!item) return null;
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    return item.data;
  }
}

export const cacheService = new CacheService();
