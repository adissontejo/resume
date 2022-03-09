import styled from "styled-components";

export const Main = styled.main`
  min-width: 100vw;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Actions = styled.div`
  margin: 0 auto;
  padding: 20px calc((100vw - 700px) / 2);

  width: 100%;
  min-width: 840px;
  background: black;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 80px 40px;

  background: white;
  width: 840px;
  height: 1188px;

  display: flex;
  justify-content: center;

  gap: 20px;
`;
