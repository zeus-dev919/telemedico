import "expo-dev-client";
import "react-native-gesture-handler";
import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import AppMain from "./screens/AppMain";
import store from "./redux/createStore";
import * as Sentry from "sentry-expo";

const App = () => {
  // LogBox.ignoreAllLogs();
  // Sentry.init({
  //   dsn: "https://65e7a03b195d4fd1ba6d96bb3a477506@o1100035.ingest.sentry.io/6124925",
  //   enableInExpoDevelopment: true,
  //   debug: true,
  // });
  return (
    <Provider store={store}>
      <AppMain />
    </Provider>
  );
};

export default App;
