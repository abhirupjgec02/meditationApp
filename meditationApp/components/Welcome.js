import { View, Text } from "react-native";
import { COLORS, FONT, SIZES, AppStyles } from "../constants/theme";


const Welcome = ({ currUserDetails, isDarkMode, useCaption }) => {
    console.log("current Username in welcome : ", currUserDetails?.userName);
    return (
      <>
         <View>
            <View style={AppStyles.welcomeMessageContainer} testID="styles.container">
                <Text style={AppStyles.userName}>Hello {currUserDetails?.userName}!</Text>
                { useCaption ? <Text style={AppStyles.welcomeMessage}>Find your perfect meditation</Text> : null }
            </View>
        </View>
      </>
    );
  };

export default Welcome;
