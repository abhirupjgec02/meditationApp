import { View, Text } from "react-native";
import { COLORS, FONT, SIZES, AppStyles } from "../constants/theme";


const Welcome = ({ currUserDetails }) => {
    console.log("current Username in welcome : ", currUserDetails?.userName);
    return (
      <>
         <View>
            <View style={AppStyles.welcomeMessageContainer} testID="styles.container">
                <Text style={AppStyles.userName}>Hello {currUserDetails?.userName}!</Text>
                <Text style={AppStyles.welcomeMessage}>Find your perfect meditation</Text>
            </View>
        </View>
      </>
    );
  };

export default Welcome;
