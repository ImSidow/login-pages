import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  Image,
  TouchableHighlight,
  Alert,
} from "react-native";

import Input from "./components/Input";

const App = () => {
  return (
    <SafeAreaView style={styles.box}>
      {/* top */}
      <View style={styles.top}>
        <Image
          source={require("./assets/ice-cream.png")}
          style={styles.top_img}
        />
        <Text style={styles.title}>WELCOME BACK</Text>
        <Text style={styles.subTitle}>Sweet ice cream</Text>
      </View>

      {/* middle */}
      <View style={{ paddingTop: 50 }}>
        <Input
          style={{ marginTop: 30 }}
          label="EMAIL"
          img={require("./assets/mail.png")}
          value="im.sidow@gmail.com"
        />

        <Input
          style={{ marginTop: 35 }}
          label="PASSWORD"
          img={require("./assets/lock.png")}
          value="im.sidow@gmail.com"
          password={true}
        />
      </View>

      {/* bottom */}
      <View style={{ paddingTop: 50 }}>
        <TouchableHighlight
          style={styles.button}
          onPress={() =>
            Alert.alert("Success", "You successfully logged in", [
              { text: "OK" },
            ])
          }
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>
        <Text style={styles.createText}>
          Don't have account?
          <Text style={{ color: "#013BB9" }}> create a new account</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  top: {
    paddingTop: 50,
  },
  top_img: {
    width: 90,
    height: 90,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "700",
    marginTop: 15,
    color: "#013BB9",
  },
  subTitle: {
    textAlign: "center",
    marginTop: 10,
    color: "rgba(0,0,0,.3)",
  },
  button: {
    width: "90%",
    height: 45,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    backgroundColor: "#013BB9",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 5,
    color: "#fff",
  },
  createText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: 20,
  },
});

export default App;
