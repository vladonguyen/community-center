"use client";

export const NavigationResponsive = () => {

  const handleMenuClick = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav sticky-nav") {
      let getAllShowMenuElements = document.querySelectorAll(".showMenuElement") || null;
      if (getAllShowMenuElements) {
        getAllShowMenuElements.forEach(element => {
          element.classList.remove("showMenuElement");
        });
      }
      x.className += " responsive";
    } else {
      x.className = "topnav sticky-nav";
    }
  };

  return (
    <div>
      <button className="icon" onClick={handleMenuClick}>
        <img className="hamburger-icon" src="./img/menu-burger-horizontal-svgrepo-com.svg" alt="Menu" />
      </button>
    </div>
  );
};
