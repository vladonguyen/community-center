import Image from "next/image";

export const Gallery = ({columns, cropImages, items}) => {
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
    const columnWidth = 100/columns;
    return <div className="flex flex-wrap max-w-5xl mx-auto">
        {items.map(item => (
            <div 
            key={item.id}
            style={{width: `${columnWidth}%` }}
             className="p-5 flex-grow"
            >
                <Image 
                src={item.attributes.url} 
                //CHANGED fixed width and heigth graphql props
                //old code here
                // height={maxHeight || item.attributes.height}
                // width={maxWidth || item.attributes.width} 
                // height={100}
                // width={100} 
                height={0}
                width={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
                alt={item.attributes.alt || ""} 
                // objectFit="cover"
                 />
            </div>
        ))}
    </div>
}