import Link from "next/link";


export const Introtext = ({
    title,
    intro_text,
    link_url,
}) => {
  

  
  return (
    <section className="about-chitalishte">
    <h1>{title}</h1>
    <div className="text">
        <p>{ intro_text}</p>
    </div>
    <div className="learn-more"><Link href= { link_url.url}>Научете повече &gt;&gt;</Link></div>
</section>


   
    
  );
};