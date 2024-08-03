import React from 'react'
import { RegistrationScreen } from './screen/RegistrationScreen';
import { SafeAreaView } from 'react-native';
import Inicio from './screen/LoginScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Inicio/>
      {/*<RegistrationScreen/>*/}
    </SafeAreaView>
    
  )
}

export default App;