import Provider from "../Provider";
import Heading from "../../../ui/Heading";
import ProviderItems from "../ProviderItems";
import ProviderItem from "../ProviderItem";
import Img from "../../../ui/Img";
import ContentDiv from "../ContentDiv";
import Subheading from "../Subheading";
import Duration from "../Duration";
import ListItem from "../ListItem";
import StyledList from "../StyledList";
import NavLinkProviderBox from "../NavLinkProviderBox";
import NavLinkURL from "../NavLinkURL";

function CertificatesDetails() {
  return (
    <Provider>
      <Heading as="h4">Certificates</Heading>
      <ProviderItems>
        <NavLinkProviderBox
          id="provider"
          target="_blank"
          to="https://www.credential.net/5fe48ee5-e330-4ba1-873a-212a2fe20cca?key=e07a5a8f29c1a73841a4f1afa25ae409c5b7c75f6b473bd08f647db6d9319460"
        >
          <ProviderItem>
            <Img
              src="/certificate-logos/gcp.png"
              alt="Google Cloud Associate Cloud Engineer Certificate Logo"
              type="logo"
              borderRadius="100%"
            />
            <ContentDiv>
              <div>
                <Subheading>Google Cloud</Subheading>
                <Duration>
                  Associate Cloud Engineer, March 2022 - March 2025
                </Duration>
              </div>
              <StyledList>
                <ListItem>
                  Learned to deploy application, monitor operations, and manage
                  enterprise solutions using Google Cloud Console and the
                  command-line interface to perform common platform-based tasks
                  to maintain one or more deployed solutions that leverage
                  Google-managed or self-managed services on Google Cloud.
                </ListItem>
                <ListItem>
                  Hands-on experience in working with Compute, Storage, Network
                  and IAM services
                </ListItem>
                <ListItem>
                  <NavLinkURL
                    target="_blank"
                    to="https://www.credential.net/5fe48ee5-e330-4ba1-873a-212a2fe20cca?key=e07a5a8f29c1a73841a4f1afa25ae409c5b7c75f6b473bd08f647db6d9319460"
                  >
                    Click here to view certificate
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

export default CertificatesDetails;
