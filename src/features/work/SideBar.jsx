import { GoBriefcase } from "react-icons/go";
import { PiCertificate } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { LuFileCode2 } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi";
import styled from "styled-components";
import SideBarNavList from "./SideBarNavList";
import SibarBarStyledNav from "./SideBarStyledNav";
import SidBarStyledNavLink from "./SideBarStyledNavLink";

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 65em) {
    display: none;
  }
`;

function SideBar() {
  return (
    <StyledSideBar>
      <SibarBarStyledNav>
        <SideBarNavList>
          <li>
            <SidBarStyledNavLink to="/work/experience">
              <GoBriefcase />

              <span>Experience</span>
            </SidBarStyledNavLink>
          </li>
          <li>
            <SidBarStyledNavLink to="/work/projects">
              <FaLaptopCode />
              <span>Projects</span>
            </SidBarStyledNavLink>
          </li>
          <li>
            <SidBarStyledNavLink to="/work/miniprojects">
              <LuFileCode2 />
              <span>Miniatrue Projects</span>
            </SidBarStyledNavLink>
          </li>
          <li>
            <SidBarStyledNavLink to="/work/certificates">
              <PiCertificate />
              <span>Certificates</span>
            </SidBarStyledNavLink>
          </li>
          <li>
            <SidBarStyledNavLink to="/work/education">
              <HiOutlineAcademicCap />

              <span>Education</span>
            </SidBarStyledNavLink>
          </li>
        </SideBarNavList>
      </SibarBarStyledNav>
    </StyledSideBar>
  );
}

export default SideBar;
