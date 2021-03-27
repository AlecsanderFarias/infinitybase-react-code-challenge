import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Answer, Button } from "~/components";
import { getQuestionsSuccess } from "~/store/modules/questions/actions";

import { Container, Title, BottomTab } from "./styles";

function calculateScore(questions) {
  const rightAnswer = questions.filter(
    (item) => item.correct_answer === item.user_answer
  ).length;

  return (rightAnswer / questions.length) * 100;
}

function Finish() {
  const dispatch = useDispatch();
  const history = useHistory();
  const questions = useSelector((state) => state.questions.data);
  const score = calculateScore(questions);

  function reset() {
    // clean questions
    dispatch(getQuestionsSuccess([]));

    // start game again

    history.push("/");
  }

  React.useEffect(() => {
    if (questions.length === 0) {
      history.push("/");
    }
  }, []);

  return (
    <Container>
      <Title>
        Your score: <br /> {score}%
      </Title>

      {questions.map((item) => (
        <Answer data={item} />
      ))}

      <BottomTab>
        <Button onClick={() => reset()}>Go Again</Button>
      </BottomTab>
    </Container>
  );
}

export default Finish;
