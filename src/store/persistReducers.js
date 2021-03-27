/* eslint-disable import/no-anonymous-default-export */
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "InfinityBase",
      storage,
      whitelist: ["questions"],
    },
    reducers
  );

  return persistedReducer;
};
