import "expo-dev-client";
import "react-native-gesture-handler";
import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import AppMain from "./screens/AppMain";
import store from "./redux/createStore";
import * as Sentry from "sentry-expo";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const cache = new InMemoryCache()
// Initialize Apollo Client
const client = new ApolloClient({
  uri: "http://164.52.218.166:8000/graphql/",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});

const App = () => {
  // LogBox.ignoreAllLogs();
  // Sentry.init({
  //   dsn: "https://65e7a03b195d4fd1ba6d96bb3a477506@o1100035.ingest.sentry.io/6124925",
  //   enableInExpoDevelopment: true,
  //   debug: true,
  // });
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        {/* <StatusBar style="auto" /> */}
        <AppMain />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
