export const extractListItems = (htmlString) => {
 // Regular expression to match <li> elements
 const liRegex = /<li\b[^>]*>(.*?)<\/li>/gs;
 const listItems = htmlString.match(liRegex) || [];

 
 // Regular expressions to extract image URL, title, and content
 const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/;
 const titleRegex = /<a[^>]+href="[^"]+"[^>]*>([^<]+)<\/a>/;
 const contentRegex = /<div[^>]*class="wp-block-latest-posts__post-excerpt"[^>]*>([^<]+)<\/div>/;
 const hrefRegex = /<a[^>]+href="https:\/\/chitalishte\.ecovege\.org\/([^"]+)"[^>]*>/;

 return listItems.map(li => {
     const imageMatch = li.match(imgRegex);
     const titleMatch = li.match(titleRegex);
     const contentMatch = li.match(contentRegex);
     const hrefMatch = li.match(hrefRegex)
     
     return {
         image: imageMatch ? imageMatch[1] : '',
         title: titleMatch ? titleMatch[1] : '',
         content: contentMatch ? contentMatch[1] : '',
         href: hrefMatch ? hrefMatch[1] : '', 
     };
 });
}