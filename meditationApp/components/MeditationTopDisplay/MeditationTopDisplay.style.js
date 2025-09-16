import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.large,
    shadowColor: COLORS.gray,
  },
  logoImage: {
    width: "100%",
    borderRadius: SIZES.large,
    height: "100%",
  },
  meditationTitleBox: {
    marginTop: SIZES.small,
  },
  meditationTitle: {
    fontSize: 22,
    color: COLORS.primary,
    fontWeight : "bold",
    textAlign: "center",
  },
  meditationInfoBox: {
    marginTop: SIZES.small / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  meditationName: {
    fontSize: SIZES.medium + 2,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  durationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  durationImage: {
    width: 18,
    height: 18,
    position: "relative",
  },
  durationName: {
    fontSize: SIZES.medium + 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: 2,
  },
  backIcon: {
    width: 25,
    height: 25,
  },
});

export default styles;
