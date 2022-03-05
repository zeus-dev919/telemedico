import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import {
  BeforeSplash,
  Splash,
  Register,
  Login,
  Recovery,
  Conscent,
  Home,
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
  BeforeCall,
  Call,
} from "./index.js";

const Stack = createStackNavigator();

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const AppMain = () => {
  const { currentUser } = useSelector(mapState);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialeRouteName="home"
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
            <Stack.Screen name="home" component={Home} />
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
            <Stack.Screen name="beforecall" component={BeforeCall} />
            <Stack.Screen name="call" component={Call} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppMain;
