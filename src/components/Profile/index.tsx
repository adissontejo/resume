import { useTranslation } from "next-i18next";

import { Section, Title } from "~/styles/components";

import { ProfileContent } from "./styles";

const Profile = () => {
  const { t } = useTranslation("profile");

  const title = t("title");
  const content = t("content");

  return (
    <Section>
      <Title>{title}</Title>
      <ProfileContent>{content}</ProfileContent>
    </Section>
  );
};

export default Profile;
