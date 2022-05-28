import "expo-dev-client";
import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { StatusBar, SafeAreaView } from "react-native";
import AppMain from "./screens/AppMain";
import store from "./redux/createStore";
import { StripeProvider } from "@stripe/stripe-react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import * as Sentry from "sentry-expo";
import BeforeSplash from './screens/BeforeSplash';
import { storeData, removeStoreData, getStorage } from './util/AsyncStorage';

const cache = new InMemoryCache();
// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://app.medipocket.world/graphql/",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});
Sentry.init({
  dsn: "https://64bbf94482e64740a325d9680dd0cdf2@o1199963.ingest.sentry.io/6323878",
  enableInExpoDevelopment: true,
  debug: false,
});

const App = () => {

  const [loading, setLoading] = React.useState(true);
  const [isLogin, setIsLogin] = React.useState(false);
  const [userData, setUserData] = React.useState(undefined);

  React.useEffect(async () => {

    let user_info = await getStorage('user_info')

    console.log('================', user_info)
    if (user_info?.isLogin) {

      setUserData(user_info)
      setIsLogin(true)
      setLoading(false)

    } else {

      setLoading(false)
    }

  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StripeProvider
        // publishableKey="pk_test_2Fr70nsDAtUaKwlIx73qEw8p"
        // publishableKey="pk_test_51L3CFeSIfO58XcZRgR6oWGXV6A90OC0jSQ4IYExtdNsb4806PrPZBnZ8hT1Sr6y0ZMRPcZZafcmwxRGsFOnrluBt00lHZYrUhU"

        publishableKey="pk_live_HuXS0sPYQFn62lfDrx0SuoKR"
        merchantIdentifier="merchant.identifier"
      >
        <ApolloProvider client={client}>
          <Provider store={store}>
            {/* <StatusBar style="dark" /> */}
            <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />

            {
              loading ?
                <BeforeSplash />
                :
                <AppMain isLogin={isLogin} userData={userData}/>
            }

          </Provider>
        </ApolloProvider>
      </StripeProvider>
    </SafeAreaView>
  );
};

export default App;
