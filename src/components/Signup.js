import React, { Component } from 'react';
import axios from 'axios'


export default class Signup extends Component {

  constructor(props){

    super(props)

    this.state = {

      user: "",
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
    this.signup()

  }

  signup = ()=>{

            let bodyFormData = new FormData()
            bodyFormData.set('user', this.state.user)
            bodyFormData.set('email', this.state.email)
            bodyFormData.set('pass', this.state.pass)

            return axios.post('http://dev3.apppartner.com/Reactors/scripts/user-signup.php', {data:bodyFormData, withCredentials:true})

            .then((data)=>{
    
                console.log(data)
            })
        }
  
  render() {
    return (

        <form
        onSubmit={this.handleSubmit}>

        <input type="text" name="user" placeholder="Username" value={this.state.user} onChange={this.handleChange}/>

        <input type="text" name="email" placeholder="Email" value={this.state.email}  onChange={this.handleChange}/>

        <input type="password" name="pass" placeholder="Password" value={this.state.pass}  onChange={this.handleChange}/>
        
        <input type="submit" value="SIGN UP" />

        </form>


    )
  }
}
