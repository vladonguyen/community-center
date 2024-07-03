"use client";
import Image from "next/legacy/image";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

function LigthBox({imagesSrc, item, index}) {
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
            <div
			className="gallery-images"
			//  style={{ width: 150, height: 150, position: 'relative '}}
			 >
                    <Image 
                        src={item.attributes.url} 
                        layout="fill"
                        objectFit="cover"
                        alt={item.attributes.alt || ""} 
                    />
                </div>
                
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
export default LigthBox;