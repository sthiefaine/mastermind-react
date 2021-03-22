import styled from "styled-components";

export const ButtonSStyled = styled.button`
  background: ${({ theme }) => theme.rowColor};
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

  &.red {
    background: red;
  }
  &.green {
    background: green;
  }
`;
