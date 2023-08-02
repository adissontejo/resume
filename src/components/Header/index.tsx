import { useTranslation } from "next-i18next";

import { Container, Name, Occupation } from "./styles";

const Header = () => {
  const { t } = useTranslation("header");

  const name = t("name");
  const occupation = t("occupation");

  return (
    <Container>
      <Name>{name}</Name>
      <Occupation>{occupation}</Occupation>
    </Container>
  );
};

export default Header;
