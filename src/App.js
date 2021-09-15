
import React from 'react';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Switch,Route} from 'react-dom'
import Login from './components/Login';
const App = () =>{
  return(
    <div>
      <Switch>
        <Route exact path='/' component={Login}/>

     
      </Switch>
    </div>
  )
}

export default App;
