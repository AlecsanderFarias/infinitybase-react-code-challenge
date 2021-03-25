import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import createStore from "./createStore";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";
import persistReducers from "./persistReducers";

const sagamiddleware = createSagaMiddleware({});

const middlewares = [sagamiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagamiddleware.run(rootSaga);

const bucket = {
  store,
  persistor,
};

export default bucket;
