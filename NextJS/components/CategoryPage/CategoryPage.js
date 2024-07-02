import Image from "next/image";
import Link from "next/link";

import "./categorypage.css";
import Date from "components/Date/Date";
import { getCategoryPosts } from "utils/getCategoryPosts";



export const CategoryPage = ({ categoryPosts }) => {
    console.log("categoryPosts!:", categoryPosts[0]);
    return (
        <div>
            {categoryPosts.eventTime === "future" && (<h1 className="cat-name">ПРЕДСТОЯЩИ {categoryPosts.name}</h1>)}
            {categoryPosts.eventTime === "past" && (<h2 className="cat-name">МИНАЛИ {categoryPosts.name}</h2>)}
            {categoryPosts.eventTime === "null" && (<h1 className="cat-name">{categoryPosts.name}</h1>)}

            {(categoryPosts[0]===undefined) && (<div className="no-events">В момента няма предстоящи събития!</div>)}
            
            <div className="newsGalleryView">
                {categoryPosts.map((post, index) => (
                    <div className="news-item">
                        <Link href={`/${post.node.slug}`}>

                            <div key={index} className="newsImgBox">
                                <Image src={post.node.featuredImage.node.sourceUrl} alt={post.node.featuredImage.node.altText} width="250" height="250" />
                            </div>
                            <div className="text-date">
                                <p className="cat-date">
                                    {categoryPosts.catId !== 5 ? 'Публикувано на: ' : 'Дата на събитието: '}
                                    <Date dateString={post.node.date} />
                                </p>
                                <h2 className="cat-title">{post.node.title}</h2>
                            </div>

                        </Link> </div>
                ))}

            </div>
            {/* <div className="nextPage"
            //   onClick={getCategoryPosts(categoryPosts.catId,categoryPosts.after)}
            >
              <Link href={`?catId=${categoryPosts.catId}&after=${categoryPosts.after}`}>
             Следващата страница</Link>
                 
            </div> */}
        </div>
    );
};