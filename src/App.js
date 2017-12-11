import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header'
import Signup from './components/Signup'
import Signin from './components/Signin'

class Onboard extends Component {

  constructor(props){

    super(props)

    this.state = {

      selectedRoute: "Sign Up"
    }
  }

  updateRoute = (route) =>{
    // this.setState({selectedRoute:route})
    // console.log(this.state.route)
    this.setState({selectedRoute:route.target.firstChild.nodeValue})    
    console.log(route.target.firstChild.nodeValue)
  }


  
  render() {

    let routes = ['Sign Up', 'Login']

    return (
      <div className="onboard">

      <Header/> 

      <ul className="routes">
      {routes.map((route)=>{

        return(

          <li
          style={route === this.state.selectedRoute ? { boxShadow: "inset 0 1px 0 #ffffff, inset 0 1px 0 #ffffff"} : null}
          onClick={this.updateRoute}>{route}</li>
        )
      })}
       
        
      </ul>


      <Signup/>
      {/* <Signin/> */}
      
       
      </div>
    )
  }
}

export default Onboard;
