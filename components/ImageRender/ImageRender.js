import Image from "next/image"
import { getImage } from "utils/getImage"
import "./imagerender.css"

export const ImageRender = async ({ keyId, src, alt, dynamicContent }) => {

    const data = await getImage(src);



    const pattern = /\b(alignleft|aligncenter|alignright)\b/g;
    let textAlign = dynamicContent.match(pattern);
    if (textAlign == null){
        textAlign = "";
    }


    return (
        // <div className="imgContainer">
        <Image
            className={`imgInText ${textAlign}`}
            key={keyId}
            src={src}
            width={data?.width || 300}
            height={data?.height || 300}
            alt={alt || ""}
        />
        // </div>

    )
}