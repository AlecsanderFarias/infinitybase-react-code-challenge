import styled from "styled-components";

import colors from "~/styles/colors";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  padding: 1.8rem;
  font-size: 2.8rem;
  color: ${colors.primary};
  text-align: center;
`;

export const BottomTab = styled.div`
  width: 100%;
  margin-top: auto;
  padding-top: 50px;
`;
