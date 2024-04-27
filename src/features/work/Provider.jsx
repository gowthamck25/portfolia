import styled from "styled-components";

const Provider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  @media (max-width: 65em) {
    gap: 2.4rem;
  }

  @media (max-width: 27em) {
    gap: 1.6rem;
  }

  @media (max-width: 20em) {
    gap: 1.2rem;
  }
`;
export default Provider;
