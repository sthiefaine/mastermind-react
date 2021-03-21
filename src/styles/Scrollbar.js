import styled from "styled-components";

export const Scrollbar = styled.span`
  width: 100%;

  overflow-y: auto;
  position: relative;
  right: 0;

  /* width */
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px ${({ theme }) => theme.textColor};
    border-radius: 4px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.accentColor2};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.overlay};
  }
`;
