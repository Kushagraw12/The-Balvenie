import React from 'react';
import { Easing, Animated, Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import { Block, Text, theme } from "galio-framework";

import HomeScreen from '../screens/Home';
import OnboardingScreen from '../screens/Onboarding';
// import ProfileScreen from '../screens/Profile';
// import ProScreen from '../screens/Pro';


import Columns from '../screens/Columns';
import Calculator from '../screens/Components';


import CustomDrawerContent from './Menu';
import { Icon, Header } from '../components';
import { Images, materialTheme } from "../constants/";
import Help from '../screens/Help';
// import Home from '../screens/Home';

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const profile = {
  avatar: Images.Profile2,
  name: "Welcome User!",
};

// function ProfileStack(props) {
//   return (
//     <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{
//           header: ({ navigation, scene }) => (
//             <Header
//               white
//               transparent
//               title="Profile"
//               scene={scene}
//               navigation={navigation}
//             />
//           ),
//           headerTransparent: true
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

function SettingsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Columns"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="Columns"
        component={Columns}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Columns" scene={scene} navigation={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function HelpStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Help"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="Help"
        component={Help}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Help" scene={scene} navigation={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function ComponentsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Calculator"
        component={Calculator}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Calculator" scene={scene} navigation={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header 
              search
              tabs
              title="Home"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => (
        <CustomDrawerContent {...props} profile={profile} />
      )}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: "center",
          alignContent: "center",
          // alignItems: 'center',
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="shop"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Columns"
        component={SettingsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="gears"
              family="font-awesome"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: -3 }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="gears"
              family="font-awesome"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: -3 }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Calculator"
        component={ComponentsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="md-switch"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: 2, marginLeft: 2 }}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
