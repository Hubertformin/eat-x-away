import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeTabScreen from '../screens/HomeTabScreen';
import SearchTabScreen from '../screens/SearchTabScreen';
import {
    BottomTabParamList,
    OrdersTabParamList,
    HomeTabParamList,
    SearchTabParamList,
    AccountTabParamList
} from '../types';
import AccountTabScreen from "../screens/AccountTabScreen";
import OrdersTabScreen from "../screens/OrdersTabScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
          name="Orders"
          component={OrdersTabNavigator}
          options={{
              tabBarIcon: ({color}) => <TabBarIcon name="albums" color={color} />,
          }}
      />
      <BottomTab.Screen
          name="Account"
          component={AccountTabNavigator}
          options={{
              tabBarIcon: ({color}) => <TabBarIcon name="person" color={color} />,
          }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  // @ts-ignore
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeTabStack = createStackNavigator<HomeTabParamList>();

function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator>
      <HomeTabStack.Screen
        name="HomeTabScreen"
        component={HomeTabScreen}
        options={{ headerTitle: 'Home',  }}
      />
    </HomeTabStack.Navigator>
  );
}

const SearchTabStack = createStackNavigator<SearchTabParamList>();

function SearchTabNavigator() {
  return (
    <SearchTabStack.Navigator>
      <SearchTabStack.Screen
        name="SearchTabScreen"
        component={SearchTabScreen}
        options={{ headerTitle: 'Search' }}
      />
    </SearchTabStack.Navigator>
  );
}

const OrdersTabStack = createStackNavigator<OrdersTabParamList>();

function OrdersTabNavigator() {
  return (
    <OrdersTabStack.Navigator>
      <OrdersTabStack.Screen
        name="OrdersTabScreen"
        component={OrdersTabScreen}
        options={{ headerTitle: 'Orders' }}
      />
    </OrdersTabStack.Navigator>
  );
}

const AccountTabStack = createStackNavigator<AccountTabParamList>();

function AccountTabNavigator() {
    return (
        <AccountTabStack.Navigator>
            <AccountTabStack.Screen
                name="AccountTabScreen"
                component={AccountTabScreen}
                options={{ headerTitle: 'Account' }}
            />
        </AccountTabStack.Navigator>
    );
}
