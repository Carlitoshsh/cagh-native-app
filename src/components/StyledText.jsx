import react from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.font.size,
    color: theme.colors.primary,
    fontFamily: theme.font.main,
  },
  bold: {
    fontWeight: theme.font.weigth.bold,
  },
  small: {
    fontSize: theme.font.size.small,
  },
  big: {
    fontSize: theme.font.size.big,
  },
});

export default function StyledText({ children, style, ...props }) {
  const textStyles = [styles.text, styles[style]];
  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
}
