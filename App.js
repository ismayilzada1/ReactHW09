import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from "./src/Screens/SignUpScreen/SignUpScreen";
import SignInScreen from "./src/Screens/SignInScreen/SignInScreen";
import FeedScreen from "./src/Screens/FeedScreen/FeedScreen"
import MarketScreen from "./src/Screens/MarketScreen/MarketScreen"
import AboutDeviceScreen from "./src/Screens/AboutDeviceScreen/AboutDeviceScreen";
import Content from "./src/Screens/ContentScreen/Content";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome} from "@expo/vector-icons";


const Tab = createBottomTabNavigator();


// const Stack = createStackNavigator();

export default function App() {
  return (
      // <NavigationContainer>
      //   <Stack.Navigator initialRouteName="Feed">
      //       <Stack.Screen
      //           name="SignUp"
      //           component={SignUpScreen}
      //           options={{ headerShown: false }}
      //       />
      //       <Stack.Screen
      //           name="SignIn"
      //           component={SignInScreen}
      //           options={{ headerShown: false }}
      //       />
      //       <Stack.Screen
      //           name="Feed"
      //           component={FeedScreen}
      //           options={{ headerShown: false }}
      //       />
      //       <Stack.Screen
      //           name="Market"
      //           component={MarketScreen}
      //           options={{ headerShown: false }}
      //       />
      //
      //       <Stack.Screen
      //           name="Content"
      //           component={ContentScreen}
      //           options={{ headerShown: false }}
      //       />
      //       <Stack.Screen
      //           name="AboutDevice"
      //           component={AboutDeviceScreen}
      //           options={{ headerShown: false }}
      //       />
      //   </Stack.Navigator>
      // </NavigationContainer>

      <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen
              name="Market"
              component={MarketScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <FontAwesome name="shopping-cart" size={size} color={color} />
                  ),headerShown: false

              }}
          />
          <Tab.Screen
              name="Content"
              component={Content}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <FontAwesome name="home" size={size} color={color} />
                  ),headerShown: false
              }}
          />
          <Tab.Screen
              name="Feed"
              component={FeedScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <FontAwesome name="heart" size={size} color={color} />
                  ),headerShown: false
              }}
          />

      </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
