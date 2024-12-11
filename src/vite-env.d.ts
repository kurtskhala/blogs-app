/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_SUPABASE_BLOG_IMAGES_STORAGE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}