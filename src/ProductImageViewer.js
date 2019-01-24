import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
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
    this.onThumbnailClick=this.onThumbnailClick.bind(this);
    this.onMouseMove=this.onMouseMove.bind(this);
    this.state={
      imr_src:images[0].src,
    }
  }

  onMouseMove=(e)=>{
      try {
        let self=e.target
        let newOrigin= ((e.pageX - self.offsetLeft) / self.width )* 100 + '% ' + ((e.pageY - self.offsetTop) / self.height) * 100 +'%';
        self.style.setProperty('transform-origin',newOrigin)   
      } catch (err) {
        console.log(err);
      }
    
  }

  onThumbnailClick=(e)=>{
    let imr_src=e.target.src;
    this.setState({
      imr_src
    })
  }

 
  render(){
    return(
    <div className="product-imgs" >
      <div style={{flexBasis:'12%'}}> 
      {images.map(i=>(
        <div>
        <img src={i.src} onClick={this.onThumbnailClick}  className="img-thumbnail" alt="Cinque Terre"></img>
      </div>
      ))
        
      }
      </div>
        <div className='main-img'>    
          <img onMouseMove={this.onMouseMove} src={this.state.imr_src} className='img-fluid' alt="Cinque Terre"></img>
        </div>        
    </div>);
  }
}
  

export default App;
