import redisClient from "utils/redis-client";
import BloomFilter from "bloomfilter-redis";

const _MovieNameBloom = new BloomFilter({
    redisSize: 64,
    hashesNum: 8,
    redisKey: "bloom:movieName",
    redisClient: redisClient
});

export async function init() {
    if (!(await redisClient.existsAsync("bloom:operators"))) {
        _MovieNameBloom.init();
    }
}

export const MovieNameBloom = _MovieNameBloom;
