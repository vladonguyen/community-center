import Image from "next/image"
import { getImage } from "utils/getImage"
import "./imagerender.css"

export const ImageRender = async ({ keyId, src, alt }) => {

    const data = await getImage(src);

    return (
        // <div className="imgContainer">
        <Image
            className="imgInText"
            key={keyId}
            src={src}
            width={data?.width || 300}
            height={data?.height || 300}
            alt={alt || ""}
        />
// </div>

    )
}