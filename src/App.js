// import logo from "./logo.svg";
import "./App.css";
import MainSort from "./components/MainSort";
import store from "./store/store";
import { Provider } from "react-redux";
import SettingBar from "./components/SettingBar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "milligram/dist/milligram.min.css";

function App() {
  return (
    <Provider store={store}>
      <SettingBar />
      <MainSort />
    </Provider>
  );
}

export default App;
