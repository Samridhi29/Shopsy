//kind of giant json, stores key-value pairs. We would use it to store refresr tokens with user id as the key

import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);