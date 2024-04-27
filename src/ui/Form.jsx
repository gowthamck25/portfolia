import styled from "styled-components";

const Form = styled.form`
  width: 75rem;
  padding: 1rem;
  overflow: hidden;
  font-size: 1.6rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 2.4rem;

  @media (max-width: 65em) {
    width: 85rem;
  }

  @media (max-width: 49em) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media (max-width: 20em) {
    padding: 0 1rem;
  }
`;

export default Form;
