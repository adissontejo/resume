import { forwardRef, HTMLAttributes } from "react";

import { header } from "~/data";

import { Container, Name, Occupation } from "./styles";

const Header = () => (
  <Container>
    <Name>{header.name}</Name>
    <Occupation>{header.occupation}</Occupation>
  </Container>
);

export default Header;
