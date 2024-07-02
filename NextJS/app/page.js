import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";
import { notFound } from "next/navigation";
import { getSeo } from "utils/getSeo";

// main page tep
export default async function Home(){
    const data = await getPage("/");
if(!data){
notFound();
}
    return <BlockRenderer blocks={data.props.blocks}/>
}

export async function generateMetadata (){
    const seo = await getSeo("/");
    // console.log("SEO!: ", seo)
    return {
        title: seo?.title || "",
        description: seo?.metaDesc || "",
        openGraph: {
            title: seo?.opengraphTitle ,
            description: seo?.opengraphDescription,
            url: seo?.opengraphUrl,
            images: [
              {
                url: seo?.opengraphImage.mediaItemUrl , // Must be an absolute URL
              },
              {
                url: 'https://chitalishte.ecovege.org/wp-content/uploads/2024/06/chitalishte-aleko-konstantinov_800px-wide.jpg', // Must be an absolute URL

              },
            ],
            locale: 'bg_BG',
            type: 'website',
          },
    }
}