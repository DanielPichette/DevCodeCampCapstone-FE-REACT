import React, { Component } from 'react';
import './lostpet.css';
//import axios from 'axios';

class Lost extends Component {
    constructor(props) {
        super(props);
            this.state = {
                LostPets: [],
             }
        }


    render() {
        return ( 
            <div className="LostWrapper">
                <div className="LostHeader">
                    <h1>Have Yoou Seen Me?</h1>
                </div>
                <div className="LostBody">
                    <div className="LostListing">
                        <div className="LostImg">
                            IMG
                        </div>
                    
                        <div className="Listinginfo">
                            <h3>Name:</h3><br/>
                            <h4>Name</h4>
                        </div>
                        <div className="Listinginfo">
                            <h3>Description:</h3><br/>
                            <h4>Description</h4>
                        </div>
                        <div className="Listinginfo">
                            <h3>Date Last Seen:</h3><br/>
                            <h4>Date</h4></div>
                        <div className="Listinginfo">
                            <h3>Contact:</h3><br/>
                            <h4>
                                Name: name <br/>
                                Phone: xxx-xxx-xxxx <br/>
                                Email: @gmail.com
                            </h4>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
            </div>
             
         );
    }
}

export default Lost;