import { useTranslation } from "next-i18next";

import {
  Section,
  Title,
  Subsection,
  Subtitle,
  Text,
  Topic,
} from "~/styles/components";

const Education = () => {
  const { t } = useTranslation("education");

  type Formation = {
    institution: string;
    graduation: string;
    time: string;
    additional: string[];
  };

  const title = t("title");
  const list = t("list", { returnObjects: true }) as Formation[];

  return (
    <Section>
      <Title>{title}</Title>
      {list.map((item, index) => (
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
};

export default Education;
