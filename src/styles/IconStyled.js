import styled from "styled-components";

export const IconStyled = styled.span`
  & > svg {
    stroke: ${({ theme }) => theme.colorText};
  }
`;
