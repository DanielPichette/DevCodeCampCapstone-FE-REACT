import React, { Component } from 'react';
import './petsview.css';
//import axios from 'axios';

class PetView extends Component {
    constructor(props) {
        super(props);
            this.state = {
                tbd: "tbd",
             }
        }


    render() {
        return (        
            <div className="SearchViewContainer">
                <h3 style={{margin:"0px"}}>Results matching "  "</h3>
                
                <h4 style={{margin:"0px"}}>Cats:</h4>
                <div className="PetResults">
                    <div className="SearchListing">
                         <div className="SearchListingImage">IMG</div>
                        <div className="SearchListingName">Name</div>
                    </div>
                </div>

                <h4 style={{margin:"0px"}}>Dogs:</h4>
                <div className="ItemResults">
                    <div className="SearchListing">
                         <div className="SearchListingImage">IMG</div>
                        <div className="SearchListingName">Name</div>
                    </div>
                </div>
                <h4 style={{margin:"0px"}}>Reptiles:</h4>
                <div className="ItemResults">
                    <div className="SearchListing">
                         <div className="SearchListingImage">IMG</div>
                        <div className="SearchListingName">Name</div>
                    </div>
                </div>
                <h4 style={{margin:"0px"}}>Small Animals:</h4>
                <div className="ItemResults">
                    <div className="SearchListing">
                         <div className="SearchListingImage">IMG</div>
                        <div className="SearchListingName">Name</div>
                    </div>
                </div>
                <h4 style={{margin:"0px"}}>Birds:</h4>
                <div className="ItemResults">
                    <div className="SearchListing">
                         <div className="SearchListingImage">IMG</div>
                        <div className="SearchListingName">Name</div>
                    </div>
                </div>
                <h4 style={{margin:"0px"}}>Fish:</h4>
                <div className="ItemResults">
                    <div className="SearchListing">
                         <div className="SearchListingImage">IMG</div>
                        <div className="SearchListingName">Name</div>
                    </div>
                </div>

            </div>
             
         );
    }
}

export default PetView;