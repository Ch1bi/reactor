import React, { Component } from 'react';
import axios from 'axios'


export default class Signin extends Component {

  constructor(props){

    super(props)

    this.state = {

      email:"",
      pass: ""
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

  signin = ()=>{

            let bodyFormData = new FormData()
            bodyFormData.set('email', this.state.email)
            bodyFormData.set('pass', this.state.pass)

            return axios.post('http://dev3.apppartner.com/Reactors/scripts/user-login.php', {data:bodyFormData, withCredentials:true})

            .then((data)=>{
    
                console.log(data)
            })
        }
  
  render() {
    return (

        <form
        onSubmit={this.handleSubmit}>

        <input type="text" name="email" placeholder="Email" value={this.state.email}  onChange={this.handleChange}/>

        <input type="password" name="pass" placeholder="Password" value={this.state.pass}  onChange={this.handleChange}/>
        
        <input type="submit" value="LOGIN" />

        </form>


    )
  }
}
