import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

const Input = (props) => {
  const [value, setValue] = useState(props.value ?? "");

  const img = "../assets/mail.png";

  return (
    <View style={[styles.box, props.style ?? {}]}>
      <View style={styles.label}>
        <Text style={styles.labelText}>{props.label}</Text>
      </View>

      <View style={styles.inputBox}>
        <Image source={props.img} style={styles.img} />
        <TextInput
          style={styles.input}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          secureTextEntry={props.password ?? false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.3)",
    width: "90%",
    height: 45,
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    marginTop: -10,
    backgroundColor: "#fff",
    alignSelf: "flex-start",
    marginLeft: 35,
    paddingLeft: 5,
    paddingRight: 5,
  },
  labelText: {
    color: "rgba(0,0,0,.3)",
  },
  inputBox: {
    flex: 1,
    flexDirection: "row",
  },
  img: {
    width: 23,
    height: 23,
    marginLeft: 10,
    marginTop: 5,
  },
  input: {
    width: "90%",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "transparent",
    marginTop: -8,
    paddingLeft: 10,
  },
});

export default Input;
