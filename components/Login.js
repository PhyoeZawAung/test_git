import { Formik } from "formik";
import React from "react";
import {
  Alert,
  TextInput,
  View,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import * as Yup from "yup";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <Formik
        initialValues={{ email: "", password: "", reEnterPassword: "" }}
        validationSchema={Yup.object({
          email: Yup.string().email("Invalid Email").required("Enter Email"),
          password: Yup.string()
            .min(8, ({ min }) => `password must be ${min} character`)
            .required("Enter Password"),
          reEnterPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Password not match"
          ),
        })}
        onSubmit={(values, formikAction) => {
          setTimeout(() => {
            Alert.alert(JSON.stringify(values));
            formikAction.setSubmitting(false);
          }, 500);
        }}
      >
        {(props) => (
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              value={props.values.email}
              placeholder="Email Address"
              style={styles.inputBox}
            />
            {props.touched.email && props.errors.email ? (
              <Text style={styles.error}>{props.errors.email}</Text>
            ) : null}
            <TextInput
              style={styles.inputBox}
              placeholder="Enter Password"
              value={props.values.password}
              secureTextEntry={true}
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
            />
            {props.touched.password && props.errors.password ? (
              <Text style={styles.error}>{props.errors.password}</Text>
            ) : null}
            <TextInput
              style={styles.inputBox}
              placeholder="Enter Password Again"
              onBlur={props.handleBlur("reEnterPassword")}
              onChangeText={props.handleChange("reEnterPassword")}
              value={props.values.reEnterPassword}
              secureTextEntry={true}
            />
            {props.touched.reEnterPassword && props.errors.reEnterPassword ? (
              <Text style={styles.error}>{props.errors.reEnterPassword}</Text>
            ) : null}
            <View style={{ flexDirection: "row" }}>
              <Pressable onPress={props.handleSubmit} style={styles.submit}>
                <Text style={{ color: "#fff" }}>Submit</Text>
              </Pressable>
              <Pressable onPress={props.handleReset} style={styles.submit}>
                <Text style={{ color: "#fff" }}>Reset</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#2a63f4",
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 16,
  },
  inputContainer: {
    margin: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 30,
    elevation: 10,
  },
  inputBox: {
    width: "100%",
    padding: 5,
    marginVertical: 16,
    elevation: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  submit: {
    backgroundColor: "#2a63f4",
    padding: 5,
    borderRadius: 8,
    elevation: 10,
    marginHorizontal: 16,
    width: 80,
    alignItems: "center",
  },
  error: {
    color: "#f00",
  },
});
export default LoginScreen;
