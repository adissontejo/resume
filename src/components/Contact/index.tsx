import { contact } from "~/data";
import { Section, Title, Content, Subtitle } from "~/styles/components";

const Contact = () => (
  <Section>
    <Title>{contact.title}</Title>
    {contact.list.map((item, index) => (
      <div key={String(index)}>
        <Subtitle>{item.name}</Subtitle>
        <Content>{item.content}</Content>
      </div>
    ))}
  </Section>
);

export default Contact;
