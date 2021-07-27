import React, { Component } from 'react';
//import axios from 'axios';

class cat extends Component {
    constructor(props) {
        super(props);
            this.state = {
                tbd: "tbd",
             }
        }


    render() {
        return (        
            <div className="SearchViewContainer">
                <h1>CAT</h1>
                <h2 style={{margin:"0px"}}>Pets:</h2>

                <div className="CatBar">
                {this.props.state.allPets.filter(function (el) {
                    return el.type=="cat"}).map((pet)=>{
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

                <h2 style={{margin:"0px"}}>Items:</h2>
                <div className="CatBar">
                {this.props.state.allItems.filter(function (el) {
                    return el.animal=="cat"}).map((pet)=>{
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
             
         );
    }
}

export default cat;