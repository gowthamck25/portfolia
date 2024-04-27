import styled from "styled-components";
import Logo from "./Logo";
import HeaderNav from "./HeaderNav";
import { HiXMark } from "react-icons/hi2";

import "../styles/mobile-nav.css";
import { TfiMenuAlt } from "react-icons/tfi";
import MobileNav from "./MobileNav";
import { useEffect, useRef, useState } from "react";

const StyledHeader = styled.header.attrs({
  className: "header",
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 4.8rem;
  position: relative;

  @media (max-width: 65em) {
    padding: 2rem 4rem;
  }

  @media (max-width: 49em) {
    padding: 2rem 3.2rem;
  }

  @media (max-width: 24em) {
    padding: 2rem 2.4rem;
  }
`;

const ButtonMobielNav = styled.button`
  display: none;

  @media (max-width: 49em) {
    border: none;
    background: none;
    cursor: pointer;
    display: block;
    z-index: 100;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(
    function () {
      if (isOpen) {
        document.querySelector(".header").classList.add("nav-open");
      } else document.querySelector(".header").classList.remove("nav-open");

      function handleClick(e) {
        if (ref.current && ref.current.contains(e.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener("click", handleClick);
      () => document.removeEventListener("click", handleClick);
    },
    [isOpen]
  );

  return (
    <StyledHeader ref={ref}>
      <Logo />
      <HeaderNav />
      <MobileNav />
      <ButtonMobielNav onClick={() => setIsOpen((open) => !open)}>
        {!isOpen && (
          <TfiMenuAlt className="icon-mobile-nav" name="menu-outline" />
        )}
        {isOpen && <HiXMark className="icon-mobile-nav" name="close-outline" />}
      </ButtonMobielNav>
    </StyledHeader>
  );
}

export default Header;

/**
 *
 * As you click on menu-outline button isOpen state changes to true and triggers
 * a re-render of Header component.
 *
 * Thus, handleClick function does not immediatly close the MobileNav.
 * Instead Header gets re-rendered and our global eventlistners are ready to
 * listen to any click event happening in Header once again.
 *
 * This is the reason even thought ref.current conatins e.target our MobileNav
 * gets opened when we click on menu-outline button initailly
 */
