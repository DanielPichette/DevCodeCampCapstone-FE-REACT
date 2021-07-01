import React, { Component } from 'react';
import './login.css';
//import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
            this.state = {
                tbd: "tbd",
             }
        }
    handleDefinitionChange = (event) =>{
        this.setState({
        definition: event.target.value
        });
        };

    handleSubmit = async(event) =>{
        //event.preventDefault();

        // const newCard = {
        //     collection: this.props.collection,
        //     word: this.state.word,
        //     definition: this.state.definition,
        // }
        //await axios.post(`http://127.0.0.1:8000/notecards/`,newCard);
     };


    render() {
        return (        
            <div className="RegisterContainer">
           <div className = 'BackgroundOverlay'></div>  

                <form className="RegistrationForm" onSubmit={(event) => this.handleSubmit(event)}>
                     <div className='Registerheader'>
                        < h1>Login</h1>
                    </div>
                    <br/>
                    <div>
                        <label>FirstName</label>
                    </div> 
                    <div className="inputDiv">
                        <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                    </div>
                    <div>
                        <label>LastName</label>
                    </div> 
                    <div>
                        <input type="text" name="definition" placeholder={this.state.definition} onChange={(event) => this.handleDefinitionChange(event)}/>
                    </div>

                    <br/>
                    <button type="submit" >Login</button>
                    <br/>
                    
                
                </form>
            </div>
             
         );
    }
}

export default Login;