import "./listitem.css"

export const ListItem = (blocks)=>{
    let content;
    if(blocks.dynamicContent){
        content = blocks.dynamicContent;
    }else {
        content = blocks.originalContent;
    }

    console.log("content", content)
    const cleanHTML = content.replace(/<\/?li>/g, '');

    const rawHTML = cleanHTML;

    return <li dangerouslySetInnerHTML={{ __html: rawHTML }} />

}