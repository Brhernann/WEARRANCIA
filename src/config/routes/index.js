import React from "react";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Coach from "../../container/coach";
import Login from "../../container/login"; // other stack
import Media from "../../container/media"; // we need more data
import Player from "../../container/player";
import Setting from "../../container/setting"; //inside profile
import Tinder from "../../container/tinder";
let type = false;

let Profile = type ? Player : Coach;

const TabNavigator = createBottomTabNavigator({
  Tinder,
  Profile
});

export default createAppContainer(TabNavigator);
