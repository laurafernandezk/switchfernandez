import colors from "../../constants/colors";
import { View, Text, Image, ScrollView, Button } from "react-native";
import { styles } from "./styles"

const Profile = ({ profile, goBack }) => {

     const onHandleProfile = () => {
          goBack()
     }

     return (<ScrollView>
          <View style={styles.container}>
               <View style={styles.contentContainer}>
                    <View style={styles.textContainer}>
                         <Text style={styles.textTitle}>{profile.name}</Text>
                         <Text style={styles.text}> Edad: {profile.age}</Text>
                    </View>
                    <Image style={styles.image} source={profile.image} />
                    <View style={styles.textContainer}>
                         <Text style={styles.text}>{profile.description}</Text>
                    </View>
               </View>
               <View style={styles.buttonContainer}>
                    <Button title="Go Back" onPress={onHandleProfile} color={colors.primary} />
               </View>
          </View>
     </ScrollView>)

}
export default Profile;