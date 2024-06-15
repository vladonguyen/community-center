export const extractListItems = (htmlString) => {
    // Regular expression to match <li> elements
    const liRegex = /<li\b[^>]*>(.*?)<\/li>/gs;
    const listItems = htmlString.match(liRegex) || [];
  
    // Regular expressions to extract image URL, title, content, href, and date
    const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/;
    const titleRegex = /<a[^>]+href="[^"]+"[^>]*>([^<]+)<\/a>/;
    const contentRegex = /<div[^>]*class="wp-block-latest-posts__post-excerpt"[^>]*>([^<]+)/;
    const hrefRegex = /<a[^>]+href="https:\/\/chitalishte\.ecovege\.org\/([^"]+)"[^>]*>/;
    const dateRegex = /datetime="(\d{4})-(\d{2})-(\d{2})T/;
  
    return listItems.map(li => {
      const imageMatch = li.match(imgRegex);
      const titleMatch = li.match(titleRegex);
      const contentMatch = li.match(contentRegex);
      const hrefMatch = li.match(hrefRegex);
      const dateMatch = li.match(dateRegex);
  
      const dateObject = dateMatch ? { year: dateMatch[1], month: dateMatch[2], date: dateMatch[3] } : null;
  
      return {
        image: imageMatch ? imageMatch[1] : '',
        title: titleMatch ? titleMatch[1] : '',
        content: contentMatch ? contentMatch[1] : '',
        href: hrefMatch ? hrefMatch[1] : '',
        date: dateObject
      };
    });
  }
  