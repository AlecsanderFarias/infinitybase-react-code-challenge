import React from "react";

import { useDispatch } from "react-redux";

import { answerQuestion } from "~/store/modules/questions/actions";

import Button from "../Button";
import { Container, Type, Description, ActionsTab } from "./styles";

function Question({ data }) {
  const dispatch = useDispatch();

  async function answer(response) {
    dispatch(answerQuestion(data.index, response));
  }

  return (
    <Container>
      <Type>{data.category}</Type>

      <Description>{data.question}</Description>

      <ActionsTab>
        <div>
          <Button onClick={() => answer("True")}>True</Button>
        </div>
        <div>
          <Button onClick={() => answer("False")}>False</Button>
        </div>
      </ActionsTab>
    </Container>
  );
}

export default Question;
