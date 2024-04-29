import Heading from "../../../ui/Heading";
import Img from "../../../ui/Img";
import ContentDiv from "../ContentDiv";
import Duration from "../Duration";
import ListItem from "../ListItem";
import NavLinkProviderBox from "../NavLinkProviderBox";
import Provider from "../Provider";
import ProviderItem from "../ProviderItem";
import ProviderItems from "../ProviderItems";
import StyledList from "../StyledList";
import Subheading from "../Subheading";
import Strong from "../../../ui/Strong";
import NavLinkURL from "../NavLinkURL";

function ProjectsDetails() {
  return (
    <Provider>
      <Heading as="h4">Projects</Heading>
      <ProviderItems>
        <NavLinkProviderBox
          id="provider"
          target="_blank"
          to="https://github.com/gowthamck25/the-wild-oasis"
        >
          <ProviderItem>
            <Img
              src="/projects/wild-oasis.gif"
              alt="Wild Oasis Demo"
              type="project"
            />
            <ContentDiv>
              <div>
                <Subheading>Wild Oasis</Subheading>
                <Duration>January 2024 - Present</Duration>
              </div>
              <StyledList>
                <ListItem>
                  {"The Wild Oasis"} seeks a custom application to manage its
                  boutique hotel operations, encompassing cabin bookings, guest
                  services, and staff management. Designed for internal use, the
                  application allows hotel employees to efficiently check in
                  guests and handle cabin allocations. Key functionalities
                  include user authentication, cabin management, and booking
                  oversight, with features for adding guest data and managing
                  payments.
                </ListItem>
                <ListItem>
                  The application also includes a dashboard for monitoring key
                  metrics such as guest arrivals, sales, and occupancy rates,
                  providing valuable insights for optimizing operations. With
                  customizable settings for breakfast prices and booking
                  parameters, the application streamlines hotel management,
                  enhancing the guest experience at {"The Wild Oasis."}
                </ListItem>
                <ListItem>
                  For routing, React Router is employed, providing seamless
                  navigation within the single-page application (SPA). Styling
                  is achieved using CSS-in-JS, specifically{" "}
                  <Strong>styled-components</Strong>, offering scoped styling
                  and easy maintenance. Given the minimal UI state requirements,
                  Context API with useState is utilized for UI state management,
                  eliminating the need for Redux.
                </ListItem>
                <ListItem>
                  For remote state management,
                  <Strong>React Query</Strong> is chosen for its robust features
                  like caching and automatic re-fetching, ensuring efficient
                  handling of remote data. Form management is simplified using a
                  library <Strong>React Hook Form</Strong>, streamlining the
                  process of handling larger forms with ease. Additionally,
                  various tools like{" "}
                  <Strong>
                    React icons, React hot toast, Recharts, date-fns,
                  </Strong>{" "}
                  and <Strong>Supabase</Strong>
                  are incorporated to enhance functionality and user experience.
                </ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://github.com/gowthamck25/the-wild-oasis"
                  >
                    Click here view in Github
                  </NavLinkURL>
                </ListItem>
              </StyledList>
            </ContentDiv>
          </ProviderItem>
        </NavLinkProviderBox>
        <NavLinkProviderBox
          id="provider"
          target="_blank"
          to="https://github.com/gowthamck25/QuickSlice"
        >
          <ProviderItem>
            <Img
              src="/projects/quick-slice.gif"
              alt="Quick Slice Demo"
              type="project"
            />
            <ContentDiv>
              <div>
                <Subheading>Quick Slice</Subheading>
                <Duration>November 2023 - January 2024</Duration>
              </div>
              <StyledList>
                <ListItem>
                  Quick Slice, a Pizza Ordering App. User can order pizza in a
                  breeze with easy navigation, credits to the app&apos;s
                  friendly design. This app do not require logins, and a user
                  can even mark their order as <q>priority</q> for speedy
                  service! The concept is to have users make the payment upon
                  the delightful arrival of their pizza, and each order receives
                  a special ID for easy tracking.
                </ListItem>
                <ListItem>
                  This app is powered by ReactJS and Vite for speedy development
                  and bundling. It uses React Router for seamless navigation,
                  utilizing advanced router APIs such as{" "}
                  <Strong>data loaders, actions</Strong> and{" "}
                  <Strong>fetchers</Strong>. The sleek and responsive design
                  comes courtesy of <Strong>Tailwind CSS</Strong>. This app
                  makes use of <Strong>Redux Toolkit</Strong>, with its{" "}
                  <Strong>thunk</Strong> features that ensures robust UI state
                  management. The pizza menu stays fresh with API integration.
                </ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://github.com/gowthamck25/QuickSlice"
                  >
                    Click here view in Github
                  </NavLinkURL>
                </ListItem>
              </StyledList>
            </ContentDiv>
          </ProviderItem>
        </NavLinkProviderBox>
        <NavLinkProviderBox
          id="provider"
          target="_blank"
          to="https://github.com/gowthamck25/WanderTrack"
        >
          <ProviderItem>
            <Img
              src="/projects/wander-track.gif"
              alt="Wander Track Demo"
              type="project"
            />
            <ContentDiv>
              <div>
                <Subheading>Wander Track</Subheading>
                <Duration>September 2023 - October 2023</Duration>
              </div>
              <StyledList>
                <ListItem>
                  WanderTrack, a digital travel logbook implemented using
                  React.js and bundled seamlessly with <Strong>Vite!</Strong>{" "}
                  Users can mark the places they&apos;ve visited, add or remove
                  cities seamlessly, all while enjoying persistent data across
                  renders and refreshes.
                </ListItem>
                <ListItem>
                  Powered by <Strong>React Router DOM</Strong> for smooth
                  navigation and <Strong>Leaflet</Strong> library for an
                  interactive map experience. This app leverages the latest
                  performance optimization techniques, including{" "}
                  <Strong>memoization</Strong> and lazy loading through the{" "}
                  <Strong>Suspense API</Strong>.
                </ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://github.com/gowthamck25/WanderTrack"
                  >
                    Click here view in Github
                  </NavLinkURL>
                </ListItem>
              </StyledList>
            </ContentDiv>
          </ProviderItem>
        </NavLinkProviderBox>

        <NavLinkProviderBox
          id="provider"
          target="_blank"
          to="https://forkifybook.netlify.app"
        >
          <ProviderItem>
            <Img
              src="/projects/forkify.gif"
              alt="Forkify Project Demo"
              type="project"
            />
            <ContentDiv>
              <div>
                <Subheading>Forkify</Subheading>
                <Duration>June 2023 - August 2023</Duration>
              </div>
              <StyledList>
                <ListItem>
                  Forkify is a comprehensive recipe application enabling users
                  to create, upload, search, and bookmark recipes while
                  preserving their state even upon reload. Employing{" "}
                  <Strong>MVC architecture</Strong> with object-oriented
                  programming and <Strong>AJAX (async/await)</Strong>, it
                  ensures smooth interaction. Bundled using{" "}
                  <Strong>Parcel</Strong> and deployed via <Strong>Git</Strong>{" "}
                  and Netlify, Forkify utilizes JavaScript, HTML, and CSS to
                  offer a seamless recipe browsing experience.
                </ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://forkifybook.netlify.app"
                  >
                    Click here to view website
                  </NavLinkURL>
                </ListItem>
              </StyledList>
            </ContentDiv>
          </ProviderItem>
        </NavLinkProviderBox>

        <NavLinkProviderBox
          id="provider"
          target="_blank"
          to="https://getomnifood.netlify.app"
        >
          <ProviderItem>
            <Img
              src="/projects/omnifood.gif"
              alt="Omnifood Project Demo"
              type="project"
            />
            <ContentDiv>
              <div>
                <Subheading>Omnifood</Subheading>
                <Duration>March 2023 - April 2023</Duration>
              </div>
              <StyledList>
                <ListItem>
                  Omnifood is a fictional food subscription website aimed at
                  promoting healthy eating year-round. It boasts a live,
                  <Strong> responsive</Strong> real-world design, employing
                  advanced <Strong>CSS Grids</Strong> and{" "}
                  <Strong>Flexbox</Strong> techniques, along with{" "}
                  <Strong>image optimization</Strong>.
                </ListItem>
                <ListItem>
                  The website is deployed using
                  <Strong>
                    {" "}
                    <q>Netlify</q>{" "}
                  </Strong>
                  and utilizes <Strong>HTML, CSS</Strong> and{" "}
                  <Strong>JavaScript</Strong> for seamless functionality.
                </ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://getomnifood.netlify.app"
                  >
                    Click here to view website
                  </NavLinkURL>
                </ListItem>
              </StyledList>
            </ContentDiv>
          </ProviderItem>
        </NavLinkProviderBox>
      </ProviderItems>
    </Provider>
  );
}

export default ProjectsDetails;
