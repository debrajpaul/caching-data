import redis from "redis";
import bluebird from "bluebird";
import log from "utils/logger";

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient(); // create client with defaults

client.on("error", err => {
	log("app:redis-client", "Failed to connect to redis:\n%O", err);
	process.exit(1);
});

export default client;
