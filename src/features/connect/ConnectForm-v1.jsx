import styled from "styled-components";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import TextArea from "../../ui/TextArea";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

const CTATextBox = styled.div`
  color: #45260a;
`;

const CTAHeading = styled.h2`
  font-size: 5.2rem;
  font-weight: 600;
  margin-bottom: 1.6rem;

  @media (max-width: 27em) {
    font-size: 3.6rem;
  }

  @media (max-width: 20em) {
    font-size: 3rem;
    margin-bottom: 1.2rem;
  }
`;

const CTAText = styled.p`
  font-size: 2rem;
  line-height: 1.8;
  margin-bottom: 3.2rem;

  @media (max-width: 27em) {
    font-size: 1.8rem;
    line-height: 1.6;
  }

  @media (max-width: 20em) {
    font-size: 1.6rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  border-bottom: 1px solid #45260a;
  transition: all 0.3s;

  &:hover {
    border-bottom: none;
  }
`;

function ConnectForm() {
  return (
    <CTATextBox>
      <CTAHeading>Let&apos; Connect</CTAHeading>
      <CTAText>
        For new project inquries please fill out this form. You can also send me
        a{" "}
        <StyledNavLink to="mailto:gowthamck03@gmail.com" isFooterLink={true}>
          mail
        </StyledNavLink>{" "}
        or give me a{" "}
        <StyledNavLink to="tel:gowthamck03@gmail.com" isFooterLink={true}>
          call
        </StyledNavLink>
        . I speak English and Tamil.
      </CTAText>

      <Form>
        <FormRow label="Name">
          <Input type="text" id="name" placeholder="Enter name" />
        </FormRow>

        <FormRow label="Email">
          <Input type="email" id="email" placeholder="Enter email" />
        </FormRow>

        <FormRow label="Contact number">
          <Input type="text" id="phone" placeholder="Enter number" />
        </FormRow>

        <FormRow label="Where did you here about me?">
          <Select id="select-where" name="select-where" required>
            <option value="">Please choose one option</option>
            <option value="friends">Friends and Colleagues</option>
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter</option>
            <option value="other">Other</option>
          </Select>
        </FormRow>

        <FormRow label="Purpose">
          <TextArea
            type="text"
            id="purpose"
            placeholder="Enter the purpose of this connect"
          />
        </FormRow>

        <FormRow>
          <Button variation="secondary" type="reset">
            Cancel
          </Button>
          <Button variation="formButton">Submit</Button>
        </FormRow>
      </Form>
    </CTATextBox>
  );
}

export default ConnectForm;
