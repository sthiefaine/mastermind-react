import styled from "styled-components";

export const HeaderStyled = styled.div`
  background: ${({ theme }) => theme.tertiaryColor2};
  color: ${({ theme }) => theme.colorText};

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;
