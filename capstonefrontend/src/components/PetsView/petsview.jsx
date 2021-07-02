import React, { Component } from 'react';
import './searchview.css';
//import axios from 'axios';

class SearchView extends Component {
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
                <h4 style={{margin:"0px"}}>Pets:</h4>

                <div className="PetResults">
                    <div className="SearchListing">
                         <div className="SearchListingImage">IMG</div>
                        <div className="SearchListingName">Name</div>
                    </div>
                </div>

                <h4 style={{margin:"0px"}}>Items:</h4>
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

export default SearchView;