import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Inputs from "./components/Input";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from "./components/Chart";

function App() {
  return (
    <>
      <Router>
        <ChakraProvider>
          <Provider store={store}>
            <Route exact path='/' component={Inputs}></Route>
            {/* <DoughnutChart></DoughnutChart> */}
            <Route exact path='/chart' component={Chart}></Route>
          </Provider>
        </ChakraProvider>
      </Router>
    </>
  );
}

export default App;
