import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Routes, Route } from "react-router-native";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <View style={styles.main}>
        <Routes>
          <Route
            exact
            path="/"
            element={<RepositoryList></RepositoryList>}
          ></Route>
          <Route
            path="/repository/:id"
            element={<Text>Working on it</Text>}
          ></Route>
        </Routes>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
  },
  main: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default Main;
