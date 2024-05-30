import { extractListItems } from "utils/extractListItems";
import Link from 'next/link';
import "./latestposts.css";

export const LatestPosts = ({dynamicContent}) => {


   
    
    const listItems = extractListItems(dynamicContent);

    console.log(listItems);
    return (
        <section className="news">
  {/* TODO Needs betterment and css styling*/}
  <h2>НОВИНИ И СЪБИТИЯ</h2>
  <article className="news-events">
    <div className="two-columns">
      <div className="thumb-image">
        <img src={listItems[0].image} alt="" />
      </div>
      <div className="news-content">
        <h3>
        {listItems[0].title}
        </h3>
        <p>
        {listItems[0].content}
        </p>
        <p className="learn-more-link"><Link href={listItems[0].href}>Научете повече &gt;&gt;</Link></p>
      </div>
    </div>
  </article>

  <article className="news-events">
    <div className="two-columns">
      <div className="thumb-image">
        <img src={listItems[1].image} alt="" />
      </div>
      <div className="news-content">
        <h3>
        {listItems[1].title}
        </h3>
        <p>
        {listItems[1].content}
        </p>
        <p className="learn-more-link"><Link href={listItems[1].href}>Научете повече &gt;&gt;</Link></p>
      </div>
    </div>
  </article>

  <article className="news-events">
    <div className="two-columns">
      <div className="thumb-image">
        <img src={listItems[2].image} alt="" />
      </div>
      <div className="news-content">
        <h3>
        {listItems[2].title}
        </h3>
        <p>
        {listItems[2].content}
        </p>
        <p className="learn-more-link"><Link href={listItems[2].href}>Научете повече &gt;&gt;</Link></p>
      </div>
    </div>
  </article>

</section>

        
    )
}