import React, {Component} from 'react';
import {Header} from './Header'
import table from '../img/1.png'
import cups from '../img/2.png'
import josianefurt from '../img/3.png'
import chrisopherport from '../img/4.png'
import concepcionbury from '../img/5.png'
import reychester from '../img/6.png'



import firebase, { auth, provider } from '../auth/firebase.js';
import {Redirect} from 'react-router-dom'



class Home extends Component {

    constructor(props){
  
      super(props)
  
      this.state = {
        
        user: null,
        redirect:false
       
      }
    }

    logout = () => {
        auth.signOut()
          .then(() => {
            this.setState({
              user: null,
              redirect:true
            });

            console.log("logging out")
          });
      }
    
    
    render(){

        if(this.state.redirect){
              
            <Redirect to={'/'}/>
        }

        return(


        <div className="container">

        <Header/>

        

        <section className="header-bg">
          <p className="greeting">Hello {this.props.location.state.name}, welcome to Reactor</p>

          <img src={this.props.location.state.pic}
          className="picture"/>

        {/* <button className="signout"
        onClick={this.logout}>Signout</button> */}
          
        </section>



    {/* What-we-do section*/}
        <section className="what-we-do">

            <h3 className="what-we-do-title">WHAT WE DO</h3>

            <div className="we-do">

            <h3 className="we-do-title"></h3>
            <p className="we-do-description">At Reactor, we help you get accustomed to any area you travel to.<br/> This includes finding the closest airports, areas of interest or even best places to eat, and etc.</p>
            
            </div>
        

        </section>

    {/* Cuisine container*/}

    <section className="cuisine-container">

        <div className="cuisines">
        
        <img src={table} alt="table" height="150"/>
        
        <div className="cuisine-1">

        <h3 className="cuisine-heading">Regional Cuisine Down Home <br/>Southern Cooking</h3>
        <p className="cuisine-description">Going down South in the States? <br/>Stop by this restarant to receive some of the best Southern cooking!<br/></p>

        </div>


        <img src={cups} alt="table" height="150"/>
        
        <div className="cuisine-2">

        <h3 className="cuisine-heading">More Options With Italian Cuisine</h3>
        <p className="cuisine-description">How about Italy? <br/>You can come and try some of their world renown desserts.</p>

        </div>
        
        </div>
    
     </section>

    {/* Airport section */}

    <section className="maui-container">

        <h3 className="maui-heading">Maui By Air The Best Way To Travel</h3>

        <div className="maui-images">

        <div className="place-1">
            <img src={josianefurt} alt="josianfurt" width="150"/>
            <h3 className="maui-title">East Josianefurt</h3>
            <h3 className="maui-address">085 Daron Via</h3>
        </div>

        <div className="place-2">
            <img src={chrisopherport} alt="South Chrisopherport" width="150"/>
            <h3 className="maui-title">South Chrisopherport</h3>
            <h3 className="maui-address">162 Chandler Ville</h3>
        </div>

        <div className="place-3">
            <img src={concepcionbury} alt="concepcionbury" width="150"/>
            <h3 className="maui-title">Concepcionbury</h3>
            <h3 className="maui-address">7643 Kylie Burgs</h3>
        </div>

        <div className="place-4">
            <img src={reychester} alt="Reychester" width="150"/>
            <h3 className="maui-title">Reychester</h3>
            <h3 className="maui-address">5590 Gabe Views Apt. 044</h3>
        </div>
        
        </div>


    </section>

    {/* Subscribe section */}

    <section className="subscribe-container">

    <h3 className="subscribe-heading">SUBSCRIBE FOR UPDATES</h3>
    
    <div className="subscribe-form">

    <input className="subscribe-input" type="text" name="subscribe" placeholder="Your Email" />
    <button className="subscribe-button">Subscribe</button>
    
    </div>


    </section> 

    <footer><h3>&copy;2018 Reactor</h3></footer>



        </div>
        )
    }

            
}
    export default Home