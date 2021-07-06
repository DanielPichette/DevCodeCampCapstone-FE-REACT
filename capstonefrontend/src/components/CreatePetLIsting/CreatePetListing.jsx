import React, { Component } from 'react';
import './CreatePetListing.css';
//import axios from 'axios';

class CreatePetListing extends Component {
    constructor(props) {
        super(props);
            this.state = {
                name: "T2",
                type: null,
                age: null,
                fixed: null,
                gender: null,
                breed: null,
                price: null,
                children: null,
                pets: null,
                description: "test",
                pictures: null,
                user: 0
            }
        }
    handleDefinitionChange = (event) =>{
        this.setState({
        definition: event.target.value
        });
        };

    handleSubmit = async(event) =>{
        //event.preventDefault();

        // const newCard = {
        //     collection: this.props.collection,
        //     word: this.state.word,
        //     definition: this.state.definition,
        // }
        //await axios.post(`http://127.0.0.1:8000/notecards/`,newCard);
     };


    render() {
        return (        
            <div className="ListingFormContainer">
           <div className = 'BackgroundOverlay'></div>  

                <form className="ListingForm" onSubmit={(event) => this.handleSubmit(event)}>
                     <div className='ListingHeader'>
                        <h1>New Pet Listing </h1>
                    </div>
                    <div>
                            <label>Name</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="type"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 

                    <div>
                            <label>Type</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                        </div>
                    </div> 
                    <div>
                            <label>Age</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Fixed</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>
                    <div>
                            <label>Gender</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Breed</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Price</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Good with children?</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Good with other Pets?</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Description</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Pictures</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                   
                    <button className="submitButton" type="submit" >Update</button>
                    <br/>
                    
                
                </form>
            </div>
             
         );
    }
}

export default CreatePetListing;