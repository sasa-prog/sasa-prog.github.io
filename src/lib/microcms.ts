import { createClient } from 'microcms-js-sdk';

// If using Vite, ensure you have a vite-env.d.ts file with the following content:
// /// <reference types="vite/client" />

export const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: import.meta.env.MICROCMS_API_KEY!,
});

export type Post = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  updatedAt: string;
  thumbnail?: { url: string; width?: number; height?: number; alt?: string };
  author?: { id: string; name: string };
  draftKey?: string;
  metaDescription?: string;
};