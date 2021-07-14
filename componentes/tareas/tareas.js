import React, { useState } from "react";
import { SafeAreaView, ImageBackground, Button, Text, View, TextInput } from "react-native";
import * as estilos from './tareasStyles';
import { Link } from 'react-router-dom';


const Tareas = () => {

  return (

    <View style = { estilos.default.vistaStyles.root }>

      <ImageBackground 
        source = {{ uri: 'https://i.pinimg.com/736x/04/ea/a9/04eaa9d3175f67a3942e9d91d3fa62b4.jpg' }} 
        resizeMode = "cover" 
        style = { estilos.default.vistaStyles.image }>

        <h1 style = { estilos.default.htmlStyles.h3 }>Mis Tareas </h1>

        <View style = { estilos.default.vistaStyles.view }>
        <input placeholder="Buscar" onChangeText={text => this.searchFilterFunction(text)}/>    
<div id= "crud">
<Button 
color = "transparent" 
title = "Crear nueva Tarea" 
style = { estilos.default.vistaStyles.button }></Button> 
 <Button 
color = "transparent" 
title = "Editar Tarea" 
style = { estilos.default.vistaStyles.button }></Button> 
<Button 
color = "transparent" 
title = "Eliminar Tarea " 
style = { estilos.default.vistaStyles.button }></Button> 
<Button 
color = "transparent" 
title = "Actualizar Tarea" 
style = { estilos.default.vistaStyles.button }></Button> 
</div>

<div>
  <input ></input>
  </div>        

        </View>

      </ImageBackground>
    </View>

  );
  
}

export default Tareas;