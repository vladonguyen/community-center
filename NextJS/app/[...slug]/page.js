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
    // console.log(data)

    if (!data) {
        notFound();
    }
    // console.log("DATA!: ", data);
    //Check whether it is category Events

    let categoryPosts;
    let eventPostsFuture;
    let eventPostsPast;
    let categoryID;

    if (params.slug[0] === "news") {
        categoryID = 4;
        categoryPosts = await getCategoryPosts(categoryID, null, null);

    } else if (params.slug[0] === "events") {
        categoryID = 5;
        eventPostsFuture = await getCategoryPosts(categoryID, null, "future");
        eventPostsPast = await getCategoryPosts(categoryID, null, "past");
    }

    let isPost = false;
    if (data.props.__typename === "Post") {
        isPost = true;
    }
    // console.log("data.props.categoryIdPost: ", data)
    return (
        <main>
            <Title title={data.props.title} />
            {(isPost && data.props.categoryIdPost !== 5) && (
                <div className="postDate">Публикувано на: <Date dateString={data.props.date} /> </div>
            )}

            {(isPost && data.props.categoryIdPost == 5) && (
                <div className="postDate">Дата на събитието: <Date dateString={data.props.date} /> </div>
            )}


            <BlockRenderer blocks={data.props.blocks} propertyFeaturesProps={data.props.propertyFeatures} />
            {eventPostsFuture && (<CategoryPage categoryPosts={eventPostsFuture} />)}
            {eventPostsPast && (<CategoryPage categoryPosts={eventPostsPast} />)}
            {categoryPosts && (<CategoryPage categoryPosts={categoryPosts} />)}

        </main>
    )

}

export async function generateMetadata({ params }) {
    const seo = await getSeo(params.slug.join("/"));
    return  {
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