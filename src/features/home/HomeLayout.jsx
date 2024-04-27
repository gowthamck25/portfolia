import styled from "styled-components";

import Heading from "../../ui/Heading";
import Img from "../../ui/Img";
import AboutMeLayout from "../home/AboutMeLayout";
import { useEffect } from "react";

const StyledHome = styled.section.attrs({
  className: "section-home",
  id: "home",
})`
  max-width: 160rem;
  padding: 12.8rem 8.4rem;
  margin: auto;
  border-bottom: 1px solid var(--color-grey-300);

  @media (max-width: 65em) {
    padding: 9.6rem 6.8rem;
  }

  @media (max-width: 49em) {
    padding: 9.6rem 5.6rem;
  }

  @media (max-width: 27em) {
    padding: 6.4rem 3.6rem;
  }

  @media (max-width: 24em) {
    padding: 6.4rem 0.6rem;
  }
`;

const Box = styled.div`
  width: 72.5%;
  margin: auto;

  display: flex;
  justify-content: center;
  gap: 8rem;

  @media (max-width: 90em) {
    width: 80.5%;
  }

  @media (max-width: 88.75em) {
    width: 81.5%;
  }

  @media (max-width: 87.81em) {
    width: 82%;
  }

  @media (max-width: 65em) {
    width: 85.5%;
    gap: 4.8rem;
  }

  @media (max-width: 64.5em) {
    width: 87.5%;
  }

  @media (max-width: 49em) {
    flex-direction: column;
    width: 61%;
    align-items: center;
  }

  @media (max-width: 27em) {
    width: 95%;
    gap: 3.2rem;
  }
`;

const HeadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.4rem 0;

  @media (max-width: 65em) {
    margin-top: 3.2rem;
  }

  @media (max-width: 49em) {
    margin-top: 0;
    padding: 0;
    align-items: center;
    text-align: center;
    gap: 2.4rem;
    order: 0;
  }

  @media (max-width: 20em) {
    gap: 1.2rem;
  }
`;

function HomeLayout() {
  // useEffect(function () {
  //   const sectionHomeEl = document.querySelector(".section-home");

  //   if (!sectionHomeEl) {
  //     document.getElementById("root").classList.remove("sticky");
  //     return;
  //   }

  //   const obs = new IntersectionObserver(
  //     function (entries) {
  //       const ent = entries[0];

  //       if (!ent.isIntersecting) {
  //         document.getElementById("root").classList.add("sticky");
  //       }

  //       if (ent.isIntersecting)
  //         document.getElementById("root").classList.remove("sticky");
  //     },
  //     {
  //       root: null,
  //       threshold: 0,
  //       rootMargin: "-80px",
  //     }
  //   );
  //   obs.observe(sectionHomeEl);
  // }, []);

  return (
    <>
      <StyledHome>
        <Box>
          <Img type="heroPic" src="/Frame.webp" alt="Different Shapes" />

          <HeadingBox>
            <Heading as="h1">Hello!</Heading>
            <Heading as="h3">
              I&apos;m Gowtham, a Software Engineer{" "}
              {<Img type="homeHeadingPic" src="/computer.webp" />} based in
              India
            </Heading>
          </HeadingBox>
        </Box>
      </StyledHome>

      <AboutMeLayout />
    </>
  );
}

export default HomeLayout;
