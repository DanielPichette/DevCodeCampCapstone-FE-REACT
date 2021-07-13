import React, { Component } from 'react';
import './updateprofile.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
//import axios from 'axios';

class UpdateProfile extends Component {
    constructor(props) {
        super(props);
            this.state = {
                firstName: null,
                lastName: null,
                username:null,
                email:null,
                state:null,
                city:null,
                address:null,
                zipcode:null,
                phone:null,
                password:null,
                userid: this.props.state.currentUser.id
             }
        }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
        };

    handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const newUser = {
                id: this.state.userid,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                email: this.state.email,
                state: this.state.state,
                city: this.state.city,
                address: this.state.address,
                zipcode: this.state.zipcode,
                phone: this.state.phone,
                password: this.state.password,
            };
        
        await axios.put(`http://127.0.0.1:8000/UserById/${this.state.userid}/`,newUser);
        } 
        catch (error) {
            console.log(error)
        }
        finally{
            this.setState({
                firstName: null,
                lastName: null,
                username:null,
                email:null,
                state:null,
                city:null,
                address:null,
                zipcode:null,
                phone:null,
                password:null,
            });
        }
    }


    render() {
        return (    
            <div className="RegisterContainer">
            <div className = 'BackgroundOverlay'></div>  
 
                 <form className="RegistrationForm" onSubmit={(event) => this.handleSubmit(event)}>
                      <div className='Registerheader'>
                      <img className="ProfilePhoto" src="https://image.flaticon.com/icons/png/512/3011/3011270.png" alt="user"/>
                         <h1>Register </h1>
                     </div>
                     <div>
                             <label>FirstName</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="firstName" placeholder="FirstName" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
 
                     <div>
                             <label>Last Name</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="lastName" placeholder="FirstName" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>UserName</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="username" placeholder="FirstName" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Email</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="email" placeholder="FirstName" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>State</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="state" placeholder="FirstName" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>City</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="city" placeholder="FirstName" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Zip Code</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="zipcode" placeholder="FirstName" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Phone Number</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="phone" placeholder="FirstName" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Adress</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="address" placeholder="FirstName" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <div>
                             <label>Password</label>
                             <div className="inputDiv">
                             <input className="FormInput" type="text" name="password" placeholder="FirstName" onChange={(event) => this.handleChange(event)}/>
                         </div>
                     </div> 
                     <br/>
                     <button className="submitButton" type="submit">Register</button>
                     <br/>
                     
                 
                 </form>
             </div>
         );
    }
}

export default UpdateProfile;