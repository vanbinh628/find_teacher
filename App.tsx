import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ListTopic from './components/ListTopic';
import ChangePassword from './components/ChangePassword';
import Login from './components/Login';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EditProfile from './components/EditProfile';
import Profile from './components/Profile';
import { Provider } from "react-redux";
import { Store } from './redux/store';
import TheClasses from './components/TheClasses'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActivityNotification from './components/ActivityNotification';
import PersonalNotification from './components/PersonalNotification';
import DetailsClass from './components/DetailClass';

const App = () => {
  const Tab = createBottomTabNavigator();

  const Stack = createStackNavigator();

  function TopNavigationNotification() {
    const Tab = createMaterialTopTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          tabBarIndicatorStyle: {
            borderBottomColor: '#3CBA54',
            borderBottomWidth: 5,
          },
          tabBarStyle: {
            backgroundColor: '#F1F1F1',

          },

          tabBarLabelStyle: {
            fontSize: 18,
            textTransform: 'none',
          },

        })}>
        <Tab.Screen name='Personal' component={PersonalNotification} />
        <Tab.Screen name='Class' component={ActivityNotification} />
      </Tab.Navigator>
    )
  }

  function StackNavigationUser() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator screenOptions={({ route }) => ({
        headerShown: route.name === 'Profile' ? false : true,
        headerTitleAlign: 'center'
      })}>
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='EditProfile' component={EditProfile} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} />
      </Stack.Navigator>
    )
  }

  function BottomNavigationApp() {
    const Stack = createStackNavigator();
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            switch (route.name) {
              case 'StackNavigationUser': iconName = 'account-outline';
                break;
              case 'List_Topic': iconName = 'book-open-page-variant-outline';
                break;
              case 'notification': iconName = 'bell-outline';
                break;
              default:
                break;
            }
            return (
              <MaterialCommunityIcons name={iconName} color={color} size={size} />
            )
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#6dcff6',
        })
        }>
        <Tab.Screen name="List_Topic" component={DetailsClass} />
        <Tab.Screen name='notification' component={TopNavigationNotification} options = {{tabBarBadge: 3}} />
        <Tab.Screen name="StackNavigationUser" component={StackNavigationUser} />
      </Tab.Navigator>

    )
  }

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Bottom_Navigation' component={BottomNavigationApp} />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
  }
});
