import styled from "styled-components";

const ProviderItem = styled.div`
  display: flex;
  gap: 4.8rem;

  @media (max-width: 65em) {
    flex-direction: column;
    gap: 3.2rem;
    align-items: flex-start;
  }

  @media (max-width: 27em) {
    gap: 2.4rem;
  }
`;

export default ProviderItem;
