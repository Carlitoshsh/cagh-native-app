import react from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedbackComponent,
} from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";
import { TouchableWithoutFeedback } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: 20,
    marginBottom: 10,
    backgroundColor: theme.colors.primary,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 20,
    fontWeight: "bold",
  },
  active: {
    fontWeight: "bold",
    color: theme.colors.textPrimary,
  },
  default: {
    color: theme.colors.textPrimary,
  },
  buttonLink: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.colors.textPrimary,
  },
  navigation: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <TouchableWithoutFeedback>
      <View style={styles.buttonLink}>
        <Link to={to}>
          <Text style={isActive ? styles.active : styles.default}>
            {children}
          </Text>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Repositories</Text>
      <View style={styles.navigation}>
        <AppBarTab to="/">Home</AppBarTab>
        <AppBarTab to="/repository/2">Home</AppBarTab>
      </View>
    </View>
  );
};

export default AppBar;
