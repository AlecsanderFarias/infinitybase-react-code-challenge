/* eslint-disable no-unused-vars */
import { toast } from "react-toastify";
import { all, takeLatest, call, put } from "redux-saga/effects";

import api from "../../../services/api";
import { getQuestionsSuccess, getQuestionFailure } from "./actions";

export function* getQuestions() {
  try {
    const response = yield call(
      api.post,
      "?amount=10&difficulty=hard&type=boolean"
    );

    const { results } = response.data;

    yield put(getQuestionsSuccess(results));
  } catch (error) {
    toast.error(
      error.response.data.error || " An error occurred, please try again later."
    );

    yield put(getQuestionFailure());
  }
}

export default all([
  takeLatest("@questions/GET_QUESTIONS_REQUEST", getQuestions),
]);
