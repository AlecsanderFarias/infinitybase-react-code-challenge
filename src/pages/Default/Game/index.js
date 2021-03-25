import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { Loading, Question } from "~/components";
import { getQuestionsResquest } from "~/store/modules/questions/actions";

import { Container } from "./styles";

function Game() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.questions);

  const question = () => {
    console.log(data);

    return {};
  };

  React.useEffect(() => {
    if (!data || data.length === 0) {
      dispatch(getQuestionsResquest());
    }
  }, []);

  return (
    <Container>
      {loading ? <Loading /> : <Question data={question()} />}
    </Container>
  );
}

export default Game;
