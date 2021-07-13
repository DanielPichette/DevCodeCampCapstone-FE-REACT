import React, { Component } from 'react';
import './lostpet.css';
import { Link } from 'react-router-dom';
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
                        <div className="LostPicture">
                            <img className="LostImg" src={pet.pictures} alt="img"/>
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
                            <h4>{pet.lastSeen}</h4></div>
                        <div className="Listinginfo">
                            <h3>Contact:</h3><br/>
                            <h4>
                                Phone: {pet.phone} <br/>
                                Email: {pet.email}
                                <div>
                                    <a href={`mailto:${pet.email}`}>Email</a>
                                </div>
                            </h4>
                        </div>
                    </div>)
                    })} 
                    
                    
                    
                </div>
                <Link to="/LostPetForm">
                <button style={{justifySelf:'right'}}>Add Lost PetListing</button>
                </Link>
                
            </div>
             
         );
    }
}

export default Lost;