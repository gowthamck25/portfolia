import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled, { css } from "styled-components";

import { useOutsideClick } from "../hooks/useOutsideClick";
import { OpenWindowContext as HeaderOpenWindowContext } from "./Header";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 99999;
  transition: all 0.5s;
`;

const CTABox = styled.div`
  padding: 2.4rem 3.2rem 3.2rem 3.2rem;
  background-image: linear-gradient(to right bottom, #eb984e, #e67e22);

  @media (max-width: 65em) {
    order: 1;
  }

  @media (max-width: 49em) {
    height: 50vh;
    overflow: scroll;
  }

  @media (max-width: 27em) {
    padding: 2.4rem 3.2rem;
  }

  @media (max-width: 27em) {
    padding: 2.4rem;
  }

  @media (max-width: 20em) {
    padding: 2rem;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;
  border-radius: 50%;
  background-color: rgb(253, 126, 20, 0.35);

  &:hover {
    background-color: rgb(253, 126, 20, 0.2);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-orange-50);
    border-radius: var(--border-radius-sm);
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setIsOpenName] = useState("");
  const close = () => setIsOpenName("");
  const open = setIsOpenName;

  return (
    <ModalContext.Provider
      value={{
        open,
        close,
        openName,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  const { setIsOpen } = useContext(HeaderOpenWindowContext);

  function handleClick() {
    open(opensWindowName);
    setIsOpen(false);
  }

  return cloneElement(children, { onClick: handleClick });
}

function Window({ children, name, imgDetails }) {
  const StyledModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    transition: all 0.5s;
    overflow: hidden;

    ${imgDetails &&
    css`
      display: flex;
      width: 75%;
    `}

    @media (max-width: 90em) {
      ${imgDetails &&
      css`
        display: flex;
        width: 85%;
      `}
    }

    @media (max-width: 65em) {
      /* top: 610px; */
      /* left: 515px; */
      /* top: 130%; */
      flex-direction: column;

      ${imgDetails &&
      css`
        width: 90%;
      `};
    }
  `;

  let ImgBox;
  if (imgDetails)
    ImgBox = styled.div`
      background-image: linear-gradient(
          to right bottom,
          rgba(235, 151, 78, 0.349),
          rgba(230, 126, 34, 0.349)
        ),
        url("/form-img.jpeg");
      background-position: center;
      background-size: cover;
      width: 100%;

      @media (max-width: 65em) {
        order: 0;
        height: 45rem;
        background-position: top;
        background-image: linear-gradient(
            to right bottom,
            rgba(235, 151, 78, 0.349),
            rgba(230, 126, 34, 0.349)
          ),
          url("/cta-img2.jpg");
      }

      @media (max-width: 27em) {
        background-image: linear-gradient(
            to right bottom,
            rgba(235, 151, 78, 0.349),
            rgba(230, 126, 34, 0.349)
          ),
          url("/form-img.jpeg");
      }

      @media (max-width: 20em) {
        height: 35rem;
      }
    `;

  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <CTABox>
          <Button onClick={close}>
            <HiXMark />
          </Button>

          <div>{cloneElement(children, { onClick: close })}</div>
        </CTABox>
        {imgDetails && <ImgBox></ImgBox>}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
