import styled from "styled-components";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";

import Logo from "./Logo.jsx";
import StyledNavLink from "./StyledNavLink.jsx";

const StyledFooter = styled.footer`
  padding: 9.6rem 0;

  border-top: 1px solid var(--color-grey-300);

  @media (max-width: 65em) {
    padding: 8rem 5.2rem;
  }

  @media (max-width: 27em) {
    padding: 6.4rem 2.8rem;
  }
`;

const FooterBox = styled.div`
  max-width: 98rem;
  margin: auto;

  display: grid;
  gap: 9.6rem;
  grid-template-columns: 1fr 1fr 1.5fr;

  @media (max-width: 65em) {
    gap: 4.8rem;
  }

  @media (max-width: 49em) {
    grid-template-columns: 2fr 1fr;
  }

  @media (max-width: 27em) {
    grid-template-columns: 1fr;
    gap: 6.4rem;
  }

  @media (max-width: 20em) {
    gap: 3.2rem;
  }
`;

const FooterLogoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.p`
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  font-weight: 600;
  color: var(--color-grey-600);
  margin-bottom: 1.6rem;

  @media (max-width: 27em) {
    margin-bottom: 1.2rem;
  }

  @media (max-width: 20em) {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.2rem;
  margin-top: 1.8rem;

  @media (max-width: 27em) {
    gap: 0.8rem;
    margin-top: 1.4rem;
  }
`;

const OtherLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 20em) {
    gap: 0.2rem;
  }
`;

const Address = styled.address`
  font-style: normal;
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-grey-500);
  letter-spacing: 0.5px;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (max-width: 20em) {
    font-size: 1.2rem;
    gap: 1.6rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <FooterBox>
        <FooterLogoBox>
          <Logo isFooterLogo={true} />
          <SocialLinks>
            <li>
              <StyledNavLink
                to="https://www.linkedin.com/in/gowthamck25/"
                target="_blank"
              >
                <IoLogoLinkedin />
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="https://github.com/gowthamck25"
                target="_blank"
              >
                <IoLogoGithub />
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="https://www.instagram.com/gowthamck_/"
                target="_blank"
              >
                <IoLogoInstagram />
              </StyledNavLink>
            </li>
          </SocialLinks>
        </FooterLogoBox>

        <nav>
          <FooterHeading>Coding Profiles</FooterHeading>
          <OtherLinks>
            <li>
              <StyledNavLink
                to="https://leetcode.com/GowthamCK/"
                target="_blank"
                isFooterLink={true}
              >
                Leet Code
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink
                to="https://auth.geeksforgeeks.org/user/gowthamchandrasekar"
                target="_blank"
                isFooterLink={true}
              >
                Geeks For Geeks
              </StyledNavLink>
            </li>
          </OtherLinks>
        </nav>

        <nav>
          <FooterHeading>Contact</FooterHeading>
          <Address>
            <p>
              1-C 8C, Arignar Anna Street, Kovilpatti, Tuticorin, Tamil Nadu,
              India - 628501
            </p>
            <ContactDetails>
              <p>
                <StyledNavLink
                  to="mailto:gowthamck03@gmail.com"
                  isFooterLink={true}
                >
                  gowthamck03@gmail.com
                </StyledNavLink>
              </p>
              <p>
                <StyledNavLink
                  to="tel:gowthamck03@gmail.com"
                  isFooterLink={true}
                >
                  6383498871
                </StyledNavLink>
              </p>
            </ContactDetails>
          </Address>
        </nav>
      </FooterBox>
    </StyledFooter>
  );
}

export default Footer;
