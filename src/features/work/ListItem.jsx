import styled from "styled-components";

const ListItem = styled.li`
  font-size: 1.6rem;
  letter-spacing: 1.25px;
  line-height: 1.5;

  @media (max-width: 27em) {
    font-size: 1.4rem;
  }

  @media (max-width: 20em) {
    font-size: 1.2rem;
  }
`;

export default ListItem;
