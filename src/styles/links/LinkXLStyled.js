import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkXLStyled = styled(Link)`
  background: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.colorText};

  min-width: 300px;
  max-width: 400px;
  margin: 1rem auto;
  z-index: 6;
  width: 90%;

  padding: 0.8rem;
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;
  font-size: 2.2rem;

  &.important {
    background: ${({ theme }) => theme.accentColor2};
  }
`;
