import React, { Component } from 'react';
//import './CreatePetListing.css';
import axios from 'axios';
//import axios from 'axios';

class LostPetForm extends Component {
    constructor(props) {
        super(props);
            this.state = {
                name: "null",
                lastSeen: "null",
                description: "null",
                phone: "null",
                email: "null",
                pictures: "null",
                user:1
            }
        }
    handleTermChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(this.state)
        };

    handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const newlost = {
                name: this.state.name,
                lastSeen: this.state.lastSeen,
                description: this.state.description,
                phone: this.state.phone,
                email: this.state.email,
                pictures: this.state.pictures,
                user: 1
            };
        
        await axios.post(`http://127.0.0.1:8000/LostPets/`,newlost);
        } 
        catch (error) {
            console.log(error)
        }
        finally{
            this.setState({
                name: null,
                lastSeen: null,
                description: null,
                phone: null,
                email: null,
                pictures: null,
                user:null
            });
        }
    }    



    render() {
        return (        
            <div className="ListingFormContainer">
           <div className = 'BackgroundOverlay'></div>  

                <form className="ListingForm" onSubmit={(event) => this.handleSubmit(event)}>
                     <div className='ListingHeader'>
                        <h1>Lost Pet </h1>
                    </div>
                    <div>
                            <label>Name</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="name"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 

                    <div>
                            <label>Date Last Seen</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="type" name="lastseen"  onChange={(event) => this.handleTermChange(event)}/>
                        </div>
                    </div> 
                    <div>
                            <label>Description</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="description" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Phone</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="input" name="categorgy" placeholder="xxx-xxx-xxxx" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>
                    <div>
                            <label>email</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="email" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Image Url</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="type" name="pictures" placeholder="URL" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                   
                    <button className="submitButton" type="submit" >Create</button>
                    <br/>
                    
                
                </form>
            </div>
             
         );
    }
}

export default LostPetForm;