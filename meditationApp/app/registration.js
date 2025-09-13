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
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { COLORS, icons, SHADOWS, AppStyles } from "../constants";

const SignUp = () => {
    const { userName, email, password } = useLocalSearchParams();
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [country, setCountry] = useState("");
    const router = useRouter();
    const [regError, setRegError] = useState("");

    const handleRegistration = async () => {
        if (!name || !sex || !age || !country) {
            setRegError("Please fill in all fields");
            return;
        }

        try {
            const userData = {
                userName: userName,
                email: email,
                password: password,
                name: name,
                sex: sex,
                age: age,
                country: country
            };

        await AsyncStorage.setItem("userDetails", JSON.stringify(userData));
        Alert.alert("Registration successful");
        router.push("/login");
        } catch (error) {
            setRegError("Registration failed");
            console.error("Registration error:", error);
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
            <View style={{ padding: 20 }} testID="registrationContainer">
                <View
                    style={AppStyles.container}
                    testID="imageIcon"
                    >
                    <Image
                        source={icons.menu}
                        style={AppStyles.logo}
                    />
                </View>
                <View style={{ marginTop: 10 }} testID="formData">
                    <View style={{ marginBottom: 10 }} testID="name">
                        <TextInput
                            style={AppStyles.textInput}
                            value={name}
                            placeholder="Name"
                            onChangeText={setName}
                        />
                    </View>
                    <View style={{ marginBottom: 10 }} testID="name">
                        <TextInput
                            style={AppStyles.textInput}
                            value={sex}
                            placeholder="Sex"
                            onChangeText={setSex}
                        />
                    </View>
                    <View style={{ marginBottom: 10 }} testID="name">
                        <TextInput
                            style={AppStyles.textInput}
                            value={age}
                            placeholder="Age"
                            onChangeText={setAge}
                        />
                    </View>
                    <View style={{ marginBottom: 10 }} testID="name">
                        <TextInput
                            style={AppStyles.textInput}
                            value={country}
                            placeholder="Country"
                            onChangeText={setCountry}
                        />
                    </View>
                    {regError ? <Text style={AppStyles.error}>{regError}</Text> : null}
                    <View style={AppStyles.rightAlignContainer}>
                        <TouchableOpacity
                            style={AppStyles.button}
                            onPress={handleRegistration}
                        >
                            <Text style={AppStyles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;