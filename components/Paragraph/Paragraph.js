import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrl } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({textAlign = "left", content, textColor}) => {
return (
<p 

className={` ${getTextAlign(textAlign)}`}
style={{color: textColor, padding: 10}}
dangerouslySetInnerHTML={{__html: relativeToAbsoluteUrl(content) }}
/>
);
}