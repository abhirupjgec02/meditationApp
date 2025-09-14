import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, SIZES, AppStyles } from "../constants/theme";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";
import Welcome from "../components/Welcome";
import PopularMeditation from "../components/PopularMeditation";
import DailyMeditation from "../components/DailyMeditation";  

const Home = () => {
    const router = useRouter();
    var { currentUserDetails } = useLocalSearchParams();
    currentUserDetails = JSON.parse(currentUserDetails);
    console.log("current Username in home : ", currentUserDetails?.userName);
    return (
     <>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <ScreenHeaderBtn currentUserDetails={JSON.stringify(currentUserDetails)} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              padding: 10,
            }}
            testID="screensDisplay"
          >
            <Welcome currUserDetails={currentUserDetails ? currentUserDetails : null} />
            <View style={{ marginBottom: 20 }}>
              <PopularMeditation/>
            </View>
            <View style={{ marginBottom: 20 }}>
              <DailyMeditation currUserDetails={null}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
     </>
    );
  };

  export default Home;