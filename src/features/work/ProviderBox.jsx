import styled from "styled-components";

const ProviderBox = styled.div`
  padding: 3.2rem;
  letter-spacing: 0.25px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 24em) {
    padding: 2rem;
  }
`;

export default ProviderBox;
