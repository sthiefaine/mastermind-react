import styled from "styled-components";

export const SelectStyled = styled.select`
  background: ${({ theme }) => theme.rowColor};
  color: ${({ theme }) => theme.colorText};

  margin: 0.5rem;
  padding: 0.6rem;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: baseline;
  font-size: 1rem;
`;
