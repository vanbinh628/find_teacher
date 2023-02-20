import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ListTopic from './components/ListTopic';
import ChangePassword from './components/ChangePassword';
import Login from './components/Login';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EditProfile from './components/EditProfile';
import Profile from './components/Profile';
import { Provider } from "react-redux";
import { Store } from './redux/store';
import TheClasses from './components/TheClasses'

import { setName, setPassword } from './redux/action';
import ListTopic2 from './components/ListTopic2';

const App = () => {
  const Tab = createBottomTabNavigator();

  const Stack = createStackNavigator();

  function StackNavigationUser() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator>
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
              case 'StackNavigationUser': iconName = 'user';
                break;
              case 'List_Topic': iconName = 'comment-alt';
                break;
              default:
                break;

            }
            return (
              <FontAwesome5 name={iconName}
                color={color}
                size={size} />
            )
          },
          headerShown: route.name === 'StackNavigationUser' ? false : true
        })
        }
        tabBarOptions={{
          activeTintColor: 'blue',
          showLabel: false,
          size: 50

        }} >
        <Tab.Screen name="StackNavigationUser" component={StackNavigationUser} />
        <Tab.Screen name="List_Topic" component={ListTopic} />
      </Tab.Navigator>

    )
  }

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={ListTopic2} />
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
