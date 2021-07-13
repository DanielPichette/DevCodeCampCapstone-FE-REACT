import React, { Component } from 'react';
import './profile.css';
import {Link} from 'react-router-dom';
//import axios from 'axios';

class ProfileView extends Component {
    constructor(props) {
        super(props);
            this.state = {
                Update: "",
             }
        }


    render() {
        return ( 
            <div>
            <div className="ProfileContainer">
               <div className="ProfileImage">
                   <img src="https://images.pexels.com/photos/4218369/pexels-photo-4218369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Happy Dog"/>
               </div>
               <div className="ProfileInfo">
                   <img src="https://image.flaticon.com/icons/png/512/3011/3011270.png" alt="user"/>
                   <h1>Account Summary</h1>
                   <p>UserName: {this.props.state.currentUser.username}</p>
                   <p> First Name: {this.props.state.currentUser.firstName}</p>
                   <p>Last Name: {this.props.state.currentUser.lastName}</p>
                   <p>Username: {this.props.state.currentUser.username}</p>
                   <p>Email: {this.props.state.currentUser.email}</p>
                   <p>City: {this.props.state.currentUser.city}</p>
                   <Link to="/UpdateProfile">
                        <button>Update</button>
                    </Link>
               </div>
               <div className="ProfileListings">
               <h3>Your Listings:</h3>
               <div className="CatBar">
               {this.props.state.allPets.filter(function (el) {
                    return el.user==5}).map((pet)=>{
                        return(
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                            <img src={pet.pictures} alt=""/>
                        </div>
                        <div className="CatBarListingName">{pet.name}</div>
                    </div>
                        )
                        })}

                </div>
                
               </div>

            </div>
            
        </div>
             
         );
    }
}

export default ProfileView;