import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background

    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 200,
        height: 200,
        objectFit: "cover"

    }


})