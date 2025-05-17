import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📍 Contact Us</Text>

      <View style={styles.contactCard}>
        <Text style={styles.info}>Email:<Text style={styles.bold}> support@busroutes.com</Text></Text>
        <Text style={styles.info}>Phone:<Text style={styles.bold}> +91 12345 48210</Text></Text>
        <Text style={styles.info}>Address:<Text style={styles.bold}> Bus Stand, Sector 17, Bhuna</Text></Text>
      </View>

      <TextInput style={styles.input} placeholder="Your Name" onChangeText={(text) => handleChange("name", text)} />
      <TextInput style={styles.input} placeholder="Your Email" keyboardType="email-address" onChangeText={(text) => handleChange("email", text)} />
      <TextInput style={styles.input} placeholder="Subject" onChangeText={(text) => handleChange("subject", text)} />
      <TextInput style={styles.textArea} placeholder="Your Message" multiline numberOfLines={4} onChangeText={(text) => handleChange("message", text)} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>📩 Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 30,
  },
  contactCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
    marginBottom: 20,
  },
  info: {
    fontSize: 15,
    marginBottom: 8,
    fontWeight: "500",


  },
  bold: {
    fontWeight: "300",
    fontSize: 13,


  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  textArea: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#0056b3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
