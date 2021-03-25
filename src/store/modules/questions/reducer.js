import produce from 'immer';

const INITIAL_STATE = {
  loading : false,
};

export default function questions(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/GET_QUESTIONS_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/GET_QUESTIONS_SUCCESS': {
        draft.loading = false;
        break;
      }

     

      default:
    }
  });
}
