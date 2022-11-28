import { styles } from './styles';
import { ActivityIndicator, View } from 'react-native';
import Header from './components/header';
import { Home, Profile } from './screens';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import colors from './constants/colors';

export default function App() {

  const [loaded] = useFonts({
    "monserrat-regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "monserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf")
  })

  const [finallyProfile, setFinallyProfile] = useState({})

  const chooseProfile = (profile) => {
    setFinallyProfile(profile)
  }

  const goBack = () => {
    setFinallyProfile({})
  }

  let content = (Object.keys(finallyProfile).length === 0) ? <Home chooseProfile={chooseProfile} /> : <Profile profile={finallyProfile} goBack={goBack} />
  let title = (Object.keys(finallyProfile).length === 0) ? "Home" : "Profile"
 
  if(!loaded){
    return(<View style={styles.containerLoader}>
      <ActivityIndicator size="large" color={colors.primary}/>
    </View>)
  }
  return (
    <View style={styles.container}>
      <Header title={title} />
      {content}
    </View>
  );
}
