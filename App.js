// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { StyleSheet, Text, View ,FlatList } from 'react-native';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { RestaurantScreen } from "./src/screens/RestaurantScreen";

// import { Categories } from './src/components/Categories';
// import { CategoryItem } from './src/components/CategoryItem';
// import { Header } from './src/components/Header';
// import { Restaurants } from './src/components/Restaurants';
// import { Search } from './src/components/Search';


// export default function App() {
//   return (
//     <></>
//   );
// }

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: '#fff',
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
// });


const navigator = createStackNavigator({
  Home : HomeScreen,
  Restaurant : RestaurantScreen
}, {
  initialRouteName: "Home",
  defaultNavigationOptions:{
    title:"Business Search"
  }
})

export default createAppContainer(navigator)