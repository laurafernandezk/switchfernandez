import { styles } from './styles';
import {  View } from 'react-native';
import Header from './components/header';
import {Home, Profile} from './screens';
import { useState } from 'react';

export default function App() {

  const [lookProfile, setLookProfile] = useState(null)


  const onStartSearch = (profile) => { 
    setLookProfile(profile)
    
    
}
let content = <Home onStartSearch={onStartSearch} />
if(lookProfile){
  content = <Profile profile={lookProfile}/>
}
  return (
    <View style={styles.container}>
      <Header title="Home"/>
      {content}
    </View>
  );
}

