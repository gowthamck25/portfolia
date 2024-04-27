import styled from "styled-components";

const SideBarNavButton = styled.button`
  display: none;

  @media (max-width: 65em) {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0 0.8rem;
    display: block;
    align-self: start;
    transition: all 0.3s;

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;

export default SideBarNavButton;
