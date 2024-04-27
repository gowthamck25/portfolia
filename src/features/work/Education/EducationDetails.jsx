import Heading from "../../../ui/Heading";
import Img from "../../../ui/Img";
import Provider from "../Provider";
import ProviderBox from "../ProviderBox";
import ContentDiv from "../ContentDiv";
import Subheading from "../Subheading";
import Duration from "../Duration";
import StyledList from "../StyledList";
import ListItem from "../ListItem";
import ProviderItems from "../ProviderItems";
import ProviderItem from "../ProviderItem";

function EducationDetails() {
  return (
    <Provider>
      <Heading as="h4">Education</Heading>
      <ProviderItems>
        <ProviderBox>
          <ProviderItem>
            <Img
              src="/experience-logos/lpu-logo.png"
              alt="Virtusa Logo"
              type="logo"
              borderRadius="100%"
            />
            <ContentDiv>
              <div>
                <Subheading>Lovely Professional Univeristy</Subheading>
                <Duration>
                  B.Tech Computer Science Engineering, 2018 to 2022
                </Duration>
              </div>
              <StyledList>
                <ListItem>
                  Completed Computer Science & Engineering at Lovely
                  Professional University, Jalandhar, Punjab
                </ListItem>
              </StyledList>
            </ContentDiv>
          </ProviderItem>
        </ProviderBox>
        <ProviderBox>
          <ProviderItem>
            <Img
              src="/experience-logos/edustar-logo.jpg"
              alt="Virtusa Logo"
              type="logo"
              borderRadius="100%"
            />
            <ContentDiv>
              <div>
                <Subheading>Edustar International School</Subheading>
                <Duration>Grades 6 to 12, 2013 to 2018</Duration>
              </div>
              <StyledList>
                <ListItem>
                  Completed Grades - 6 to 12 (CBSE Stream) at Edustar
                  International School, Kovilpatti, Tamilnadu
                </ListItem>
              </StyledList>
            </ContentDiv>
          </ProviderItem>
        </ProviderBox>
      </ProviderItems>
    </Provider>
  );
}

export default EducationDetails;
