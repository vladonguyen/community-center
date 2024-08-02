import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const HeadingTitle = ({textAlign, originalContent, level}) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: originalContent},
        className: `${getTextAlign(textAlign)} }`
    })

    return tag;
}