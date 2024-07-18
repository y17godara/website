import { Redis } from "@upstash/redis";

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";
const REDIS_TOKEN = process.env.REDIS_TOKEN;

const redis = new Redis({
  url: REDIS_URL,
  token: REDIS_TOKEN,
});

export default redis;
