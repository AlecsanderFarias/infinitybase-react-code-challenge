/* eslint-disable no-multi-assign */
/* eslint-disable import/no-cycle */
/* eslint-disable require-yield */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";
import { all, takeLatest, call, put } from "redux-saga/effects";

import api from "../../../services/api";
import bucket from "../../index";
import { getQuestionsSuccess, getQuestionFailure } from "./actions";

export function* getQuestions() {
  try {
    const response = yield call(
      api.post,
      "?amount=10&difficulty=hard&type=boolean"
    );

    let { results } = response.data;

    // adding user_answer field to control game
    results = results.map((item) => ({ ...item, user_answer: null }));

    yield put(getQuestionsSuccess(results));
  } catch (error) {
    toast.error(
      error.response.data.error || " An error occurred, please try again later."
    );

    yield put(getQuestionFailure());
  }
}

export function* answerQuestion({ payload }) {
  try {
    let questions = bucket.store.getState().questions.data;

    const { response } = payload;

    questions = questions.map((item, index) => ({
      ...item,
      user_answer: index === payload.index ? response : item.user_answer,
    }));

    yield put(getQuestionsSuccess(questions));
  } catch (error) {
    toast.error(" An error occurred, please try again later.");
  }
}

export default all([
  takeLatest("@questions/GET_QUESTIONS_REQUEST", getQuestions),
  takeLatest("@questions/ANSWER_QUESTION", answerQuestion),
]);
