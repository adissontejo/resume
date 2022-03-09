import styled from "styled-components";

import { Section } from "../../styles/components";

export const Container = styled(Section)`
  background: ${({ theme }) => theme.colors.primary};
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5px;
`;

export const Name = styled.p`
  font: 22px "Fredoka-Bold", sans-serif;
  color: white;
`;

export const Occupation = styled.p`
  font: 13px "Fredoka-SemiBold", sans-serif;
  color: white;
  text-align: center;
`;
