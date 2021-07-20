import React, { useState } from "react";
import { SafeAreaView, ImageBackground, Text, View, TextInput, Image} from "react-native";
import * as estilos from './tareasStyles';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter, Button, check, Label, Input} from 'reactstrap';
import { MaterialIcons } from '@expo/vector-icons';
const data=[
  {Id:1, Titulo:"Pago", Descripcion:"Pago mensual de la renta del telf", fecha:"2021-05-06", hora:"21:30:22", Importancia:"Alta", Destacado:"Si"},
  {Id:2, Titulo:"Mantenimiento", Descripcion:"Mantenimiento a la aspiradora", fecha:"2021-03-06", hora:"23:30:00", Importancia:"Media", Destacado:"Si"},
  {Id:3, Titulo:"farmacia", Descripcion:"Comprar mascarilla", fecha:"2021-04-21", hora:"12:38:22", Importancia:"Baja", Destacado:"Si"},
  {Id:4, Titulo:"no se que mas", Descripcion:"algo ahi ", fecha:"2021-05-16", hora:"21:10:42", Importancia:"Alta", Destacado:"No"},
  {Id:5, Titulo:"prueba prueba", Descripcion:"Mantenimiento en pagina ", fecha:"2021-08-01", hora:"08:30:54", Importancia:"media", Destacado:"No"}
];

class Tareas extends React.Component{
  state={
    data:data,
    form:{
      Id:'',
      Titulo:'',
      Descripción:'',
      Importancia:''
    },
    modalInsertar: false,
    modalEditar: false
  }
  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]:e.target.value,
      }
    });
  }
  mostrarModal=()=>{
    this.setState({modalInsertar: true});
  }
  ocultarModal=()=>{
    this.setState({modalInsertar: false});
  }
  mostrarModalEditar=(tarea_detalles)=>{
    this.setState({modalEditar: true, form:tarea_detalles});
  }
  ocultarModalEditar=()=>{
    this.setState({modalEditar: false});
  }
  eliminar=(dato)=>{
    var opcion=window.confirm("Se eliminara la tarea "+dato.Id);
    if(opcion){
      //eliminar mediante Id
    }
  }
  render(){
    return (

      <View style = { estilos.default.vistaStyles.root }>
   
        <ImageBackground 
          source = {{ uri: 'https://i.pinimg.com/736x/04/ea/a9/04eaa9d3175f67a3942e9d91d3fa62b4.jpg' }} 
          resizeMode = "cover" 
          style = { estilos.default.vistaStyles.image }> 
          <div>
            <h1 style = { estilos.default.htmlStyles.h3 }>Mis Tareas </h1>
          </div>
         
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
                    
                    <td><Button color="primary" onClick={()=>this.mostrarModalEditar(elemento)}><img src="https://image.flaticon.com/icons/png/24/650/650143.png"/></Button>{" "}
                    <Button color="danger" onClick={()=>this.eliminar(elemento)}><img src="https://image.flaticon.com/icons/png/24/3096/3096673.png"/></Button></td>
                  </tr>
                ))}
              </tbody>
            </Table><br>
            </br><hr></hr>
            <Link to="/destacadas">
            <Button color = "primary">Tareas Destacadas</Button>
            </Link>
            <Modal isOpen={this.state.modalInsertar}>
  <ModalHeader>
    <div><h1>Nueva Tarea</h1></div>
  </ModalHeader>

  <ModalBody>
    <FormGroup>
      <label>
        Id: 
      </label> {"   "}
      <input className="form control" readOnly type="text" value={this.state.data.length+1}/>
    </FormGroup><br></br>
    <FormGroup>
      <label>
        Titulo: 
      </label>  {"   "}
      <input className="form control" type="text" name="Titulo" onChange={this.handleChange}/>
    </FormGroup><br></br>
    <FormGroup>
      <label>
        Descripción: 
      </label>  {"   "}
      <input className="form control" type="text" name="Descripcion" onChange={this.handleChange}/>
    </FormGroup><br></br>
    <FormGroup tag="fieldset">
        <legend>Importancia</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1"  value="1"/>{' '}
            Baja
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" value="2" />{' '}
            Media
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" value="3"/>{' '}
            Alta
          </Label>
        </FormGroup>
      </FormGroup>
  </ModalBody>
  <ModalFooter>
    <Button color="primary">Insertar</Button>
    <Button color="danger"  onClick={()=>this.ocultarModal()}>Cancelar</Button>
  </ModalFooter>
</Modal>


 <Modal isOpen={this.state.modalEditar}>
  <ModalHeader>
    <div><h1>Editar Tarea</h1></div>
  </ModalHeader>

  <ModalBody>
    <FormGroup>
      <label>
        Id: 
      </label> {"   "}
      <input className="form control" readOnly type="text" value={this.state.form.Id}/>
    </FormGroup><br></br>
    <FormGroup>
      <label>
        Titulo: 
      </label>  {"   "}
      <input className="form control" type="text" name="Titulo" onChange={this.handleChange} value={this.state.form.Titulo}/>
    </FormGroup><br></br>
    <FormGroup>
      <label>
        Descripción: 
      </label>  {"   "}
      <input className="form control" type="text" name="Descripcion" onChange={this.handleChange} value={this.state.form.Descripcion}/>
    </FormGroup><br></br>
    <FormGroup tag="fieldset">
        <legend>Importancia</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1"  value="1" value={this.state.form.Importancia}/>{' '}
            Baja
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" value="2" value={this.state.form.Importancia}/>{' '}
            Media
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" value="3" value={this.state.form.Importancia}/>{' '}
            Alta
          </Label>
        </FormGroup>
      </FormGroup>
  </ModalBody>
  <ModalFooter>
    <Button color="primary" >Editar</Button>
    <Button color="danger"  onClick={()=>this.ocultarModalEditar()}>Cancelar</Button>
  </ModalFooter>
</Modal>


          <View style = { estilos.default.vistaStyles.view }>  
  
  <div id= "crud">
  </div>       
          </View>
        </ImageBackground>
      </View>
  
    );
  }
}



export default Tareas;