import styled from "styled-components";

export const SpanStyled = styled.button`
  background: ${({ theme }) => theme.rowColor};
  color: ${({ theme }) => theme.colorText};

  margin: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: baseline;
  font-size: 1rem;
`;
