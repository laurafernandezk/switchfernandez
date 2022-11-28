import { TextInput, View, Button } from "react-native";
import { styles } from "./styles"
import colors from "../../constants/colors";

const Input = ({ name, onHandleChange, onHandleSearch }) => {
    return (
        <View style={styles.inputcontainer}>
            <TextInput blurOnSubmit autoCapitaliza="none" autoCorrect={false} placeholder="Nombre" style={styles.input} value={name} onChangeText={onHandleChange} />
            <Button title="Search" color={colors.primary} onPress={onHandleSearch} />
        </View>
    )
}

export default Input 