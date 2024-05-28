import Link from "next/link";


export const Introtext = ({
    title,
    intro_text,
    link_url,
}) => {
  

  
  return (
    <section class="about-chitalishte">
    <h1>{title}</h1>
    <div class="text">
        <p>{ intro_text}</p>
    </div>
    <div class="learn-more"><Link href= { link_url.url}>Научете повече &gt;&gt;</Link></div>
</section>


   
    
  );
};