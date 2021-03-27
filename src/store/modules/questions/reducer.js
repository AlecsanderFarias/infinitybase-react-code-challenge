import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default function questions(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@questions/GET_QUESTIONS_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@questions/GET_QUESTIONS_SUCCESS": {
        draft.data = action.payload.questions;
        draft.loading = false;
        break;
      }

      case "@questions/GET_QUESTIONS_FAILURE": {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
