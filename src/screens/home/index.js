import { TouchableWithoutFeedback, View, Keyboard, Text, Image, Button} from "react-native";
import { styles } from "./styles";
import { Card, Input } from "../../components";
import { useState } from "react";
import { profiles } from "../../utils/profiles";
import colors from "../../constants/colors";


const Home = ({onStartSearch}) => {
    const [name, setName] = useState("")
    const [filterProfiles, setFilterProfiles] = useState([])
    const [view, setView] = useState(true)
    

    const onHandleChange = (text) => {
        setName(text)
    }

    const onHandleResults = () => {
        setFilterProfiles(profiles.filter(profile => profile.name.toLowerCase() === name.toLowerCase()))
        setName("")
        setView(!view)
    }

    const onHandleSearch = ()=>{
        onStartSearch()
        
    }


    const results = view ? profiles : filterProfiles

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.container}>
                <Input name={name} onHandleChange={onHandleChange} onHandleResults={onHandleResults} />
                {results.map(profile => (
                <Card>
                    <View style={styles.container}>
                        <Image style={styles.image} source={profile.image} />
                        <Text>{profile.name}</Text>
                        <View style={styles.buttonContainer}>
                            <Button title="Profile"
                                color={colors.primary}
                                onPress={()=>onHandleSearch((profile))} />
                        </View>
                    </View>
                </Card>))}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Home;