import { BAR_TYPE_STRING } from "./BAR_TYPE_STRING";

export const barTypeAction = (payload) => {
  return {
    type: BAR_TYPE_STRING,
    payload,
  };
};
