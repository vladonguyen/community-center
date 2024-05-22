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
    console.log("SEO!: ", seo)
    return {
        title: seo?.title || "",
        description: seo?.metaDesc || "",
    }
}