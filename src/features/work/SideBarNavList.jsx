import styled from "styled-components";

const SideBarNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-top: 3.2rem;

  @media (max-width: 65em) {
    margin-top: 2rem;

    & li:first-child {
      align-self: end;
    }
  }
`;

export default SideBarNavList;
