import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        height:80,
        paddingTop:10,
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        color: colors.textWhite,
        fontWeight:"bold",
        fontSize:25
    }

})