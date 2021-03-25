import React from "react";

import { Button } from "../../../components";
import { Container, WelcomeText, DescriptionText } from "./styles";

function Home() {
  return (
    <Container>
      <WelcomeText>!!! WELCOME TO QUIZ!!!</WelcomeText>
      <DescriptionText>10 questions will be shown to you.</DescriptionText>
      <DescriptionText>Can you get maximun score ?</DescriptionText>
    </Container>
  );
}

export default Home;
