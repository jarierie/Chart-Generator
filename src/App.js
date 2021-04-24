import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from "./components/Chart";
import ChartCollection from "./components/ChartCollection";
import Home from "./pages/Home";
import MakeChart from "./pages/MakeChart";
import Charts from "./pages/Charts";

function App() {
  return (
    <>
      <Router>
        <ChakraProvider>
          <Provider store={store}>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/makeChart' component={MakeChart}></Route>
            <Route exact path='/chart' component={Chart}></Route>
            <Route exact path='/chartCollection' component={Charts}></Route>
          </Provider>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
