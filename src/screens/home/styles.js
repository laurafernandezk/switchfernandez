import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import fonts from "../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background

    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom:20
    },
    text:{
        fontSize:20,
        marginTop: 20,
        fontFamily: fonts.bold
    },
    image: {
        width: 200,
        height: 300,
        resizeMode: "cover"

    }


})