import "./htmlblock.css";

export const HtmlBlock = (htmlContent)=>{
    const rawHTML = htmlContent.htmlContent;
    return <div dangerouslySetInnerHTML={{ __html: rawHTML }} />
}