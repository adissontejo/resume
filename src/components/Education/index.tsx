import { education } from "~/data";
import {
  Section,
  Title,
  Subsection,
  Subtitle,
  Text,
  Topic,
} from "~/styles/components";

const Education = () => (
  <Section>
    <Title>{education.title}</Title>
    {education.list.map((item, index) => (
      <Subsection key={String(index)}>
        <Subtitle>{item.institution}</Subtitle>
        <Text>
          {item.graduation}
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

export default Education;
