import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.button`
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
  background-color: ${colors.primary};
  padding: 1.5rem;
  font-size: 1.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
