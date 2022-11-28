import { TouchableWithoutFeedback, View, Keyboard, Text, Image, Button, ScrollView } from "react-native";
import { styles } from "./styles";
import { Card, Input } from "../../components";
import { useState } from "react";
import { profiles } from "../../utils/profiles";
import colors from "../../constants/colors";

const Home = ({ chooseProfile }) => {
    const [name, setName] = useState("")
    const [filterProfiles, setFilterProfiles] = useState(profiles)
    const [selectProfile, setSelectProfile] = useState({})

    const onHandleChange = (name) => {
        setName(name)
    }
    const onHandleSearch = () => {
        if (name === "" || name === null || name === undefined) {
            setFilterProfiles(profiles)
            alert("el campo no puede estar vacio")

        } else {
            const filtrado = profiles.filter(profile => profile.name.toLowerCase() === name.toLowerCase())
            if (filtrado.length >= 1) {
                setFilterProfiles(filtrado)
                setName("")
            }
            else {
                alert("no hay coincidencias")
                setName("")
            }
        }
    }
    const onHandleProfile = (profile) => {
        setSelectProfile(profile)
        chooseProfile(selectProfile)
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.container}>
                <Input name={name} onHandleChange={onHandleChange} onHandleSearch={onHandleSearch} />
                <ScrollView>
                    {filterProfiles.map(profile => (
                        <Card key={profile.id}>
                            <Text style={styles.text}>{profile.name}</Text>
                            <Image style={styles.image} source={profile.image} />
                            <View style={styles.buttonContainer}>
                                <Button title="Profile"
                                    color={colors.primary}
                                    onPress={ ()=>onHandleProfile(profile)} />
                            </View>
                        </Card>))}
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Home