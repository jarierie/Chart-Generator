import { ADD_MAP_STRING } from "./ADD_MAP_STRING";

export const addMapAction = (payload) => {
  return {
    type: ADD_MAP_STRING,
    payload,
  };
};
