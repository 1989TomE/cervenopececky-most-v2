import { Header, Paragraph } from "@src/components/TextContent";
import styled from "styled-components";

export type ContactSectionProps = {
  title: string;
  subtitle?: string;
  name?: string;
  lines: string[];
  marginTop?: string;
};

const ContactSection = ({
  title,
  subtitle,
  name,
  lines,
  marginTop = "20px",
}: ContactSectionProps) => {
  return (
    <Section marginTop={marginTop}>
      <Header title={title} marginTop="0rem" />
      {subtitle != null && <Paragraph bold>{subtitle}</Paragraph>}
      {name != null && <Paragraph bold>{name}</Paragraph>}
      {lines.map((line) => (
        <ContactLine key={line}>{line}</ContactLine>
      ))}
    </Section>
  );
};

export default ContactSection;

const Section = styled.div<{ marginTop: string }>`
  width: 100%;
  margin-top: ${(props) => props.marginTop};

  &:first-child {
    margin-top: 0;
  }
`;

const ContactLine = styled(Paragraph)`
  text-align: left;
  width: 100%;
`;
