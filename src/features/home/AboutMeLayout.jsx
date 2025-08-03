import styled from "styled-components";
import Heading from "../../ui/Heading";
import Skill from "./Skill";

const StyledAboutMe = styled.section`
  max-width: 150rem;
  padding: 12.8rem 8.4rem;
  margin: auto;

  @media (max-width: 65em) {
    padding: 9.6rem 6.8rem;
  }

  @media (max-width: 49em) {
    padding: 9.6rem 5.2rem;
  }

  @media (max-width: 27em) {
    padding: 6.4rem 2.8rem;
  }

  @media (max-width: 24em) {
    padding: 6.4rem 2rem;
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;
  gap: 3.2rem;

  @media (max-width: 65em) {
    display: flex;
    flex-direction: column;
  }
`;

const AboutBox = styled.div`
  align-self: end;
`;

const TitleBox = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  margin-bottom: 3.2rem;

  @media (max-width: 27em) {
    gap: 0.8rem;
  }
`;

const HeadingDesign = styled.span`
  background-color: var(--color-orange-800);
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  display: block;

  @media (max-width: 27em) {
    height: 1.8rem;
    width: 1.8rem;
  }

  @media (max-width: 27em) {
    height: 1.4rem;
    width: 1.4rem;
  }
`;

const ParaBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  font-size: 1.8rem;
  color: var(--color-grey-600);
  letter-spacing: 1.05px;
  line-height: 1.75;
  padding: 2.4rem 4.8rem;
  background-color: #fffaf3;
  border-radius: 5px;

  @media (max-width: 49em) {
    font-size: 1.6rem;
  }

  @media (max-width: 27em) {
    padding: 2rem 4rem;
    font-size: 1.4rem;
  }

  @media (max-width: 24em) {
    padding: 2rem;
  }

  @media (max-width: 20em) {
    padding: 1.6rem;
  }
`;

const SkillBox = styled.div`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  border-radius: 5px;
  background-color: var(--color-orange-0);
  background-color: #fffaf3;

  @media (max-width: 65em) {
    width: 100%;
    gap: 1.6rem;
  }

  @media (max-width: 24em) {
    padding: 2.4rem;
  }

  @media (max-width: 20em) {
    padding: 1.6rem;
  }
`;

const SubHeading = styled.p`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-orange-800);

  @media (max-width: 49em) {
    font-size: 1.6rem;
  }
`;

const SkillTags = styled.div`
  @media (max-width: 65em) {
    margin-right: 3.2rem;
  }
`;

const skills = [
  { name: "React.js", src: "/skill-logos/react.png" },
  { name: "Next.js", src: "/skill-logos/nextjs.png" },
  { name: "React Native", src: "/skill-logos/reactnative.png" },
  { name: "TypeScript", src: "/skill-logos/typescript.png" },
  { name: "JavaScript", src: "/skill-logos/javascript.png" },
  { name: "Angular", src: "/skill-logos/angular.png" },
  { name: "Redux", src: "/skill-logos/redux.png" },
  { name: "TanStack Query", src: "/skill-logos/react-query.png" },
  { name: "AJAX", src: "/skill-logos/ajax.png" },
  { name: "Python", src: "/skill-logos/python.png" },
  { name: "Amazon Web Services", src: "/skill-logos/aws.png" },
  { name: "Google Cloud Platform", src: "/skill-logos/gcp.png" },
  { name: "Styled Components", src: "/skill-logos/styled-components.png" },
  { name: "Tailwind CSS", src: "/skill-logos/tailwindcss.png" },
  { name: "HTML", src: "/skill-logos/html.png" },
  { name: "CSS", src: "/skill-logos/css.png" },
];

function AboutMeLayout() {
  return (
    <StyledAboutMe id="about">
      <Box>
        <AboutBox>
          <TitleBox>
            <HeadingDesign />
            <Heading as="h3">Nice to Meet you</Heading>
          </TitleBox>

          <ParaBox>
            <p>
              👋🏻 Hi, I&apos;m Gowtham—a passionate Software Engineer with{" "}
              <strong>4 years of professional experience</strong> building
              seamless, engaging digital products. At TMRW House of Brands,
              I&apos;ve been instrumental in developing a Multi-Tenant D2C
              ecommerce platform that empowers fashion labels like Bewakoof and
              Nobero to thrive. My journey is fueled by a love for innovation
              and a commitment to excellence, as I craft solutions that not only
              meet but exceed user expectations.
            </p>

            <p>
              My expertise in <strong>Next.js</strong>,{" "}
              <strong>React.js</strong>, <strong>React Native</strong>, and{" "}
              <strong>TypeScript</strong> allows me to engineer features that
              captivate users and drive business growth. From enhancing mobile
              app experiences to optimizing performance metrics, I am always
              eager to push the boundaries of what&apos;s possible.
            </p>
          </ParaBox>
        </AboutBox>

        <SkillBox>
          <SubHeading>Skill Pool</SubHeading>

          <SkillTags>
            {skills.map((skill) => (
              <Skill skill={skill} key={skill.name} />
            ))}
          </SkillTags>
        </SkillBox>
      </Box>
    </StyledAboutMe>
  );
}

export default AboutMeLayout;
