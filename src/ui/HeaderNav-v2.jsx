import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import "../styles/form.css";
import Modal from "./Modal";
import ConnectForm from "../features/connect/ConnectForm";
import Button from "./Button";
import HeaderNavStyledNavLink from "./HeaderNavStyledNavLink";

// const ScrollLink = Scroll.ScrollLink;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;

  @media (max-width: 65em) {
    gap: 4.8rem;
  }

  @media (max-width: 49em) {
    display: none;
  }
`;

// const ScrollLink = styled(ScrollLink)`
//   &:link,
//   &:visited {
//     color: var(--color-grey-500);
//     font-size: 1.8rem;
//     letter-spacing: 0.25px;
//     font-weight: 500;
//     transition: all 0.3s;
//   }

//   &:active,
//   &.active:link,
//   &.active:visited {
//     color: var(--color-indigo-500);
//   }

//   &:hover {
//     color: var(--color-grey-800);
//   }
// `;

function HeaderNav() {
  const navigate = useNavigate();
  function handleHomeClick() {
    if (window.location.pathname.startsWith("/work")) navigate("/home#");
    scroll.scrollTo(0);
  }

  function handleAboutClick() {
    navigate("/home#about");
  }

  function handleWorkClick() {
    navigate("/work");
  }

  return (
    <StyledList>
      <li>
        <ScrollLink
          onClick={handleHomeClick}
          className="scroll-link"
          activeClass="scroll-link-active"
          // to="header"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </ScrollLink>
      </li>
      <li>
        <a
          className="scroll-link"
          // onClick={handleAboutClick}
          // href="#about"
        >
          About
        </a>
      </li>
      <li>
        <HeaderNavStyledNavLink
          className="scroll-link"
          onClick={handleWorkClick}
          to="/work"
        >
          Work
        </HeaderNavStyledNavLink>
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
        <HeaderNavStyledNavLink
          target="_blank"
          to="https://drive.google.com/file/d/15R7TkvKYWV_tbfNV68AM82X2IASANh0e/view?usp=drive_link"
        >
          Resume
        </HeaderNavStyledNavLink>
      </li>
    </StyledList>
  );
}

export default HeaderNav;
