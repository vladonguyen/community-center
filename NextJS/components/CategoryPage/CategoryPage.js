import Image from "next/image";
import Link from "next/link";

import "./categorypage.css";
import Date from "components/Date/Date";

export const CategoryPage = ({ categoryPosts }) => {
    return (
    
      <div className="newsGalleryView">
        {categoryPosts.map((post, index) => (
            <div className="news-item">
         <Link href={`/${post.node.slug}`}> 
         <div key={index} className="newsImgBox">
              <Image src={post.node.featuredImage.node.sourceUrl} alt={post.node.featuredImage.node.altText}  width="300" height="300" />
            <p className="cat-date">Публикувано на: <Date dateString={post.node.date} /> </p>
            <h2 className="cat-title">{post.node.title}</h2>
           
         
          
          </div> </Link> </div>
        ))}
      </div>
    );
  };