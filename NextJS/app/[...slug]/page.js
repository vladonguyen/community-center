import { BlockRenderer } from "components/BlockRenderer";
import { Title } from "components/Title";
import { notFound } from "next/navigation";
import { getPage } from "utils/getPage"
import { getSeo } from "utils/getSeo";

export default async function Page({ params }) {
    const data = await getPage(params.slug.join("/"));


    if (!data) {
        notFound();
    }
    console.log("DATA!: ", data.props)
    return (
        <main>
            <Title title={data.props.title} />
            <BlockRenderer blocks={data.props.blocks} propertyFeaturesProps={data.props.propertyFeatures} />
        </main>
    )

}

export async function generateMetadata({ params }) {
    const seo = await getSeo(params.slug.join("/"));
    return {
        title: seo?.title || "",
        description: seo?.metaDesc || "",
    }
}