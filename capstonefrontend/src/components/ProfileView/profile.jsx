import React, { Component } from 'react';
import './profile.css';
//import axios from 'axios';

class ProfileView extends Component {
    constructor(props) {
        super(props);
            this.state = {
                tbd: "tbd",
             }
        }


    render() {
        return (        
            <div className="ProfileContainer">
               <div className="ProfileImage">
                   <img src="https://images.pexels.com/photos/4130428/pexels-photo-4130428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Happy Dog"/>
               </div>
               <div className="ProfileInfo">
                   <h2>Profile</h2>
                   <p>UserName: </p>
                   <p> First Name:</p>
                   <p>Last Name:</p>
                   <p>Username:</p>
                   <p>Email:</p>
                   <p>City</p>
               </div>
               <div className="ProfileListings">LISTINGS</div>
            </div>
             
         );
    }
}

export default ProfileView;