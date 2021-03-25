export function getQuestionsResquest() {
  return {
    type: "@questions/GET_QUESTIONS_REQUEST",
  };
}

export function getQuestionsSuccess(questions) {
  return {
    type: "@questions/GET_QUESTIONS_SUCCESS",
    payload: { questions },
  };
}

export function getQuestionFailure() {
  return {
    type: "@questions/GET_QUESTIONS_FAILURE",
  };
}
