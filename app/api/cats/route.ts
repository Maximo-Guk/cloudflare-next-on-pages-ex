// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes
// https://github.com/cloudflare/next-on-pages/tree/main/internal-packages/next-dev

export const runtime = 'edge';

async function getCatImageKeys() {
	const catImageBucket = process.env.CAT_IMAGE_BUCKET;
	const catImageKeys = await catImageBucket.list();
	return catImageKeys.objects.map(({ key }) => {
		return key;
	});
}

export async function GET() {
	return Response.json({ imageKeys: await getCatImageKeys() });
}
