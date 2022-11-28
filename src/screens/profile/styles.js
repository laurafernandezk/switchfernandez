import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background
    },
    contentContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
        backgroundColor: colors.backgroundCard,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: "contain"
    },
    textContainer: {
        padding: 30,
    },
    textTitle: {
        fontSize: 20,
        marginVertical: 7,
        fontFamily: fonts.bold
    },
    text: {
        fontSize: 16,
        fontFamily: fonts.regular

    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 20
    }


})