import styled from "styled-components";

export const MainStyled = styled.main`
  color: ${({ theme }) => theme.colorText};

  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
