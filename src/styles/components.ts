import styled from "styled-components";

export const Column = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;
`;

export const Section = styled.div`
  padding: 15px 15px 12px;

  width: 100%;
  border-radius: 15px;
  background: ${({ theme }) => theme.colors.contrast};

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 7px;
`;

export const Title = styled.p`
  margin-bottom: 5px;

  font: 13px "Fredoka-Bold", sans-serif;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.p`
  font: 12px "Fredoka-SemiBold", sans-serif;
  color: black;
  text-align: justify;
`;

export const Text = styled.p`
  font: 12px "Fredoka-Medium", sans-serif;
  text-align: justify;
`;

export const Content = styled.p`
  font: 12px "Fredoka-Regular", sans-serif;
  color: ${({ theme }) => theme.colors.content};
  text-align: justify;
`;

export const Topic = styled.li`
  margin-left: 15px;

  font: 10px "Fredoka-Regular", sans-serif;
  color: ${({ theme }) => theme.colors.content};
  text-align: justify;
`;
