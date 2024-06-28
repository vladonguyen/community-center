import "./gallery.css";
import App from "components/App/App";

export const Gallery = ({cropImages, items}) => {
    let maxHeight = 0;
    let maxWidth = 0;
    if(cropImages){
        items.forEach(item => {
            if(item.attributes.height > maxHeight){
                maxHeight = item.attributes.height;
                maxWidth = item.attributes.width;
            }
            
        });
    }

    const imagesSrc =items.map(item => item.attributes.url);
    console.log("imagesSrc!!!", imagesSrc)
    return <div className="flex flex-wrap max-w-5xl mx-auto">
     
        {items.map((item, index) => (
            <div 
            key={item.id}
            
             className="p-5 flex-grow galleryColumnWidth"
            >
                <App imagesSrc={imagesSrc} item={item} index={index}/>
            </div>
        ))}

    </div>
}