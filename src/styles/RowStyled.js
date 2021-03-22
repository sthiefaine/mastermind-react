import styled from "styled-components";

export const RowStyled = styled.div`
  height: 3.4rem;

  background: ${({ theme }) => theme.rowColor};
  color: ${({ theme }) => theme.colorText};

  border-radius: 12px;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.6rem 1rem;

  &.play2 {
    background-color: rgb(135, 57, 249);
  }

  &.st2 {
    background-color: rgb(135, 57, 249);
  }

  &.winmaster {
    background-color: rgb(0, 170, 242);
  }

  &.red {
    background-color: rgb(255, 79, 79);
  }

  &.margin0 {
    margin: 0rem;
  }
`;
