import React, { Component } from 'react';
import './viewListing.css';
///import axios from 'axios';

class ViewPet extends Component {
    constructor(props) {
        super(props);
            this.state = {
                LostPets: [this.props.lostpets],
             }
        }


    render() {
        return ( 
          <div className="ViewListingWrapper">
              <div className="ViewListingImage">
                  <img className="viewimg" src="https://images.pexels.com/photos/674572/pexels-photo-674572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
              </div>
              <div className="ViewListingInfo">
                  
                    <h1>Beth</h1>
                    <h2>
                    type: cat<br/>
                    age: adult<br/>
                    fixed: yes<br/>
                    gender: female<br/>
                    breed: american long hair<br/>
                    price: Free to Good Home<br/>
                    good with children: yes<br/>
                    good with other pets: No<br/>
                    description: Beth is a loving cat. we unfortunatly have to rehome her after her previouse owner passed. she is extremely cuddle and effectionate. she does not get well with other cats but is fine with other pets!
                </h2>
              </div>
          </div>
        )
    }
}

export default ViewPet;