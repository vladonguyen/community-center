import { extractListItems } from "utils/extractListItems";
import Link from 'next/link';
import "./latestposts.css";

export const LatestPosts = ({ dynamicContent }) => {
    const listItems = extractListItems(dynamicContent);

    console.log("THESE ARE LISTITEM", listItems);
    
    return (
        <section className="news">
            {/* TODO Needs betterment and css styling*/}
            <h2>НОВИНИ И СЪБИТИЯ</h2>

            {listItems.map((item, index) => (
                <article key={index} className="news-events">
                    <div className="two-columns">
                        <div className="thumb-image">
                            <img src={item.image} alt={item.altText} />
                        </div>
                        <div className="news-content">
                            <h3 dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                            <p> {item.date.date}.{item.date.month}.{item.date.year}</p>
                            <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                            <p className="learn-more-link">
                                <Link href={item.href}>Научете повече &gt;&gt;</Link>
                            </p>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
}
