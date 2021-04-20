import { createStore } from "redux";
import { rootReducer } from "../reducers/rootreducer";

export const store = createStore(rootReducer);
