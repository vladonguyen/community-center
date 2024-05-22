import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({textAlign, originalContent, level}) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: originalContent},
        className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)} }`
    })

    return tag;
}