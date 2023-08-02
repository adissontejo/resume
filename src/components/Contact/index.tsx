import { useTranslation } from "next-i18next";

import { Section, Title, Content, Subtitle } from "~/styles/components";

const Contact = () => {
  const { t } = useTranslation("contact");

  type Contact = {
    name: string;
    content: string;
  };

  const title = t("title");
  const list = t("list", { returnObjects: true }) as Contact[];

  return (
    <Section>
      <Title>{title}</Title>
      {list.map((item, index) => (
        <div key={String(index)}>
          <Subtitle>{item.name}</Subtitle>
          <Content>{item.content}</Content>
        </div>
      ))}
    </Section>
  );
};

export default Contact;
