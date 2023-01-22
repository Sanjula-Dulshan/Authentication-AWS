import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/core";
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const navigation = useNavigation();

  const onRegisterPressed = async (data) => {
    const { username } = data;
    try {
      navigation.navigate("ConfirmEmail", { username });
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onSignInFacebook = () => {
    console.warn("onSignInFacebookPressed");
  };

  const onSignInGoogle = () => {
    console.warn("onSignInGooglePressed");
  };

  const onSignInApple = () => {
    console.warn("onSignInApplePressed");
  };

  const onTermOfServicePressed = () => {
    console.warn("onTermOfServicePressed");
  };
  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Sign Up</Text>

        <CustomInput
          name="username"
          control={control}
          value={userName}
          setValue={setUserName}
          placeholder="Username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Username should be max 24 characters long",
            },
          }}
        />

        <CustomInput
          name="email"
          control={control}
          value={email}
          setValue={setEmail}
          placeholder="Email"
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />

        <CustomInput
          name="password"
          control={control}
          value={password}
          setValue={setPassword}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          value={confirmPassword}
          setValue={setConfirmPassword}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            required: "Repeat Password is required",
            validate: (value) => value === pwd || "Password do not match",
          }}
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />
        <Text style={styles.text}>
          By registering, you agree to our{" "}
          <Text style={styles.link} onPress={onTermOfServicePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <CustomButton
          text="Sign In with Facebook"
          onPress={handleSubmit(onSignInFacebook)}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={handleSubmit(onSignInGoogle)}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={handleSubmit(onSignInApple)}
          bgColor="#E3E3E3"
          fgColor="#363636"
        />
        <CustomButton
          text="Have an account? Sign In"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    marginVertical: "15%",
    fontSize: 40,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "grey",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default SignUpScreen;
