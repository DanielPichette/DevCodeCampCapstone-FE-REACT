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
                  <img className="viewimg" src={this.props.state.viewPet.pictures} alt=""/>
              </div>
              <div className="ViewListingInfo">
                  
                    <h1>{this.props.state.viewPet.name}</h1>
                    <h2>
                    type: {this.props.state.viewPet.type}<br/>
                    age: adult : {this.props.state.viewPet.age}<br/>
                    fixed: {this.props.state.viewPet.fixed}<br/>
                    gender: {this.props.state.viewPet.gender}<br/>
                    breed: {this.props.state.viewPet.breed}<br/>
                    price: {this.props.state.viewPet.price}<br/>
                    good with children: {this.props.state.viewPet.children}<br/>
                    good with other pets: {this.props.state.viewPet.pets}<br/>
                    description: {this.props.state.viewPet.description}
                </h2>
              </div>
          </div>
        )
    }
}

export default ViewPet;