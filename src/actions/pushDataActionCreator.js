import { PUSH_DATA_STRING } from "./PUSH_DATA_STRING";

export const pushDataActionCreator = (payload) => {
  return {
    type: PUSH_DATA_STRING,
    payload,
  };
};
