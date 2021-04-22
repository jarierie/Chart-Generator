import { ADD_OPTION_LEGEND_STRING } from "./ADD_OPTION_LEGEND_STRING";

export const addOptionLegendCreator = (payload) => {
  return {
    type: ADD_OPTION_LEGEND_STRING,
    payload,
  };
};
