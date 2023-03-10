import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSubmitPressed = async (data) => {
    try {
      //await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      navigation.navigate("Home");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          placeholder="Confirmation code"
          name="code"
          control={control}
          value={code}
          setValue={setCode}
          rules={{ required: "Code is required" }}
        />

        <CustomInput
          placeholder="Enter your new password"
          name="password"
          control={control}
          secureTextEntry
          value={newPassword}
          setValue={setNewPassword}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <View style={{ marginTop: "10%", width: "100%" }}>
          <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
        </View>
        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="FOURTH"
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
    fontSize: 35,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default NewPasswordScreen;
