import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
const ct_arr = ["ct 1", "ct 2", "ct 3", "ct 4"];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.onShowMore = this.onShowMore.bind(this);
    this.onShowLess=this.onShowLess.bind(this);
    this.state = {
      ct_list: ct_arr.slice(0, 2),
      onclickBinder:this.onShowMore,
      btnName:'Show more...',
      className:'',
    };
   
  }

  onShowMore() {
    let ct_list = ct_arr;
    let onclickBinder=this.onShowLess;
    let btnName='Show less...';
    let className='showmore';
    this.setState({ ct_list,onclickBinder ,btnName,className});
  }

  onShowLess(){
    let ct_list = ct_arr.slice(0, 2);
    let onclickBinder=this.onShowMore;
    let btnName='Show more...';
    this.setState({ ct_list,onclickBinder ,btnName});
  }

  render() {
    return (
      <div className="sidebar">
      <button onClick={this.state.onclickBinder}>
        {this.state.btnName}
      </button>
     
      <FirstCategoryList className={this.state.className} ct_list={this.state.ct_list}  categoryTitle='Sample Category'/>
      
       
        <hr />
        <ol>
          <li> caregoty 1</li>
          <li> caregoty 1</li>
          <li> caregoty 1</li>
          <li> caregoty 1</li>
          <li> caregoty 1</li>
          <li> caregoty 1</li>
        </ol>
      </div>
    );
  }
}

const FirstCategoryList = props => {
  return (
    <div style={{margin:'5%'}} className={props.className} type={props.type}>
        <h3>{props.categoryTitle}</h3>
        <ul>
            {props.ct_list.map(ct=>( <li>{ct}</li>))}
        </ul>
        <RadioButtons categoryTitle={props.categoryTitle}/>
    </div>
  );
};

const RadioButtons =props=>{
  return( <fieldset class="form-group">
        <legend>{props.categoryTitle}</legend>
        <div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
            Option one is this and that&mdash;be sure to include why it's great
          </label>
        </div>
        <div class="form-check">
        <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>
            Option two can be something else and selecting it will deselect option one
          </label>
        </div>
      </fieldset>)
}

const checkBoxes =props=>{
  return( <fieldset class="form-group">
        <legend>{props.categoryTitle}</legend>
        <div class="form-check">
          <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
            Option one is this and that&mdash;be sure to include why it's great
          </label>
        </div>
        <div class="form-check">
        <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>
            Option two can be something else and selecting it will deselect option one
          </label>
        </div>
      </fieldset>)
}

export default App;
