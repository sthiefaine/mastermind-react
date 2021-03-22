import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkSStyled = styled(Link)`
  background: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.colorText};

  min-width: 2rem;
  max-width: 6rem;
  width: 4rem;
  z-index: 6;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: baseline;
  font-size: 1.5rem;

  &.important {
    background: ${({ theme }) => theme.accentColor2};
  }
`;
