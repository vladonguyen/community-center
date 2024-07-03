"use client";
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import "./video.css";

function Video({ youtubeUrl }) {
    const [toggler, setToggler] = useState(false);

    // Function to extract YouTube video ID
    const extractYoutubeId = (url) => {
        const pattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(pattern);
        return match ? match[1] : null;
    };

    // Function to construct image URL
    const constructImageUrl = (youtubeId) => {
        return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
    };

    // Extract video ID and construct image URL
    const videoId = extractYoutubeId(youtubeUrl);
    const imageUrl = videoId ? constructImageUrl(videoId) : '';

    return (
        <><div className="center-video">
            <button onClick={() => setToggler(!toggler)}>
			{imageUrl && (
				
                <div className="thumbnail-wrapper" onClick={() => setToggler(true)}>
                    <img src={imageUrl} alt="YouTube Thumbnail" className="thumbnail-image" />
                    <div className="play-button">
                        <img src="./img/youtube-play-button.svg" alt="Play Button" />
                    </div>
                </div>
				
            )}
            </button>
			</div>
            <FsLightbox
                toggler={toggler}
                sources={[youtubeUrl]}
                type="youtube"
            />
           
           
        </>
    );
}

export default Video;
