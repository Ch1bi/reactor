import React, { Component } from 'react';
import Signin from './Signin'
import firebase, { auth, provider } from '../auth/firebase.js';
import {Redirect} from 'react-router-dom'
import Home from './Home'


class Toggle extends Component {

  constructor(props){

    super(props)

    this.state = {
      
      user: null,
      redirect:false,
      name: "",
      pic:""
    }
  }


 login = () =>{

      auth.signInWithPopup(provider) 
        .then((result) => {
          const user = result.user;
          console.log(result.user)
          this.setState({
            user,
            name:result.user.displayName,
            pic:result.user.photoURL
          });

          
          this.setState({

            redirect:true
          });

          
        });
    }

  render() {

    let routes = ['LOGIN']

     //redirects users to the home on login
     if(this.state.redirect){
     
      return (
        
      <Redirect to={{
        pathname:'/home',
        state: { name: this.state.name,
        pic: this.state.pic}
      }}/>
    
    )
      
      }


    return (

        <div className="onboard">

            <h1>Take the guesswork out of traveling and vacationing</h1>

            <p>Log in with Google to get started!</p>

              <button className="google"
              onClick={this.login}>Log in with Google</button>
              
              </div>
      
     
    )
  }
}

export default Toggle;

