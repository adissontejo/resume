import { awards } from "~/data";
import { Section, Title, Subtitle, Content } from "~/styles/components";

const Awards = () => (
  <Section>
    <Title>{awards.title}</Title>
    {awards.list.map((item, index) => (
      <div key={String(index)}>
        <Subtitle>{item.competition}</Subtitle>
        <Content>{item.medal}</Content>
      </div>
    ))}
  </Section>
);

export default Awards;
