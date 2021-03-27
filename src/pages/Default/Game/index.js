import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Loading, Question } from "~/components";
import { getQuestionsResquest } from "~/store/modules/questions/actions";

import { Container } from "./styles";

function Game() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.questions);
  const [questionData, setQuestionData] = React.useState({});

  function setNextQuestion() {
    const indexNextQuestion = data
      .map(
        (item) => item.user_answer !== undefined && item.user_answer !== null
      )
      .indexOf(false);

    if (indexNextQuestion === -1) {
      // have finished the game or didin't get the questions

      if (data.length === 0) {
        dispatch(getQuestionsResquest());

        return;
      }

      // have finished the game

      history.push("/finish");

      return;
    }

    setQuestionData({ ...data[indexNextQuestion], index: indexNextQuestion });
  }

  React.useEffect(() => {
    if (!data || data.length === 0) {
      dispatch(getQuestionsResquest());
    } else {
      setNextQuestion();
    }
  }, [data]);

  return (
    <Container>
      {loading ? <Loading /> : <Question data={questionData} />}
    </Container>
  );
}

export default Game;
