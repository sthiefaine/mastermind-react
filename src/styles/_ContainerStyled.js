import styled from "styled-components";

export const ContainerStyled = styled.div`
  background: ${({ theme }) => theme.tertiaryColor2};
  color: ${({ theme }) => theme.colorText};

  min-width: 120px;
  max-width: 540px;

  max-height: 52vh;
  width: 95%;

  padding: 1rem 0;
  margin-bottom: 3rem;

  border-radius: 1rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  overflow-y: auto;
`;
