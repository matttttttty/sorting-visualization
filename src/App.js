// import logo from "./logo.svg";
import "./App.css";
import BubbleSort from "./components/bubbleSort";
import store from "./store/store";
import { Provider } from "react-redux";
import SettingForm from "./components/form";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "milligram/dist/milligram.min.css";

function App() {
  return (
    <Provider store={store}>
      <SettingForm />
      <BubbleSort />
    </Provider>
  );
}

export default App;
