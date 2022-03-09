import { abilities } from "~/data";
import { Section, Title, Subtitle, Content } from "~/styles/components";

const Abilities = () => (
  <Section>
    <Title>{abilities.title}</Title>
    {abilities.list.map((item, index) => (
      <div key={String(index)}>
        <Subtitle>{item.type}</Subtitle>
        <Content>{item.content}</Content>
      </div>
    ))}
  </Section>
);

export default Abilities;
