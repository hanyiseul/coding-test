// 캐시 시스템 예제 1: LRU 캐시 클래스

class LRUCache {
    constructor(limit) {
        this.limit = limit;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return null;

        const value = this.cache.get(key);

        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        this.cache.set(key, value);

        if (this.cache.size > this.limit) {
            const oldestKey = this.cache.keys().next().value;
            this.cache.delete(oldestKey);
        }
    }
}

const productCache = new LRUCache(3);

console.log('LRU 캐시 생성 완료');

// 캐시 시스템 예제 2: 캐시 조회

productCache.put('product:101', '노트북');
productCache.put('product:102', '키보드');
productCache.put('product:103', '마우스');

console.log(productCache.get('product:102')); // 키보드
console.log(productCache.get('product:999')); // null