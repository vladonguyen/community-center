import { ImageRender } from "components/ImageRender";
import Image from "next/image";

export const CategoryPage = ({ categoryPosts }) => {
    return (
      <div>
        <h1>Category Posts</h1>
        {categoryPosts.map((post, index) => (
          <div key={index}>
            <h2>{post.node.title}</h2>
            <Image src={post.node.featuredImage.node.sourceUrl} alt={post.node.featuredImage.node.altText}  width="150" height="150" />
         
            <p>Date: {new Date(post.node.date).toLocaleDateString()}</p>
            <a href={`/${post.node.slug}`}>Read more</a>
          </div>
        ))}
      </div>
    );
  };