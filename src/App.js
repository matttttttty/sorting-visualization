// import logo from "./logo.svg";
import "./App.css";
import BubbleSort from "./components/bubbleSort";
import store from "./store/store";
import { Provider } from "react-redux";
import SettingForm from "./components/form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      {/* <BubbleSort /> */}
      <SettingForm />
    </Provider>
  );
}

export default App;
