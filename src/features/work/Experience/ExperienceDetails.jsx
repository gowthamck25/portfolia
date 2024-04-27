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
import Strong from "../../../ui/Strong";

function ExperienceDetails() {
  return (
    <Provider>
      <Heading as="h4">Experience</Heading>
      <ProviderItems>
        <ProviderBox>
          <ProviderItem>
            <Img
              src="/experience-logos/virtusa-logo.png"
              alt="Virtusa Logo"
              type="logo"
              borderRadius="100%"
            />
            <ContentDiv>
              <div>
                <Subheading>Virtusa</Subheading>
                <Duration>Engineer, May 2022 - Present</Duration>
              </div>
              <StyledList>
                <ListItem>
                  Responsible for leading the development of a{" "}
                  <Strong>React</Strong>-based web application, ensuring
                  seamless integration with <Strong>AWS</Strong> infrastructure.
                  Developed UI components for administrative and operational
                  roles, displaying data tables retrieved from{" "}
                  <Strong>Amazon RDS</Strong> through APIs.
                </ListItem>
                <ListItem>
                  Applied advanced React patterns, specifically implementing the{" "}
                  <Strong>Compound Components Patterns</Strong> and{" "}
                  <Strong>Render Patterns</Strong>, to seamlessly create super
                  Components. For efficient handling of remote data, I
                  integrated <Strong>React-Query</Strong>, leveraging its
                  capabilities to optimize data fetching and management. To
                  ensure effective communication and state management within the
                  user interface, I employed a dual approach, utilizing both the{" "}
                  <Strong>Context API</Strong> and <Strong>Redux</Strong>. This
                  strategy allowed for the seamless broadcasting and handling of
                  UI data, contributing to an enhanced and wellcoordinated user
                  experience
                </ListItem>
                <ListItem>
                  {" "}
                  Crafted the user specific roles for tailored data access,
                  presenting information in a structured table format and
                  offering filter options for refined viewing.
                </ListItem>
                <ListItem>
                  Designed and implemented <Strong>Amazon WorkSpaces</Strong>, a
                  comprehensive Desktop-as-a-Service solution for clients.
                  Orchestrated seamless integration of services including{" "}
                  <Strong>
                    AD Connectors, Transit Gateways, Intune integration
                  </Strong>
                  , and bolstered security with{" "}
                  <Strong>SAML and Duo authentication</Strong>. Elevated user
                  experience and streamlined access to virtual desktops through
                  strategic AWS and Microsoft technology integration.
                </ListItem>{" "}
                <ListItem>
                  <Strong>Skills:</Strong> React, JavaScript, AWS, PostgreSQL
                </ListItem>
              </StyledList>
            </ContentDiv>
          </ProviderItem>
        </ProviderBox>
      </ProviderItems>
    </Provider>
  );
}

export default ExperienceDetails;
