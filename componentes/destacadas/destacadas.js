import React, { useState } from "react";
import { SafeAreaView, ImageBackground, Text, View, TextInput } from "react-native";
import * as estilos from '../destacadas/tareasStyles';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Button, check, Label, Input} from 'reactstrap';
import { MaterialIcons } from '@expo/vector-icons';

const data=[
  {Id:1, Titulo:"Pago Dominio", Descripcion:"Pago mensual del dominio", fecha:"2021-05-06", hora:"21:30:22", Importancia:"Alta", Destacado:"Si"},
  {Id:2, Titulo:"Mantenimiento", Descripcion:"Mantenimiento a software de prestamos", fecha:"2021-03-06", hora:"23:30:00", Importancia:"Media", Destacado:"Si"},
  {Id:3, Titulo:"Mensual", Descripcion:"Facturacion electronica farmacia Economicas", fecha:"2021-04-21", hora:"12:38:22", Importancia:"Baja", Destacado:"Si"}
];

class destacadas extends React.Component{
  state={
    data:data
  }
  render(){
    return (

      <View style = { estilos.default.vistaStyles.root }>
   
        <ImageBackground 
          source = {{ uri: 'https://i.pinimg.com/736x/04/ea/a9/04eaa9d3175f67a3942e9d91d3fa62b4.jpg' }} 
          resizeMode = "cover" 
          style = { estilos.default.vistaStyles.image }> 
  
          <h1 style = { estilos.default.htmlStyles.h3 }>Tareas Destacadas</h1>
          <input placeholder="Buscar" onChangeText={text => this.searchFilterFunction(text)}/><hr></hr>
          <div>
            <Button color = "primary" onClick={()=>this.mostrarModal()}>Crear nueva Tarea</Button>  {" "}
            <Button color = "primary" style={{position: 'fixed',  right: 0}}>Cerrar Sesión</Button>
          </div>
            <hr></hr>
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>titulo</th>
                  <th>Descripcion</th>
                  <th>fecha</th>
                  <th>hora</th>
                  <th>importancia</th>
                  <th>Destacado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((elemento)=>(
                  <tr>
                    <td>{elemento.Id}</td>
                    <td>{elemento.Titulo}</td>
                    <td>{elemento.Descripcion}</td>
                    <td>{elemento.fecha}</td>
                    <td>{elemento.hora}</td>
                    {/* para tareas verde: "https://image.flaticon.com/icons/png/24/1828/1828518.png"*/}
                    {/* para tareas amarillas: "https://image.flaticon.com/icons/png/24/2761/2761896.png"*/}
                    {/* para tareas rojas: "https://image.flaticon.com/icons/png/24/2052/2052716.png"*/}
                    <td><Button color="transparent" onClick={()=>this.mostrarModalEditar(elemento)}><img src="https://image.flaticon.com/icons/png/24/1828/1828518.png"/></Button></td>
                    {/* Para no destacado: "https://image.flaticon.com/icons/png/24/535/535285.png" */}
                    <td><Button color="transparent" onClick={()=>this.mostrarModalEditar(elemento)}><img src="https://image.flaticon.com/icons/png/24/833/833558.png"/></Button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Link to="/tareas/destacadas">
                <Button 
                color = "transparent"><h3 style = { estilos.default.htmlStyles.h3 }>Cerrar Sesión</h3></Button><hr></hr>
               
            </Link>


          <View style = { estilos.default.vistaStyles.view }>  
  
  <div id= "crud">
  </div>       
          </View>
        </ImageBackground>
      </View>
  
    );
  }
}



export default destacadas;