import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import React from 'react';
import Login from '../screens/Authentication/Login';
import VerifyOtp from '../screens/Authentication/VerifyOtp';
import Home from '../screens/Home';
import DrawerNavigation from './DrawerNavigation';
import SearchScreen from '../screens/SearchScreen';
import SingleMealScreen from '../screens/DynamicScreen/SingleMealScreen';
import Cart from '../screens/Cart';
import BillingAndPayment from '../components/BillingAndPayment';
import CategotyItems from '../screens/DynamicScreen/CategotyItems';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SingleMealScreen" component={SingleMealScreen} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="BillingAndPayment" component={BillingAndPayment} />
      <Stack.Screen name="CategotyItems" component={CategotyItems} />
    </Stack.Navigator>
  );
}
export default StackNavigation;
