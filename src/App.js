import React from 'react';
import './App.css';


<<<<<<< HEAD
import { Button } from './Button';

class App extends React.Component {
  state = {
    count: [],
    keys: [
      { value: "clear", styleName: "clearButton" },
      { value: "/", styleName: "operatorButton" },
      { value: "7", styleName: "numberButton" },
      { value: "8", styleName: "numberButton" },
      { value: "9", styleName: "numberButton" },
      { value: "*", styleName: "operatorButton" },
      { value: "4", styleName: "numberButton" },
      { value: "5", styleName: "numberButton" },
      { value: "6", styleName: "numberButton" },
      { value: "-", styleName: "operatorButton" },
      { value: "1", styleName: "numberButton" },
      { value: "2", styleName: "numberButton" },
      { value: "3", styleName: "numberButton" },
      { value: "+", styleName: "operatorButton" },
      { value: "0", styleName: "numberButton zero"  },
      { value: "=", styleName: "operatorButton" }
    ]
  }

  handleButton = (value) => {
    if (value === "clear") {
      this.setState({ count: [] })
    } else if (value === "=") {
      this.setState(prevState => ({
        count: [eval(prevState.count.join(""))]
      }))
    } else {
      this.setState(prevState => ({
        count: [...prevState.count, value]
      }))
    }
  }

  render() {
    return (
      <div>
        <div className="calc-body">
          <div className="value-row">
            <h1 className="value-box" placeholder="0"> {this.state.count} </h1>
          </div>
          <div className="buttonsWrapper">
            <div className="buttons">
              {this.state.keys.map(key => {
                return <Button handleButton={this.handleButton} data={key} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
=======



class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state={phone:[]};
  }
  
  save() {
    var phone = [...this.state.phone];
    phone.push(this.newText.value);
    this.setState({phone});
  }

  render(){
      return(
          <div className="list">
            <h1> Phonebook</h1>
            <input type="text" ref={(ip) => {this.newText = ip}}/>
            <button onClick={this.save.bind(this)} className="button1">Save
            </button>
            <hr></hr>
            <ul className= 'lists'>
              {this.state.phone.map(function(todo) {
                    return <li>+44 {todo}</li>
               })}
              
            </ul>
          </div>
      )
  }
};
export default App
// ReactDOM.render(<Todo/>, document.getElementById('app'));









// import React, {Component} from 'react';
// import './App.css';









// class App extends Component  {
//   constructor(){
//     super()
//     this.state ={
//     phoneNumber: null
//     }
//     }
// handleSubmit= (event)=>{
//   event.preventDefault();
// }
// handleInputChange = (event) =>{
//   event.preventDefault();
//  this.setState ({
//    [event.target.name]:event.target.value
//  })
//   }

// render() {
//   const {phoneNumber} = this.state
//   return(
//  <div>  
//  <form onSubmit= {this.handleSubmit}>
//  <input type = "text" 
//  name= 'phoneNumber'
//  placeholder="Phone Number"  onChange= {this.handleInputChange} /> 
//   <button>Sumbit</button>
//    <hr/>
//    <h2>Phone Number List</h2></form>
//    <p></p>
// </div>
//   )}
// }



// export default App
>>>>>>> 0676b221e1cd52a2a2a12c705f9603b93a85ea6f
