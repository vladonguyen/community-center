export const relativeToAbsoluteUrl = (htmlString = "") => {
    return htmlString.split(process.env.NEXT_PUBLIC_WP_URL).join("");
}