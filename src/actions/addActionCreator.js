import { ADD_ACTION_STRING } from "./ADD_ACTION_STRING";

export const addActionCreator = (payload) => {
  return {
    type: ADD_ACTION_STRING,
    payload,
  };
};
