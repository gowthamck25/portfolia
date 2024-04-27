import Heading from "../../../ui/Heading";
import Img from "../../../ui/Img";
import Strong from "../../../ui/Strong";
import ContentDiv from "../ContentDiv";
import Duration from "../Duration";
import ListItem from "../ListItem";
import NavLinkProviderBox from "../NavLinkProviderBox";
import NavLinkURL from "../NavLinkURL";
import Provider from "../Provider";
import ProviderItem from "../ProviderItem";
import ProviderItems from "../ProviderItems";
import StyledList from "../StyledList";
import Subheading from "../Subheading";

function MiniProjectsDetails() {
  return (
    <Provider>
      <Heading as="h4">Miniature Projects</Heading>

      <ProviderItems>
        <NavLinkProviderBox
          id="provider"
          target="_blank"
          to="https://github.com/gowthamck25/ReactQuiz"
        >
          <ProviderItem>
            <Img
              src="/mini-projects/react-quiz.gif"
              alt="React Quiz Demo"
              type="miniProject"
            />
            <ContentDiv>
              <div>
                <Subheading>React Quiz</Subheading>
                <Duration>August 2023</Duration>
              </div>
              <StyledList>
                <ListItem>
                  This React-based quiz portal offers a user-friendly interface
                  that enables seamless navigation between questions, ensuring a
                  smooth and enjoyable quiz-taking experience. Users can
                  effortlessly filter questions based on difficulty levels,
                  categorizing them as easy, medium, or hard, thereby tailoring
                  the quiz to their preferences and skill level.
                </ListItem>
                <ListItem>
                  Furthermore, the portal keeps users engaged by constantly
                  tracking their current score in real-time. It also records and
                  displays a persistent high score, allowing users to compete
                  with themselves and strive for improvement.
                </ListItem>
                <ListItem>Powered by React and CSS</ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://github.com/gowthamck25/ReactQuiz"
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
          to="https://github.com/gowthamck25/UsePopCorn"
        >
          <ProviderItem>
            <Img
              src="/mini-projects/use-popcorn.gif"
              alt="Use Popcorn Demo"
              type="miniProject"
            />
            <ContentDiv>
              <div>
                <Subheading>Use Popcorn</Subheading>
                <Duration>July 2023</Duration>
              </div>
              <StyledList>
                <ListItem>
                  This React app is dedicated to providing a comprehensive
                  database of movies and TV shows. It allows users to search for
                  and explore a vast collection of film and television content,
                  including details such as cast and crew, release dates,
                  ratings, reviews, and more. Users can also rate, review, and
                  track their watched list, which persists even after each
                  reload.
                </ListItem>
                <ListItem>Powered by React and CSS</ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://github.com/gowthamck25/UsePopCorn"
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
          to="https://github.com/gowthamck25/TravelList"
        >
          <ProviderItem>
            <Img
              src="/mini-projects/far-away.gif"
              alt="Far Away Demo"
              type="miniProject"
            />
            <ContentDiv>
              <div>
                <Subheading>Far Away</Subheading>
                <Duration>June 2023</Duration>
              </div>
              <StyledList>
                <ListItem>
                  Far Away is a handy packing tracker application built using{" "}
                  <Strong>React.js</Strong> and CSS. It empowers users to
                  efficiently manage their packing lists, ensuring nothing
                  essential gets left behind. Leveraging concepts like{" "}
                  <Strong>state uplifting, derived state</Strong> and{" "}
                  <Strong> controlled elements</Strong>, Far Away offers a
                  seamless user experience, making packing for trips and
                  adventures a breeze.
                </ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://github.com/gowthamck25/TravelList"
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
          to="https://github.com/gowthamck25/Bankist-App-with-Advanced-DOM-functionalities"
        >
          <ProviderItem>
            <Img
              src="/mini-projects/bankist-web.gif"
              alt="Bankist Web"
              type="miniProject"
            />
            <ContentDiv>
              <div>
                <Subheading>Bankist Web</Subheading>
                <Duration>May 2023</Duration>
              </div>
              <StyledList>
                <ListItem>
                  Bankist Web is a contemporary web application featuring
                  advanced DOM functionalities and Events. It incorporates{" "}
                  <Strong>Event Propagation, including Capture, Target,</Strong>{" "}
                  and <Strong>Bubbling</Strong> phases, as well as Event
                  <Strong>Delegation</Strong> for creating tabbed components and
                  top navigation.
                </ListItem>
                <ListItem>
                  Utilizing the <Strong>IntersectionObserver API</Strong>{" "}
                  enables sticky navigation and section reveal, while{" "}
                  <Strong>lazy loading of images</Strong> and{" "}
                  <Strong>slide implementation</Strong> enhances user
                  interaction, responding to both mouse and keyboard events
                  seamlessly.
                </ListItem>
                <ListItem>Developed with JavaScript, HTML and CSS</ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://github.com/gowthamck25/Bankist-App-with-Advanced-DOM-functionalities"
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
          to="https://github.com/gowthamck25/Bankist"
        >
          <ProviderItem>
            <Img
              src="/mini-projects/bankist.gif"
              alt="Bankist Demo"
              type="miniProject"
            />
            <ContentDiv>
              <div>
                <Subheading>Bankist</Subheading>
                <Duration>April 2023</Duration>
              </div>
              <StyledList>
                <ListItem>
                  Bankist is a fictional banking application offering essential
                  features like secure login, fund transfers, loan requests, and
                  account closure.
                </ListItem>
                <ListItem>
                  It leverages modern and complex Array methods for efficient
                  data storage and retrieval, while utilizing the{" "}
                  <Strong>Intl (Internationalization API)</Strong> for handling
                  numbers and dates seamlessly. Additionally, it enhances user
                  experience with a realistic timer setup using{" "}
                  <Strong>setInterval()</Strong>, ensuring a lifelike banking
                  experience.
                </ListItem>
                <ListItem>Developed with JavaScript, HTML and CSS</ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://github.com/gowthamck25/Bankist"
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
          to="https://github.com/gowthamck25/chair-shop"
        >
          <ProviderItem>
            <Img
              src="/mini-projects/chair-shop.gif"
              alt="Chair Shop Demo"
              type="miniProject"
            />
            <ContentDiv>
              <div>
                <Subheading>Chair Shop</Subheading>
                <Duration>February 2023</Duration>
              </div>
              <StyledList>
                <ListItem>
                  The Chair Shop is a captivating web designing mini-project
                  that showcases the fusion of HTML and CSS to create an
                  engaging online platform.
                </ListItem>
                <ListItem>
                  Through carefully crafted HTML elements and CSS styling, users
                  are greeted with an aesthetically pleasing interface that
                  highlights various chairs available for purchase.
                </ListItem>
                <ListItem>
                  With a focus on user experience and visual appeal, this
                  project demonstrates the fundamentals of web design while
                  offering a glimpse into the world of e-commerce.
                </ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://github.com/gowthamck25/chair-shop"
                  >
                    Click here to view in Github
                  </NavLinkURL>
                </ListItem>
              </StyledList>
            </ContentDiv>
          </ProviderItem>
        </NavLinkProviderBox>

        <NavLinkProviderBox
          id="provider"
          target="_blank"
          to="https://github.com/gowthamck25/PIG-Game"
        >
          <ProviderItem>
            <Img
              src="/mini-projects/pig-game.gif"
              alt="Pig Game Demo"
              type="miniProject"
            />
            <ContentDiv>
              <div>
                <Subheading>Pig Game</Subheading>
                <Duration>February 2023</Duration>
              </div>
              <StyledList>
                <ListItem>
                  Simulation of Pig, a simple dice game. Players take turns to
                  roll a single die as many times as they wish, adding all roll
                  results to a running total, but losing their gained score for
                  the turn if they roll a 1. A player wins when their score
                  crosses 100.
                </ListItem>
                <ListItem>Developed with JavaScript, HTML and CSS</ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://github.com/gowthamck25/PIG-Game"
                  >
                    Click here to view in Github
                  </NavLinkURL>
                </ListItem>
              </StyledList>
            </ContentDiv>
          </ProviderItem>
        </NavLinkProviderBox>

        <NavLinkProviderBox
          id="provider"
          target="_blank"
          to="https://github.com/gowthamck25/Guess-My-Number"
        >
          <ProviderItem>
            <Img
              src="/mini-projects/guess-my-number.gif"
              alt="Guess My Name Project Demo"
              type="miniProject"
            />
            <ContentDiv>
              <div>
                <Subheading>Guess My Number</Subheading>
                <Duration>January 2023</Duration>
              </div>
              <StyledList>
                <ListItem>
                  This app challenges users to guess a randomly generated number
                  within a specified range, offering hints along the way.
                  It&apos;s a fun and interactive game designed to test your
                  guessing skills!
                </ListItem>
                <ListItem>Developed with JavaScript, HTML and CSS</ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://github.com/gowthamck25/Guess-My-Number"
                  >
                    Click here to view in Github
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

export default MiniProjectsDetails;
