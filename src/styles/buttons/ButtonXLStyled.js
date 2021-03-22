import styled from "styled-components";

export const ButtonXLStyled = styled.button`
  background: ${({ theme }) => theme.rowColor};
  color: ${({ theme }) => theme.colorText};

  min-width: 300px;
  max-width: 400px;
  margin: 1rem auto;
  z-index: 6;
  width: 90%;

  padding: 0.8rem;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  font-size: 2.2rem;

  &.red {
    background: red;
  }
  &.green {
    background: green;
  }
`;
