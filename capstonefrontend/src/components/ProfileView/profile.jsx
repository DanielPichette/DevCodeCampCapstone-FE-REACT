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
            <div>
            <div className="ProfileContainer">
               <div className="ProfileImage">
                   <img src="https://images.pexels.com/photos/4218369/pexels-photo-4218369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Happy Dog"/>
               </div>
               <div className="ProfileInfo">
                   <img src="https://image.flaticon.com/icons/png/512/3011/3011270.png" alt="user"/>
                   <h1>Account Summary</h1>
                   <p>UserName: </p>
                   <p> First Name:</p>
                   <p>Last Name:</p>
                   <p>Username:</p>
                   <p>Email:</p>
                   <p>City</p>
                  
                   <button>Update</button>
               </div>
               <div className="ProfileListings">
               <h3>Your Listings:</h3>
               <div className="CatBar">
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">IMG</div>
                        <div className="CatBarListingName">Name</div>
                    </div>

                </div>
                
               </div>

            </div>
        </div>
             
         );
    }
}

export default ProfileView;