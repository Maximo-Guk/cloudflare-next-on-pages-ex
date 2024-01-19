'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

async function getCatPictures(
	setCatImageKeys: React.Dispatch<React.SetStateAction<string[]>>
) {
	const res = await fetch('/api/cats');
	const parsedRes: { imageKeys: string[] } = await res.json();
	setCatImageKeys(parsedRes.imageKeys);
}

function Cats() {
	const [catImageKeys, setCatImageKeys] = useState<string[]>([]);

	useEffect(() => {
		getCatPictures(setCatImageKeys);
	}, []);

	return (
		<>
			{catImageKeys.length > 0
				? catImageKeys.map((imageKey) => {
						return (
							<Image
								src={`https://cat-images.maximoguk.com/${imageKey}`}
								key={imageKey}
								width={200}
								height={200}
								alt="Image of a cat"
							/>
						);
				  })
				: null}
		</>
	);
}

export default Cats;
