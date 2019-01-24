import React, { Component } from "react";
import logo from "./logo.svg";
import Cart from './Cart';
import "./App.css";
import ProductImageViewer from  "./ProductImageViewer";
const ct_arr = ["ct 1", "ct 2", "ct 3", "ct 4"];
const images=[{
  src:'http://media.4rgos.it/i/Argos/5399785_R_Z001A?$Web$&$DefaultPDP570$',
},{
  src:'https://ph-live-01.slatic.net/original/0fc1b788184ce5ab2fef2eba99c2dae5.jpg',
},{
  src:'http://tlists.com/wp-content/uploads/2016/04/Mobile-phone.jpg',
},{
  src:'http://media.4rgos.it/i/Argos/5399785_R_Z001A?$Web$&$DefaultPDP570$',
}]

class App extends Component {

  constructor(props){
    super(props)
   
  }



 
  render(){
    return(<ProductImageViewer/>);
  }
}
  

export default App;
