import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Home from './componentes/home/home';
import Registro from './componentes/registro/registro';
import Login from './componentes/login/login';
import Tareas from './componentes/tareas/tareas';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path = "/registro" component = { Registro } />
        <Route path = "/login" component = { Login } />
        <Route path = "/tareas" component = { Tareas } />
        <Route path = "/" component = { Home } />
      </Switch>
    </Router>
  );
}


export default App;