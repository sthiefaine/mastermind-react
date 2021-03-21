import styled from "styled-components";

export const ContainerStyled = styled.div`
  background: ${({ theme }) => theme.tertiaryColor2};
  color: ${({ theme }) => theme.colorText};

  min-width: 140px;
  max-width: 540px;

  max-height: 53vh;
  width: 100%;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  align-content: center;
  overflow-y: auto;
`;
