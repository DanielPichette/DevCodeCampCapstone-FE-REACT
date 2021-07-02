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
                <h3>Results matching "  "</h3>
                <div className="searchBoxes">
                    <div className="PetResaults">
                        <h4>PETS</h4>
                    </div>
                    <div className="Item Resaults">
                        <h4>Items</h4>
                    </div>
                </div>

            </div>
             
         );
    }
}

export default SearchView;