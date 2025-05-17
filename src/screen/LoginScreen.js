import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Header from "../components/Header";

const mockUserData = [{ email: "test@example.com", password: "1234" }];

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = mockUserData.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      Alert.alert("Login Successful", `Welcome, ${email}!`);
      navigation.navigate("DrawerNavigator");
    } else {
      Alert.alert("Login Failed", "Invalid email or password.");
    }
  };

  return (
    <View style={styles.container}>
      <Header title="BUSWAY" />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
      >
        Forgot Password ?
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.otpButton}  
        onPress={() => navigation.navigate("OTPMobileNoScreen")}>
        <Text style={styles.otpButtonText}>Login with OTP</Text>
      </TouchableOpacity>

      <View style={styles.Footercontainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={styles.text}>
            Don't have an account? <Text style={styles.link}>SIGN UP</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#ffc107",
    padding: 10,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    marginVertical: 17,
  },
  buttonText: { color: "white", fontWeight: "bold" },
  otpButton: {
    borderWidth: 1,
    borderColor: "#FFCB20",
    padding: 10,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    marginBottom: 10,
  },
  otpButtonText: { color: "#FFCB20", fontWeight: "bold" },

  text: {
    color: "#6c757d",
  },
  link: {
    color: "#ffc107",
    fontWeight: "bold",
  },
  Footercontainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "center",
    textAlign: "center",
  },
  forgotPassword: {
    textAlign: "right",
    color: "#1A1965",
    fontSize: 13,
    marginLeft: 266,
    marginTop: -11,
  },
});
