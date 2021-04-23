// global store = data,datasets,title,type,legend,scales

const initialState = {
  data: [
    {
      labels: [],
    },
  ],
  dataSets: [],

  title: {
    display: true,
    text: "default Title",
    fontSize: 100,
    fontColor: "#0d0d0d",
  },
  type: "line",
  legend: {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "black",
    },
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
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
    case "ADD_OPTION_TITLE":
      return {
        ...state,
        title: action.payload,
      };
    case "ADD_OPTION_LEGEND":
      return {
        ...state,
        legend: action.payload,
      };
    case "BAR_TYPE":
      return {
        ...state,
        type: action.payload,
      };

    default:
      return state;
  }
};
