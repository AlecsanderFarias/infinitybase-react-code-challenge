import styled from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
`;

export const Text = styled.span`
  padding: 0 2.8rem;
  font-size: 1.2rem;

  max-width: 1024px;
  width: 100%;
  color: ${colors.tertiary};
  text-align: justify;
`;
