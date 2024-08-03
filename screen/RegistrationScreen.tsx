import React from 'react'
import {Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>- Bienvenido al Registro -</Text>

      <Image 
        source={{ uri: 'https://img.freepik.com/free-vector/feminine-instagram-highlight-icon-woman-character-sticker-earthy-illustration-vector_53876-154304.jpg' }} 
        style={styles.image} 
      />

      <Text style={styles.subTitle}>Ingresa tus Datos</Text>
      <TextInput
      style={styles.input}
      placeholder='Nombre'
      />

      <TextInput
      style={styles.input}
      placeholder='Apellido'
      />

      <TextInput
      style={styles.input}
      placeholder='Nombre de Usuario'
      keyboardType="email-address"
      />

      <TextInput
      style={styles.input}
      placeholder='Correo electrónico'
      keyboardType="email-address"
      autoCapitalize='none'
      autoComplete='email'
      />

      <TextInput
      style={styles.input}
      placeholder='Número Telefonico'
      keyboardType="number-pad"
      autoCapitalize='none'
      />

      <TextInput
      style={styles.input}
      placeholder='Contraseña'
      autoCapitalize='none'
      />
      
      <View style={styles.button}> 
        <Button 
          title="Aceptar Registro" 
          color="#ff69b4" 
        /> 
        </View> 

    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    padding:16,
    justifyContent:'center',
    backgroundColor:'#defcff',
  },

  title:{
    textAlign: 'center',
    fontSize: 30,
    color:'#6b1fab',
    fontWeight:'bold',
    marginBottom: 20,
  },

  image: {
    width: 180,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },

  subTitle:{
    textAlign: 'left',
    fontSize: 24,
    color:'#1f55ab',
    marginBottom: 20,
    marginLeft:25
  },

  input: {
    height: 40,
    borderColor: '#a0bab8',
    marginBottom: 12,
    marginHorizontal:25,
    borderWidth: 1,
    borderStyle:'dashed',
    padding: 10,
    backgroundColor:'#f1fffb'    
  },

  button: { 
    width: '100%', 
    alignItems: 'center', 
  }, 

})