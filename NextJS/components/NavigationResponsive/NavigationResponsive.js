"use client"

export const NavigationResponsive = () => {

  const handleMenuClick = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav sticky-nav") {
      x.className += " responsive";
      // console.log('clicked');
    } else {
      x.className = "topnav sticky-nav";
      // console.log('no clicked');
    }
  };

  return (
    <div>
      {/* <div className="test-red">
        <div class="hamburger"></div>
        <div class="hamburger"></div>
        <div class="hamburger"></div>
      </div> */}
      
      <button className="icon" onClick={handleMenuClick}>
        <img className="hamburger-icon" src="./img/menu-burger-horizontal-svgrepo-com.svg" alt="Menu" />
      </button>
      </div>
  );
}
