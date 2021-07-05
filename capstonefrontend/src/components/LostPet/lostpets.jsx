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
                    
                        <div className="Listinginfo">Name</div>
                        <div className="Listinginfo">Description</div>
                        <div className="Listinginfo">Last Seen:</div>
                        <div className="Listinginfo">Contact:</div>
                    </div>
                    <div className="LostListing">
                        <div className="LostImg">
                            IMG
                        </div>
                    
                        <div className="Listinginfo">Name</div>
                        <div className="Listinginfo">Description</div>
                        <div className="Listinginfo">Last Seen:</div>
                        <div className="Listinginfo">Contact:</div>
                    </div>
                    <div className="LostListing">
                        <div className="LostImg">
                            IMG
                        </div>
                    
                        <div className="Listinginfo">Name</div>
                        <div className="Listinginfo">Description</div>
                        <div className="Listinginfo">Last Seen:</div>
                        <div className="Listinginfo">Contact:</div>
                    </div>
                    <div className="LostListing">
                        <div className="LostImg">
                            IMG
                        </div>
                    
                        <div className="Listinginfo">Name</div>
                        <div className="Listinginfo">Description</div>
                        <div className="Listinginfo">Last Seen:</div>
                        <div className="Listinginfo">Contact:</div>
                    </div>
                    <div className="LostListing">
                        <div className="LostImg">
                            IMG
                        </div>
                    
                        <div className="Listinginfo">Name</div>
                        <div className="Listinginfo">Description</div>
                        <div className="Listinginfo">Last Seen:</div>
                        <div className="Listinginfo">Contact:</div>
                    </div>
                    
                    
                </div>
                
            </div>
             
         );
    }
}

export default Lost;