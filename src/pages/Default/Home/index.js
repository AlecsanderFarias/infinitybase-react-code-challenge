import React from "react";

import { useHistory } from "react-router-dom";

import { Button } from "~/components";

import { Container, WelcomeText, DescriptionText } from "./styles";

function Home() {
  const history = useHistory();

  function startGame() {
    history.push("/game");
  }

  return (
    <Container>
      <WelcomeText>!!! WELCOME TO QUIZ!!!</WelcomeText>
      <div>
        <DescriptionText>10 questions will be shown to you.</DescriptionText>
        <DescriptionText>Can you get maximun score ?</DescriptionText>
      </div>

      <Button onClick={() => startGame()}>Start</Button>
    </Container>
  );
}

export default Home;
