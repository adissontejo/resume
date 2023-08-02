import { useTranslation } from "next-i18next";

import {
  Section,
  Title,
  Subsection,
  Subtitle,
  Text,
  Topic,
} from "~/styles/components";

const Experiences = () => {
  const { t } = useTranslation("experiences");

  type Experience = {
    name: string;
    institution: string;
    time: string;
    additional: string[];
  };

  const title = t("title");
  const list = t("list", { returnObjects: true }) as Experience[];

  return (
    <Section>
      <Title>{title}</Title>
      {list.map((item, index) => (
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
};

export default Experiences;
