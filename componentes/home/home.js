import React, { useState } from "react";
import { ImageBackground, Button, Text, View } from "react-native";
import * as estilos from './homeStyles';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    
    <View style = { estilos.default.vistaStyles.root }>
      
      <ImageBackground 
        source = {{ uri: 'https://i.pinimg.com/736x/04/ea/a9/04eaa9d3175f67a3942e9d91d3fa62b4.jpg' }} 
        resizeMode = "cover" 
        style = { estilos.default.vistaStyles.image }>

        <h1 style = { estilos.default.htmlStyles.h3 }>Bienvenid@ !</h1>
  
        <View style = { estilos.default.vistaStyles.view }>
          
          <Link to="/login">
            <Button 
              color = "transparent" 
              title = "Iniciar sesión" 
              style = { estilos.default.vistaStyles.button }></Button>
          </Link>
          
          <Link to="/registro">
            <Button 
              color = "transparent" 
              title = "Regístrate" 
              style = { estilos.default.vistaStyles.button }></Button>
          </Link>

        </View>

      </ImageBackground>
    </View>

  );
  
}

export default Home;