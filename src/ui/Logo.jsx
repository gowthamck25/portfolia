import styled, { css } from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const LogoDot = styled.span`
  background-color: var(--color-orange-800);
  border-radius: 50%;
  height: 1.6rem;
  width: 1.6rem;
  display: block;

  @media (max-width: 27em) {
    height: 1.4rem;
    width: 1.4rem;
  }
`;

function Logo({ isFooterLogo }) {
  const LogoName = styled.a`
    text-decoration: none;
    letter-spacing: 0.5px;

    ${!isFooterLogo &&
    css`
      color: var(--color-grey-850);
      font-size: 3rem;
      font-weight: 600;

      @media (max-width: 24em) {
        font-size: 2.4rem;
      }
    `}

    ${isFooterLogo &&
    css`
      color: var(--color-orange-700);
      font-size: 3rem;
      font-weight: 600;

      @media (max-width: 27em) {
        font-size: 2.4rem;
      }

      @media (max-width: 20em) {
        font-size: 2rem;
      }
    `}
  `;

  return (
    <StyledLogo>
      {!isFooterLogo && <LogoDot></LogoDot>}
      <LogoName href="/home#">Gowtham Ck</LogoName>
    </StyledLogo>
  );
}

export default Logo;
