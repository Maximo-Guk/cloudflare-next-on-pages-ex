// file: env.d.ts

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			CAT_IMAGE_BUCKET: R2Bucket;
			CAT_IMAGE_HASHES: KVNamespace;
		}
	}
}

export {};
