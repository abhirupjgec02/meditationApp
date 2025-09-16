import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./MeditationTopDisplay.style";
import { icons } from "../../constants";
import { useRouter, useNavigation } from "expo-router";

const MeditationTopDisplay = ({ meditationImage, meditationTitle, duration, target }) => {
    const router = useRouter();
    const navigation = useNavigation();

    const handleGoBack = () => {
        if (navigation.canGoBack()) {
            router.back();
        } else {
            console.log("Can't go back. Redirecting to home.");
            router.replace("/home");  // fallback route
        }
    }

    return (
        <View>
            <TouchableOpacity onPress={() => handleGoBack()}>
                <Image
                    source={icons.left}
                    resizeMode="cover"
                    style={styles.backIcon}
                />
            </TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.logoBox}>
                <Image
                    source={{
                        uri: meditationImage,
                    }}
                    resizeMode="cover"
                    style={styles.logoImage}
                />
                </View>

                <View style={styles.meditationTitleBox}>
                <Text style={styles.meditationTitle}>{meditationTitle}</Text>
                </View>

                <View style={styles.meditationInfoBox}>
                <Text style={styles.meditationName}>{target} / </Text>
                <View style={styles.durationBox}>
                    <Image
                        source={icons.clock}
                        resizeMode="cover"
                        style={styles.durationImage}
                    />

                    <Text style={styles.durationName}>{duration}</Text>
                </View>
                </View>
            </View>
        </View>
    );
}

export default MeditationTopDisplay;
