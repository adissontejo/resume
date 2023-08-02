import { useTranslation } from "next-i18next";

import { Section, Title, Subtitle, Content } from "~/styles/components";

const Awards = () => {
  const { t } = useTranslation("awards");

  type Award = {
    competition: string;
    medal: string;
  };

  const title = t("title");
  const list = t("list", { returnObjects: true }) as Award[];

  return (
    <Section>
      <Title>{title}</Title>
      {list.map((item, index) => (
        <div key={String(index)}>
          <Subtitle>{item.competition}</Subtitle>
          <Content>{item.medal}</Content>
        </div>
      ))}
    </Section>
  );
};

export default Awards;
