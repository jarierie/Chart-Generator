const initialState = {
  data: [
    {
      labels: [],
      datasets: [],
    },
  ],
  options: {
    title: {
      display: true,
      text: "default Title",
      fontSize: 100,
    },
    legend: {
      display: true,
      position: "right",
      labels: {
        fontColor: "red",
      },
    },
  },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ACTION_STRING":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
