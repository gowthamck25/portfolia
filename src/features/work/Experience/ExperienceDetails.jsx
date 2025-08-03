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
              src="/experience-logos/tmrw-houseofbrands.jpg"
              alt="Virtusa Logo"
              type="logo"
              borderRadius="100%"
            />
            <ContentDiv>
              <div>
                <Subheading>TMRW House of Brands</Subheading>
                <Duration>
                  Software Development Engineer - I, Oct 2024 - Present
                </Duration>
              </div>
              <StyledList>
                <ListItem>
                  Accelerating the growth of{" "}
                  <Strong>TMRW House of Brands, an Aditya Birla venture</Strong>
                  , by building sleek and powerful D2C e-commerce solutions for
                  fast-growing fashion labels like <Strong>Bewakoof</Strong> and{" "}
                  <Strong>Nobero</Strong>.
                </ListItem>

                <ListItem>
                  At TMRW, I collaborate closely with product managers and
                  developers to craft intuitive and visually stunning web and
                  mobile applications that put user experience first.
                </ListItem>

                <ListItem>
                  As part of a dedicated two-member development team, I had the
                  incredible opportunity to build the{" "}
                  <Strong>Nobero app</Strong> from scratch, leading it to a
                  successful debut on both the <Strong>App Store</Strong> and{" "}
                  <Strong>Google Play Store</Strong>. It was thrilling to see
                  the app resonate with users, achieving over{" "}
                  <Strong>150,000 downloads</Strong>. I crafted key features
                  like the <Strong>Splash Screen</Strong>,{" "}
                  <Strong>Deep Linking</Strong>, and{" "}
                  <Strong>Universal Linking</Strong>, ensuring smooth navigation
                  with the <Strong>React Navigation</Strong> library. Beyond the
                  initial launch, I enhanced the app by developing a{" "}
                  <Strong>download widget</Strong>, addressing app stability,
                  and integrating <Strong>Firebase Crashlytics</Strong> for
                  real-time crash insights, all while keeping a keen eye on user
                  engagement through <Strong>Google Analytics</Strong>. This
                  journey was a rewarding blend of creativity, technical
                  challenge, and user-focused innovation
                </ListItem>

                <ListItem>
                  I have full ownership of developing any offers related
                  features for the brand Nobero, where I embrace the exciting
                  challenge of implementing strategic product decisions aimed at
                  boosting user conversion and increasing average order value.
                  This role allows me to blend creativity with technical
                  expertise, crafting a seamless user experience that not only
                  meets business goals but also delights our users. It is a
                  rewarding journey to see how thoughtful design and
                  functionality can drive tangible results and elevate the
                  overall shopping experience
                </ListItem>

                <ListItem>
                  <Strong>Skills:</Strong> Nextjs, TypeScript, ReactNative,
                  Angular, Firebase, Google Analytics
                </ListItem>
              </StyledList>
            </ContentDiv>
          </ProviderItem>
        </ProviderBox>

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
                <Duration>Engineer, May 2022 - Sept 2024</Duration>
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
