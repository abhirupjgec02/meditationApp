import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Alert,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, SHADOWS, AppStyles } from "../constants";
import { delay } from "../utils/delay";

const SignUp = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();
    const [signUpError, setSignUpError] = useState("");

    const handleConfirmPassword = (value) => {
        setConfirmPassword(value);

        if (password !== value) {
            setSignUpError("Passwords do not match!!");
        } else {
            setSignUpError("");
        }
    }

    const pushToRegistration = async (userName, email, password) => {
        router.push({
            pathname: '/registration',
            params: {
                userName,
                email,
                password,
            },
        });
    }

    const handleNext = async () => {
        if (!userName || !email || !password) {
            setSignUpError("Please fill in all fields.");
            return;
        }

        var existingUserDetails = await AsyncStorage.getItem("userDetails");
        if (existingUserDetails) {
            existingUserDetails = JSON.parse(existingUserDetails);
            // Check if the user is already registered
            if (existingUserDetails.email === email) {
                if(existingUserDetails.name){
                    setSignUpError("User already exists. Please log in instead.");
                    await delay(2000);
                    router.push("/login");
                } else {
                    setSignUpError("User already exists. Please complete your registration.");
                    await delay(2000);
                    pushToRegistration(userName, email, password);
                }
            }
        } else {
            const userDetails = { userName, email, password, token: "sample-token" };
            console.log("User trying to sign up: ", userDetails);
            pushToRegistration(userName, email, password);
        }
    };

    return (
            <>
                <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, }}>
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
                    <View style={{ padding: 20 }} testID="signupContainer">
                        <View
                            style={AppStyles.container}
                            testID="imageIcon"
                            >
                            <Image
                                source={icons.menu}
                                style={AppStyles.logo}
                            />
                        </View>
                        <View style={{ marginTop: 30 }} testID="formData">
                            <View style={{ marginBottom: 10 }} testID="userName">
                                <TextInput
                                    style={AppStyles.textInput}
                                    value={userName}
                                    onChangeText={setUserName}
                                    placeholder="UserName"
                                />
                            </View>
                            <View style={{ marginBottom: 10 }} testID="email">
                                <TextInput
                                    style={AppStyles.textInput}
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="Email"
                                />
                            </View>
                            <View style={{ marginBottom: 10 }} testID="password">
                                <TextInput
                                    style={AppStyles.textInput}
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={true}
                                    placeholder="Password"
                                />
                            </View>
                            <View style={{ marginBottom: 10 }} testID="confirmPassword">
                                <TextInput
                                    style={AppStyles.textInput}
                                    value={confirmPassword}
                                    onChangeText={handleConfirmPassword}
                                    secureTextEntry={true}
                                    placeholder="Confirm Password"
                                />
                                {signUpError ? <Text style={AppStyles.error}>{signUpError}</Text> : null}
                            </View>
                            <View style={AppStyles.rightAlignContainer}>
                                <TouchableOpacity
                                    style={AppStyles.button}
                                    onPress={handleNext}
                                    testID="handleNext"
                                >
                                    <Text style={AppStyles.buttonText}>Next</Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={AppStyles.logIn}
                                testID="textData"
                            >
                                <Text style={AppStyles.textQuestions}>Already have an account?</Text>
                                <TouchableOpacity onPress={() => router.push("/login")}>
                                    <Text style={AppStyles.linkWords}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={async () => await AsyncStorage.clear()}>
                        <Text style={AppStyles.linkWords}>Clear Async Storage</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </>
        )
}

export default SignUp;