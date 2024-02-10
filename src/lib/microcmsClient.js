import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.BLOG_API_ENDPOINT,
  apiKey: process.env.BLOG_API_KEY
});