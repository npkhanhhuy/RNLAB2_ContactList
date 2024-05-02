import React from "react";
import {View, Text} from "react-native"
import Contacts from "./components/Contacts";
import Profile from "./screens/Profile";
import Favorites from "./components/Favorites";
import User from "./components/User";
import Options from "./components/Options";
import Store from "./components/Store";
import { Provider } from 'react-redux';
import DrawerNavigator from "./components/Routes";

const App=() =>{
  return (
    <Provider store={Store}>
      <DrawerNavigator/>
    </Provider>
  );
}
export default App
