import styled from "styled-components";

export const ContainerStyled = styled.div`
  background: ${({ theme }) => theme.tertiaryColor2};
  color: ${({ theme }) => theme.colorText};

  min-width: 120px;
  max-width: 540px;

  max-height: 53vh;

  padding: 1rem;
  margin-bottom: 3rem;

  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
