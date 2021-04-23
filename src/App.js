import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Inputs from "./components/Input";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from "./components/Chart";
import PieChart from "./components/Pie";
import BubbleChart from "./pages/BubbleChart";
import HorizontalBarChart from "./pages/HorizontalBarChart";
import LineChart from "./pages/LineChart";
import PolarChart from "./pages/PolarChart";
import RadarChart from "./pages/RadarChart";
import ScatterChart from "./pages/ScatterChart";

function App() {
  return (
    <>
      <Router>
        <ChakraProvider>
          <Provider store={store}>
            <Route exact path='/' component={Inputs}></Route>
            {/* <DoughnutChart></DoughnutChart> */}
            <Route exact path='/pie' component={PieChart}></Route>
            <Route exact path='/chart' component={Chart}></Route>
            {/* Charts mock routes */}
            <Route exact path='/bubblechart' component={BubbleChart}></Route>
            <Route
              exact
              path='/horizontalbarchart'
              component={HorizontalBarChart}
            ></Route>
            <Route exact path='/linechart' component={LineChart}></Route>
            <Route exact path='/piechart' component={PieChart}></Route>
            <Route exact path='/polarchart' component={PolarChart}></Route>
            <Route exact path='/radarchart' component={RadarChart}></Route>
            <Route exact path='/scatterchart' component={ScatterChart}></Route>
          </Provider>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
