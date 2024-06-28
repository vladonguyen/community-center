"use client";
import Image from "next/image";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function App({imagesSrc, item, index}) {
    const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

	function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

	return (
		<>
			<button onClick={() => openLightboxOnSlide(index+1)}>
            <Image 
                src={item.attributes.url} 
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
                alt={item.attributes.alt || ""} 
                 />
                
			</button>
			
			<FsLightbox
				toggler={lightboxController.toggler}
				sources={imagesSrc}
				slide={lightboxController.slide}
                type="image"

			/>
		</>
	);
}
export default App;