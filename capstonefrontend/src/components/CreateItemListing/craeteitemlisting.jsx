import React, { Component } from 'react';
//import './CreatePetListing.css';
import axios from 'axios';
//import axios from 'axios';

class CreateItemListing extends Component {
    constructor(props) {
        super(props);
            this.state = {
                name: "null",
                condition: "null",
                animal: "null",
                category: "null",
                description: "null",
                price: "null",
                user: "null",
                location: "null",
                state: "null",
                pictures: "null",
                category: 'null'

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
            const newitem = {
                name: this.state.name,
                condition: this.state.condition,
                animal: this.state.animal,
                category: this.state.category,
                description: this.state.description,
                price: this.state.price,
                pictures: this.state.pictures,
                location:this.state.location,
                state: this.state.state,
                user: 5
            };
        
        await axios.post(`http://127.0.0.1:8000/Items/`,newitem);
        } 
        catch (error) {
            console.log(error)
        }
        finally{
            this.setState({
                name: null,
                condition: null,
                animal: null,
                category: null,
                description: null,
                price: null,
                user: null
            });
        }
    }    



    render() {
        return (        
            <div className="ListingFormContainer">
           <div className = 'BackgroundOverlay'></div>  

                <form className="ListingForm" onSubmit={(event) => this.handleSubmit(event)}>
                     <div className='ListingHeader'>
                        <h1>New Item Listing </h1>
                    </div>
                    <div>
                            <label>Name</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="name"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 

                    <div>
                            <label>Condition</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="condition"  onChange={(event) => this.handleTermChange(event)}/>
                        </div>
                    </div> 
                    <div>
                            <label>Animal</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="animal" placeholder="" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Category</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="categorgy" placeholder="" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>
                    <div>
                            <label>Price</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="price" placeholder="" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Description</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="description" placeholder="" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Pictures</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="type" name="pictures" placeholder="" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>City</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="type" name="location" placeholder="" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>State</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="type" name="state" placeholder="" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                   
                    <button className="submitButton" type="submit" >Create</button>
                    <br/>
                    
                
                </form>
            </div>
             
         );
    }
}

export default CreateItemListing;