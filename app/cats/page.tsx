'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

async function getCatPictures() {
	const res = await fetch('/api/cats');
	const parsedRes = await res.json();
}

function Cats() {
	const [catImageUrls, setCatImageUrls] = useState<string[]>([]);

	useEffect(() => {
		// setCatImageUrls(getCatPictures());
	}, []);

	return (
		<>
			{catImageUrls.length > 0
				? catImageUrls.map((imageUrl) => {
						<Image src="imageUrl" alt="Image of a cat" />;
				  })
				: null}
		</>
	);
}

export default Cats;
