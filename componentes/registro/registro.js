import React, { useState } from "react";
import { SafeAreaView, ImageBackground, Button, Text, View, TextInput } from "react-native";
import * as estilos from './registroStyles';
import { Link } from 'react-router-dom';


const Registro = () => {

  return (

    <View style = { estilos.default.vistaStyles.root }>

      <ImageBackground 
        source = {{ uri: 'https://i.pinimg.com/736x/04/ea/a9/04eaa9d3175f67a3942e9d91d3fa62b4.jpg' }} 
        resizeMode = "cover" 
        style = { estilos.default.vistaStyles.image }>

        <h1 style = { estilos.default.htmlStyles.h3 }>Registro</h1>
        <Link to="/home">
        <Button 
            color = "Gray" 
            title = "Regresar" 
            style = { estilos.default.vistaStyles.button } ></Button>
            </Link>
        <View style = { estilos.default.vistaStyles.view }>
                    
          <SafeAreaView style = { estilos.default.htmlStyles.form }>

             <TextInput
              style = { estilos.default.vistaStyles.input }
              placeholder = "Correo electrónico"
              keyboardType = "email-address"
            />
              <TextInput
              style = {estilos.default.vistaStyles.input}
              placeholder = "Nombre y Apellido"
              keyboardType = "text"
            />
             <TextInput
              style = {estilos.default.vistaStyles.input}
              placeholder = "Ingresa tú contraseña"
              keyboardType = "visible-password  "
            />

             <TextInput
              style = {estilos.default.vistaStyles.input}
              placeholder = "Confirma tú contraseña"
              keyboardType = "visible-password  "
            />


            <Button 
            color = "transparent" 
            title = "Registrarse" 
            style = { estilos.default.vistaStyles.button }></Button>

          </SafeAreaView>

        </View>

      </ImageBackground>
    </View>

  );
  
}

export default Registro;