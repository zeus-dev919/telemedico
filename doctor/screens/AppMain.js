import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import {
  BeforeSplash,
  Splash,
  Register,
  Login,
  Recovery,
  Conscent,
  Home,
  HomePage,
  Doctors,
  DoctorsList,
  Appointment,
  Payments,
  IntakeForm,
  Help,
  Age,
  Gender,
  Pregnant,
  Country,
  Describe,
  Result,
  SelectProfile,
  Profile,
  Consults,
  DoctorConsults,
  DoctorPayment,
  BeforeCall,
  Call,
} from "./index.js";
import { FontAwesome, Fontisto, Entypo } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="homePage"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        name="homePage"
        component={HomePage}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "grey", fontSize: 14, marginBottom: 5 }}>
              Home
            </Text>
          ),
          tabBarIcon: () => (
            <FontAwesome
              name="home"
              color="#40e0d0"
              size={25}
              style={{ marginTop: 0 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="doctors"
        component={Doctors}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "grey", fontSize: 14, marginBottom: 5 }}>
              Doctors
            </Text>
          ),
          tabBarIcon: () => (
            <Fontisto
              name="doctor"
              color="#40e0d0"
              size={22}
              style={{ marginTop: 0 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="consults"
        component={Consults}
        options={{
          tabBarLabel: () => (
            <Text style={{ color: "grey", fontSize: 14, marginBottom: 5 }}>
              Consultation
            </Text>
          ),
          tabBarIcon: () => (
            <Entypo
              name="calendar"
              color="#40e0d0"
              size={22}
              style={{ marginTop: 0 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  doctorD: user.doctorD,
});

const AppMain = () => {
  const { currentUser } = useSelector(mapState);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialeRouteName="BeforeSplash"
        screenOptions={{
          headerShown: false,
        }}
      >
        {!currentUser && (
          <>
            <Stack.Screen name="BeforeSplash" component={BeforeSplash} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Conscent" component={Conscent} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Recovery" component={Recovery} />
          </>
        )}
        {currentUser && (
          <>
            {/* <Stack.Screen name="homeBottomTab" component={MyTabs} /> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="doctors" component={Doctors} />
            <Stack.Screen name="doctorList" component={DoctorsList} />
            <Stack.Screen name="appointment" component={Appointment} />
            <Stack.Screen name="payment" component={Payments} />
            <Stack.Screen name="intakeForm" component={IntakeForm} />
            <Stack.Screen name="help" component={Help} />
            <Stack.Screen name="age" component={Age} />
            <Stack.Screen name="gender" component={Gender} />
            <Stack.Screen name="pregnant" component={Pregnant} />
            <Stack.Screen name="country" component={Country} />
            <Stack.Screen name="describe" component={Describe} />
            <Stack.Screen name="result" component={Result} />
            <Stack.Screen name="selectProfile" component={SelectProfile} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="consults" component={Consults} />
            <Stack.Screen name="doctorConsults" component={DoctorConsults} />
            <Stack.Screen name="doctorPayment" component={DoctorPayment} />
            <Stack.Screen name="beforecall" component={BeforeCall} />
            <Stack.Screen name="call" component={Call} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppMain;
