import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: ${({ theme }) => theme.tertiaryColor2};
  color: ${({ theme }) => theme.colorText};

  height: 1.5rem;
  width: 100%;

  text-align: center;
`;
