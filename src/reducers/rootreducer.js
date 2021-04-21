const initialState = {
  data: [
    {
      labels: [],
    },
  ],
  dataSets: [],
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
    //if multiple datasets, dataSets: [...dataSets, action.payload]
    case "PUSH_DATA_STRING":
      return {
        ...state,
        dataSets: [action.payload],
      };

    default:
      return state;
  }
};
