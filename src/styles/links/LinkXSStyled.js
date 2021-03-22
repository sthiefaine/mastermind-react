import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkXSStyled = styled(Link)`
  background: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.colorText};

  width: 3rem;
  margin: 0.5rem;
  padding: 0.8rem;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: baseline;
  font-size: 1.1rem;

  &.important {
    background: ${({ theme }) => theme.accentColor2};
  }
`;
