import { StyleSheet } from "react-native";

const COLORS = {
    primary: "#312651",
    secondary: "#444262",
    tertiary: "#FF7754",
  
    gray: "#83829A",
    gray2: "#C1C0C8",
  
    white: "#F3F4F8",
    lightWhite: "#FAFAFC",
  };
  
  const FONT = {
    regular: "DMRegular",
    medium: "DMMedium",
    bold: "DMBold",
  };
  
  const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
  };
  
  const SHADOWS = {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  };

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 120, // space from top of screen
    backgroundColor: '#F9F9F9',
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 10,
  },
  textInput: {
    borderColor: 'transparent',
    backgroundColor: '#F3F9D0',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginTop: 5,
  },
  button: {
    backgroundColor: '#7DECD6',
    padding: 4,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    width: '35%',
  },
  buttonText: { 
    color: "#2451E8",
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 4,
  },
  logIn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  rightAlignContainer: {
    alignItems: 'flex-end', // Aligns children (button + link) to the right
  },
  forgotText: {
    color: '#3827EF',
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.6,
    paddingTop: 10,
  },
  linkWords: {
    color: '#2F5FFF',
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  textQuestions: {
    color: '#000000',
    fontSize: 18,
  },
});
  
  export { COLORS, FONT, SIZES, SHADOWS, AppStyles };
  