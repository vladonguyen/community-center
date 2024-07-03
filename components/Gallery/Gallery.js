import "./gallery.css";
import LigthBox from "components/LigthBox/LigthBox";

export const Gallery = ({ columns, cropImages, items }) => {
    let maxHeight = 0;
    let maxWidth = 0;
    if (cropImages) {
        items.forEach(item => {
            if (item.attributes.height > maxHeight) {
                maxHeight = item.attributes.height;
                maxWidth = item.attributes.width;
            }

        });
    }

    const imagesSrc = items.map(item => item.attributes.url);

    return <div className="flex flex-wrap max-w-5xl mx-auto">

        {items.map((item, index) => (
            <div
                key={item.id}

                className="p-5 flex-grow"
            >
                <LigthBox imagesSrc={imagesSrc} item={item} index={index} />
            </div>
        ))}

    </div>
}