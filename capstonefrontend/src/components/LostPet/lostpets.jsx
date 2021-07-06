import React, { Component } from 'react';
import './lostpet.css';
//import axios from 'axios';

class Lost extends Component {
    constructor(props) {
        super(props);
            this.state = {
                LostPets: [this.props.lostpets],
             }
        }


    render() {
        return ( 
            <div className="LostWrapper">
                <div className="LostHeader">
                    <h1>Have You Seen Me?</h1>
                </div>
                <div className="LostBody">
                    
                    {this.props.lostpets.map((pet)=>{
                        return(
                        <div className="LostListing">
                        <div className="LostImg">
                            IMG
                        </div>
                    
                        <div className="Listinginfo">
                            <h3>Name:</h3><br/>
                            <h4>{pet.name}</h4>
                        </div>
                        <div className="Listinginfo">
                            <h3>Description:</h3><br/>
                            <h4>{pet.description}</h4>
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
                    </div>)
                    })} 
                    
                    
                    
                </div>
                
            </div>
             
         );
    }
}

export default Lost;