import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Type = styled.h1`
  padding: 1.8rem;
  font-size: 2.8rem;
  color: ${colors.primary};
  text-align: center;
`;

export const Description = styled.p`
  color: ${colors.tertiary};
  padding: 0.8rem 2.8rem;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1.8rem;
`;

export const ActionsTab = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    flex: 1;
  }
`;
