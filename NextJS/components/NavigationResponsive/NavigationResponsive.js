"use client"
export const NavigationResponsive = () =>{

   

  return  <a
  href="javascript:void(0);"
  style={{ fontSize: 20 }}
  className="icon"
  onClick={()=> {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        console.log('clicked');
    } else {
        x.className = "topnav";
        console.log('no clicked');
    }
  }}
>
  ☰
</a>;
}

