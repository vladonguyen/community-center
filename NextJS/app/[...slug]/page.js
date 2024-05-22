import { BlockRenderer } from "components/BlockRenderer";
import { notFound } from "next/navigation";
import { getPage } from "utils/getPage"
import { getSeo } from "utils/getSeo";

export default async function Page({params}){
    const data = await getPage(params.slug.join("/"));
    
    if(!data){
    notFound();
    }
    // console.log("DATA!: ", data)
    return <BlockRenderer blocks={data.props.blocks} propertyFeaturesProps={data.props.propertyFeatures}/>
}

export async function generateMetadata ({params}){
    const seo = await getSeo(params.slug.join("/"));
    return {
        title: seo?.title || "",
        description: seo?.metaDesc || "",
    }
}