import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import * as Font from "expo-font";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./images/photobg.jpg")}
      >
        <View style={styles.form}>
          <Text style={styles.text}>Реєстрація</Text>
          <View style={{ marginTop: 32 }}>
            <TextInput
              style={styles.input}
              // textAlign={"left"}
              placeholder="Логін"
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              // textAlign={"center"}
              placeholder="Адреса електронної пошти"
              keyboardType="email-address"
            />
          </View>
          <View style={{ marginTop: 16 }}>
            <TextInput
              style={styles.input}
              // textAlign={"center"}
              placeholder="Пароль"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.button}>
            <Text style={styles.btnTitle}>Зареєструватися</Text>
          </TouchableOpacity>
          {/* <Button
            // onPress={onPressLearnMore}
            title="Зареєструватись"
            color="#FF6C00"
           
          /> */}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8ff",
    // alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },
  form: {
    marginHorizontal: 40,
    padding: 16,
    height: 549,
    // width: 375,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 50,
    // width:353,
    padding: 16,
    borderRadius: 6,
    marginHorizontal: 10,
    color: "#000000",
    backgroundColor: "#E8E8E8",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FF6C00",
    height: 50,
    marginTop: 43,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

{
  /* <View style={styles.innerBox}>
        <Text style={styles.text}>Home 1 done</Text>
      </View> */
}

{
  /* <StatusBar style="auto" /> */
}

