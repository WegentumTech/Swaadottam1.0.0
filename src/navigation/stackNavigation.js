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
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import YourOrders from '../screens/ProfileSubscreens/YourOrders';
import Referal from '../screens/ProfileSubscreens/Referal';
import Help from '../screens/ProfileSubscreens/Help';
import Wishlist from '../screens/ProfileSubscreens/Wishlist';
import Preferences from '../screens/ProfileSubscreens/Preferences';
import Menu from '../screens/Menu';
import OrderStatus from '../screens/ProfileSubscreens/OrderStatus';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="SplashScreen">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SingleMealScreen" component={SingleMealScreen} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="BillingAndPayment" component={BillingAndPayment} />
      <Stack.Screen name="CategotyItems" component={CategotyItems} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="YourOrders" component={YourOrders} />
      <Stack.Screen name="Referal" component={Referal} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="OrderStatus" component={OrderStatus} />
    </Stack.Navigator>
  );
}
export default StackNavigation;
