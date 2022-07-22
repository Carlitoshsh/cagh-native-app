import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import repositories from "../data/repositories";
import RepositoryItem from "./RepositoryItem";

const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      style={styles.container}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item: repo }) => <RepositoryItem repo={repo} />}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
});

export default RepositoryList;
