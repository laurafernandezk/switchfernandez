import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 80,
        paddingTop: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: colors.textWhite,
        fontSize: 25,
        fontFamily: fonts.bold
    }

})