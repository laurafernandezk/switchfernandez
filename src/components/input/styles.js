import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles= StyleSheet.create({
    inputcontainer:{
        flexDirection:"row",
        justifyContent: "space-between",
        margin: 20

    },
    input:{
        width:"70%",
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,

    }
    
})