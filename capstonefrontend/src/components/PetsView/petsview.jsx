import React, { Component } from 'react';
import './petsview.css';
import {Link} from  'react-router-dom';
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
                <h2 style={{margin:"0px"}}>PETS</h2>
                
                <h4 style={{margin:"0px"}}>Cats:</h4>
                <div className="CatBar">
                    <div className="CatBarListing">
                        <div className="CatBarListingImage">
                        <Link to="/listing">
                    
                    
                            <img className="CatBarListingImage" src="https://images.pexels.com/photos/674572/pexels-photo-674572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" style={{height:"200px", width:"200px", objectFit:"cover"}}/>
                            </Link>
                        </div>
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

                <h4 style={{margin:"0px"}}>Dogs:</h4>
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
                <h4 style={{margin:"0px"}}>Reptiles:</h4>
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
                <h4 style={{margin:"0px"}}>Small Animals:</h4>
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
                <h4 style={{margin:"0px"}}>Birds:</h4>
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
                <h4 style={{margin:"0px"}}>Fish:</h4>
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
             
         );
    }
}

export default PetView;