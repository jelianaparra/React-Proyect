import React, { useState } from "react";
import { SafeAreaView, ImageBackground, Button, Text, View, TextInput } from "react-native";
import * as estilos from './loginStyles';
import { Link } from 'react-router-dom';

const Login = () => {

  return (

    <View style = { estilos.default.vistaStyles.root }>

      <ImageBackground 
        source = {{ uri: 'https://i.pinimg.com/736x/04/ea/a9/04eaa9d3175f67a3942e9d91d3fa62b4.jpg' }} 
        resizeMode = "cover" 
        style = { estilos.default.vistaStyles.image }>

        <h1 style = { estilos.default.htmlStyles.h3 }>Inicio de sesión</h1>
        <Link to="/home">
        <Button 
            color = "Gray" 
            title = "Regresar" 
            style = { estilos.default.vistaStyles.button }></Button>
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
              placeholder = "Ingresa tú contraseña"
              keyboardType = "visible-password  "
            />
            <Link to="/tareas">
            <Button 
            color = "transparent" 
            title = "Ingresar" 
            style = { estilos.default.vistaStyles.button }></Button>
            </Link>
          </SafeAreaView>

        </View>

      </ImageBackground>
    </View>

  );
  
}

export default Login;