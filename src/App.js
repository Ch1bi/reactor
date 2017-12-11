import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header'
import Signup from './components/Signup'
import Signin from './components/Signin'


class Onboard extends Component {

  constructor(props){

    super(props)

    this.state = {
      
      selectedRoute: "SIGN UP"
    }
  }

  updateRoute = (route) =>{
    
    this.setState({selectedRoute:route.target.firstChild.nodeValue})    
  }


  
  render() {

    let routes = ['SIGN UP', 'LOGIN']

    return (



        <div className="onboard">

       
        
              <Header/> 

              <ul className="routes">
              {routes.map((route)=>{

                return(

                  <li
                  style={route === this.state.selectedRoute ? {borderBottom:'3px #ffffff solid', color:'#ffffff'} : null}
                  onClick={this.updateRoute}
                  key={route}>{route}</li>
                )
              })}
              
                
              </ul>

              
            {this.state.selectedRoute === "SIGN UP" ? <Signup/> : <Signin/>}

            
              
              </div>
      
     
    )
  }
}

export default Onboard;
