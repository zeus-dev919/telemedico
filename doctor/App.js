import "react-native-gesture-handler";
import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import AppMain from "./screens/AppMain";
import store from "./redux/createStore";

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <AppMain />
    </Provider>
  );
};

export default App;
