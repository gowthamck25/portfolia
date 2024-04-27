import styled from "styled-components";

const StyledFormRow = styled.div`
  &:last-child {
    padding-bottom: 0.5rem;
    grid-row: 4;
    grid-column: 2;
  }

  &:nth-last-child(2) {
    grid-column: 1/-1;
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    /* align-items: flex-end; */
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  /* font-weight: 600; */
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
