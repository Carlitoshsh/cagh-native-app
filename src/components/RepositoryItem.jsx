import react from "react";
import { Text, View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const humanCount = (v) => {
  const count = Number(v);
  if (count > 1e6) {
    return `${Math.round(count / 1e6)}M`;
  }
  if (count > 1e3) {
    return `${Math.round(count / 1e3)}K`;
  }
  return count;
};

const RepositoryItem = ({ repo: props }) => (
  <View key={props.id} style={styles.card}>
    <StyledText style="big">{props.name}</StyledText>
    <Text>{props.language}</Text>
    <StyledText style="small">{humanCount(props.stars)}</StyledText>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    borderColor: "#CED0CE",
    borderWidth: 1,
    padding: 20,
  },
});

export default RepositoryItem;
