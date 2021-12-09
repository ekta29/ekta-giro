import React from 'react';
import './App.css';
import Classes from '/node_modules/bootstrap/dist/css/bootstrap.css';
import {Router} from "@reach/router";
import Welcome from './components/Welcome';
import FirstScreen from "./components/FirstScreen";
import SecondScreen from "./components/SecondScreen";



class App extends React.Component{
    render() {
        return (
           <Router>
               <Welcome path="/"/>
               <FirstScreen path="/firstScreen"/>
               <SecondScreen path="/secondScreen"/>
           </Router>
        );
    }
}

export default App;
