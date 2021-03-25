import styled from "styled-components";

import colors from "../../../styles/colors";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const WelcomeText = styled.h1`
  padding: 2.8rem;
  font-size: 2.8rem;
  color: ${colors.primary};
  text-align: center;
`;

export const DescriptionText = styled.p`
  color: ${colors.tertiary};
  padding: 0.8rem 2.8rem;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 1.8rem;
`;
