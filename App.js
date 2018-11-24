/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import Tabs from "./src/config/routes";

type Props = {};

class App extends Component<Props> {
  render() {
    //si el culuao esta loggeado
    return <Tabs />;

    //si el ql no esta loggeao

    // return <log/>>
  }
}

export default App;
