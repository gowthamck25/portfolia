import styled from "styled-components";

const Subheading = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-grey-750);

  @media (max-width: 27em) {
    font-size: 1.8rem;
  }

  @media (max-width: 20em) {
    font-size: 1.6rem;
  }
`;

export default Subheading;
