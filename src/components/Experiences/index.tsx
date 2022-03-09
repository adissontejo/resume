import { experiences } from "~/data";
import {
  Section,
  Title,
  Subsection,
  Subtitle,
  Text,
  Topic,
} from "~/styles/components";

const Experiences = () => (
  <Section>
    <Title>{experiences.title}</Title>
    {experiences.list.map((item, index) => (
      <Subsection key={String(index)}>
        <Subtitle>{item.name}</Subtitle>
        <Text>
          {item.institution}
          <br />
          {item.time}
        </Text>
        <ul>
          {item.additional.map((item, index) => (
            <Topic key={String(index)}>{item}</Topic>
          ))}
        </ul>
      </Subsection>
    ))}
  </Section>
);

export default Experiences;
