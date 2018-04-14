import React, { Component } from 'react';

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

    let user = {  
                    user:this.state.user,
                    email:this.state.email,
                    password: this.state.pass
                  }
         

            return axios.post('http://dev3.apppartner.com/Reactors/scripts/user-signup.php', {data:user, withCredentials:true})

            .then((data)=>{
    
                console.log(data)
            })

            .catch((err)=>console.log(err))
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
