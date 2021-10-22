import Hamburger from "../../components/Header/Hamburger";
import Desktop from "../../components/Header/Desktop";

function Header() {
  //open the hamburger menu
  // const hamburger = this.querySelector(".hamburger");
  // const navMenu = this.querySelector(".nav-menu");
  // console.log(hamburger);
  // // hamburger.addEventListener("click", console.log("open seseame"));

  // function mobileMenu() {
  //   console.log("mobilemenu");
  //   hamburger.classList.toggle("active");
  //   navMenu.classList.toggle("active");
  // }
  // //close it
  // const navLink = document.querySelectorAll(".nav-link");

  // navLink.forEach((n) => n.addEventListener("click", closeMenu));

  // function closeMenu() {
  //   console.log("click worked");
  //   hamburger.classList.remove("active");
  //   navMenu.classList.remove("active");
  // }

  return (
    <>
      {typeof window !== "undefined" ? (
        window.innerWidth > 900 ? (
          <Desktop />
        ) : (
          <Hamburger />
        )
      ) : null}
    </>
  );
}

export default Header;
