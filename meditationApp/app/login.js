import React, { useState } from "react";
import { View, SafeAreaView, Image, Alert, Text, TextInput, TouchableOpacity, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SHADOWS, AppStyles } from "../constants";

const Login = () => {
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [logInError, setLogInError] = useState("");

    const handleLogin = async () => {
        if (!userInput || !password) {
            setLogInError("Please fill in all fields.");
            return;
        }
        const userDetails = { userInput, password, token: "sample-token" };

        try {
            const detailsDatafromSignup = await AsyncStorage.getItem("userDetails");
            if (detailsDatafromSignup) {
                const parsedDetails = JSON.parse(detailsDatafromSignup);
                if ((userDetails.userInput === parsedDetails.email || userDetails.userInput === parsedDetails.userName) 
                    && userDetails.password === parsedDetails.password) {
                    console.log('User Logged in : ', userDetails.userInput);
                    router.push("/home");
                } else {
                    setLogInError("Incorrect user or password.");
                }
            } else {
                setLogInError("No user info found with these details.");
            }
        } catch (error) {
        console.error("Error accessing AsyncStorage", error);
        }
    };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
     <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
                <></>
          ),
          headerTitle: "",
        }}
      />
      <View style={{ padding: 20 }}>
        <View
            style={AppStyles.container}
            testID="imageIcon"
            >
            <Image
                source={icons.menu}
                style={AppStyles.logo}
            />
        </View>

        {/* Form Component */}
        <View style={{ marginTop: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <TextInput
              style={AppStyles.textInput}
              value={userInput}
              onChangeText={setUserInput}
              placeholder="Username / Email"
            />
            <TextInput
              style={AppStyles.textInput}
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
              placeholder="Password"
            />
          </View>
          {logInError ? <Text style={AppStyles.error}>{logInError}</Text> : null}
          <View style={AppStyles.rightAlignContainer}>
            <TouchableOpacity
                style={AppStyles.button}
                onPress={handleLogin}
            >
                <Text style={AppStyles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Pressable>
                <Text style={AppStyles.forgotText}>Forgot Password ?</Text>
            </Pressable>
          </View>
        </View>

        {/* Additional Options */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <Text style={AppStyles.textQuestions}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/signUp")}>
            <Text style={AppStyles.linkWords}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={async () => await AsyncStorage.clear()}>
            <Text style={AppStyles.linkWords}>Clear Async Storage</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;