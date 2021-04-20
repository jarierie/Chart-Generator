import "./App.css";
import { Provider } from "react-redux";
import DoughnutChart from "./components/Dougnhut";
import { store } from "./store/store";
import Input from "./components/Input";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from "./components/Chart";

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Route exact path='/' component={Input}></Route>
          {/* <DoughnutChart></DoughnutChart> */}
          <Route exact path='/chart' component={Chart}></Route>
        </Provider>
      </Router>
    </>
  );
}

export default App;
