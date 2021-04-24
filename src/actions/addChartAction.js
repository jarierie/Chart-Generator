import { ADD_CHART_STRING } from "./ADD_CHART_STRING";

export const addChartAction = (payload) => {
  return {
    type: ADD_CHART_STRING,
    payload,
  };
};
