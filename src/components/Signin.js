import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

export default class Signin extends Component {

  

  constructor(props){

    super(props)

    this.state = {

      email:"",
      pass: "",
      redirect:false
    }
  }

  handleChange = (e)=>{

    this.setState({[e.target.name]: e.target.value})

  }

  handleSubmit = (e)=>{

    //prevent refreshing page
    e.preventDefault()
    this.signin()

  }
  
  render() {

    //redirects users to the home on login
     if(this.state.redirect){
     
     return <Redirect to={'/home'}/>
     }
    

    return (

        
        <div>
          
        <form
          onSubmit={this.handleSubmit}>

          <input type="text" name="email" placeholder="Email" value={this.state.email}  onChange={this.handleChange}/>

          <input type="password" name="pass" placeholder="Password" value={this.state.pass}  onChange={this.handleChange}/>
          
          <input type="submit" value="LOGIN" />

        </form>
        </div>
        



    )
  }
}
