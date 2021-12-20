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
  Symthoms,
  DoctorsList,
  Appointment,
} from "./index.js";

const Stack = createStackNavigator();

const mapState = ({ user }) => ({
  currentProperty: user.currentProperty,
});

const AppMain = () => {
  const { currentProperty } = useSelector(mapState);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialeRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        {!currentProperty && (
          <>
            {/* <Stack.Screen name="BeforeSplash" component={BeforeSplash} /> */}
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Conscent" component={Conscent} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Recovery" component={Recovery} />
          </>
        )}
        {currentProperty && (
          <>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="doctors" component={Doctors} />
            <Stack.Screen name="symthoms" component={Symthoms} />
            <Stack.Screen name="doctorList" component={DoctorsList} />
            <Stack.Screen name="appointment" component={Appointment} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppMain;
