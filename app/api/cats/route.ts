// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes
// https://github.com/cloudflare/next-on-pages/tree/main/internal-packages/next-dev

import { sha256HashStrings } from '@/util/sha256HashStrings';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

interface CatImagesHashes {
	hashes: String[];
}

// async function getCatImageUrls() {
// 	const imageHashes = process.env.CAT_IMAGE_HASHES;
// 	await imageHashes.get<CatImagesHashes>('cats', 'json');
// }

// export async function GET(request: NextRequest) {
// 	return Response.json({ imageUrls: await getCatImageUrls() });
// }

// export async function PUT(request: NextRequest) {
// 	const imageHashes = process.env.CAT_IMAGE_HASHES;
// 	const sha256Hash = await sha256HashStrings(sha256FileHash, 'random-salt-we-generated');
// 	const S3 = new S3Client({
// 		region: 'auto',
// 		endpoint: `https://${process.env.ACCOUNT_ID!}.r2.cloudflarestorage.com`,
// 		credentials: {
// 			accessKeyId: process.env.ACCESS_KEY_ID!,
// 			secretAccessKey: process.env.SECRET_ACCESS_KEY!,
// 		},
// 	});

// 	const uploadUrl = await getSignedUrl(
// 		S3,
// 		new PutObjectCommand({
// 			Bucket: 'public',
// 			Key: `cats/${sha256Hash}`,
// 		}),
// 		{
// 			expiresIn: 3600,
// 		}
// 	);
// 	await imageHashes.put('cats', newHashes);
// 	return { sha256: sha256Hash, uploadUrl };
// }
