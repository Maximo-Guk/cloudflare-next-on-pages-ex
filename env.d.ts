// file: env.d.ts

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			CAT_IMAGE_BUCKET: R2Bucket;
		}
	}
}

export {};
