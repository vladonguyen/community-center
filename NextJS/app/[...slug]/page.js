import { BlockRenderer } from "components/BlockRenderer";
import { Title } from "components/Title";
import { notFound } from "next/navigation";
import { getPage } from "utils/getPage"
import { getSeo } from "utils/getSeo";

import Date from "components/Date/Date";
import { getCategoryPosts } from "utils/getCategoryPosts";
import { CategoryPage } from "components/CategoryPage";


export default async function Page({ params }) {
    const data = await getPage(params.slug.join("/"));


    if (!data) {
        notFound();
    }
    // console.log("DATA!: ", data, params.slug[0], params.slug[1], data.props.__typename);
    //Check whether it is category Events

    let categoryPosts;
    
    if (params.slug[0] === "events") {
        console.log("EVENTS WORKS");
      categoryPosts = await getCategoryPosts();
     console.log("categoryPosts", categoryPosts)
    }

    let isPost = false;
    if (data.props.__typename === "Post") {
        isPost = true;
    }
    return (
        <main>
            <Title title={data.props.title} />
            {isPost && (<div className="postDate">Публикувано на: <Date dateString={data.props.date} /> </div>)
            }

            <BlockRenderer blocks={data.props.blocks} propertyFeaturesProps={data.props.propertyFeatures} />
            {categoryPosts && (<CategoryPage categoryPosts={categoryPosts}/>)}
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