import styled from "styled-components";

import Img from "../../ui/Img";

const StyledSkill = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0.8rem 1rem;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;

  @media (max-width: 49em) {
    font-size: 1.4rem;
  }
`;

function Skill({ skill }) {
  return (
    <StyledSkill>
      <Img src={skill.src} alt={skill.name} type="skillLogo" />
      {skill.name}
    </StyledSkill>
  );
}

export default Skill;
