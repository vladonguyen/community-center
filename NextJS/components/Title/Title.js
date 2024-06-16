import React from "react";

export const Title = ({ title }) => {
    const theTitle = { __html: title };
    return (
        <h1 >{ title }</h1> 
    );
};
