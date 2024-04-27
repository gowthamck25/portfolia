import { GoBriefcase } from "react-icons/go";
import { PiCertificate } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";
import { LuFileCode2 } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi";
import styled from "styled-components";
import { HiXMark } from "react-icons/hi2";
import { useContext } from "react";
import { OpenWindowContext as WorkLayoutOpenWindowContext } from "./WorkLayout";
import SideBarNavButton from "./SideBarNavButton";
import SideBarNavList from "./SideBarNavList";
import SideBarStyledNavStyledNav from "./SideBarStyledNav";
import SidBarStyledNavLink from "./SideBarStyledNavLink";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const StyledSideBar = styled.div`
  display: none;

  @media (max-width: 65em) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

function MovableSideBar() {
  const { setIsOpen } = useContext(WorkLayoutOpenWindowContext);
  const ref = useOutsideClick();

  function handleClick() {
    setIsOpen(false);
  }

  return (
    <StyledSideBar ref={ref}>
      <SideBarStyledNavStyledNav>
        <SideBarNavList>
          <li>
            <SideBarNavButton onClick={() => setIsOpen(false)}>
              <HiXMark className="icon-sidebar-nav" name="close-outline" />
            </SideBarNavButton>
          </li>
          <li>
            <SidBarStyledNavLink onClick={handleClick} to="/work/experience">
              <GoBriefcase />

              <span>Experience</span>
            </SidBarStyledNavLink>
          </li>
          <li>
            <SidBarStyledNavLink onClick={handleClick} to="/work/projects">
              <FaLaptopCode />
              <span>Projects</span>
            </SidBarStyledNavLink>
          </li>
          <li>
            <SidBarStyledNavLink onClick={handleClick} to="/work/miniprojects">
              <LuFileCode2 />
              <span>Miniatrue Projects</span>
            </SidBarStyledNavLink>
          </li>
          <li>
            <SidBarStyledNavLink onClick={handleClick} to="/work/certificates">
              <PiCertificate />
              <span>Certificates</span>
            </SidBarStyledNavLink>
          </li>
          <li>
            <SidBarStyledNavLink onClick={handleClick} to="/work/education">
              <HiOutlineAcademicCap />

              <span>Education</span>
            </SidBarStyledNavLink>
          </li>
        </SideBarNavList>
      </SideBarStyledNavStyledNav>
    </StyledSideBar>
  );
}

export default MovableSideBar;
