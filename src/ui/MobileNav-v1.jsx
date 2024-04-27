import { NavLink, useNavigate } from "react-router-dom";
import { Link, animateScroll as scroll, Element, scroller } from "react-scroll";
import styled, { css } from "styled-components";

import "../styles/form.css";
import Modal from "./Modal";
import ConnectForm from "../features/connect/ConnectForm";
import Button from "./Button";

const StyledList = styled.ul.attrs({
  className: "mobile-nav",
})`
  display: none;

  @media (max-width: 49em) {
    list-style: none;

    background-color: rgb(255, 255, 255, 0.9);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
    transition: all 0.5s ease-in;
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-grey-500);
    font-size: 1.8rem;
    letter-spacing: 0.25px;
    font-weight: 500;
    transition: all 0.3s;
  }

  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-indigo-500);
  }

  &:hover {
    color: var(--color-grey-800);
  }
`;

function MobileNav() {
  //   const navigate = useNavigate();
  //   function handleClick() {
  //     navigate("/home");
  //     scroller.scrollTo("about", {
  //       duration: 500,
  //       smooth: true,
  //       // delay: 100,
  //     });
  //     // scroll.scrollToTop("about");
  //   }

  return (
    <StyledList>
      <li>
        <StyledNavLink to="/home">Home</StyledNavLink>
      </li>
      {/* <li>
        <Link
        onClick={handleClick}
        // to="about"
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        >
        About
        </Link>
      </li> */}
      <li>
        <StyledNavLink to="/work">Work</StyledNavLink>
      </li>
      <li className="modal-form-nav-link">
        <Modal>
          <Modal.Open opens="connect-form">
            <Button variation="link" size="extraSmall">
              Connect
            </Button>
          </Modal.Open>
          <Modal.Window name="connect-form" imgDetails={true}>
            <ConnectForm />
          </Modal.Window>
        </Modal>
      </li>
      <li>
        <StyledNavLink
          target="_blank"
          to="https://drive.google.com/file/d/1nR0mGe0pmGejZT9xvtkm5NB_yPunUZUn/view?usp=drive_link"
        >
          Resume
        </StyledNavLink>
      </li>
    </StyledList>
  );
}

export default MobileNav;
