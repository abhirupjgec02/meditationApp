import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.small,
    marginBottom: SIZES.small / 2,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.xLarge,
    backgroundColor: name === activeTab ? "#ACEAE1" : "#F3F4F8",
    borderRadius: SIZES.medium,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: "DMMedium",
    fontWeight: "bold",
    fontSize: SIZES.medium,
    color: name === activeTab ? "#000b09ff" : "#AAA9B8",
  }),
});

export default styles;
