import { ADD_OPTION_TITLE_STRING } from "./ADD_OPTION_TITLE_STRING";

export const addOptionTitleCreator = (payload) => {
  return {
    type: ADD_OPTION_TITLE_STRING,
    payload,
  };
};
