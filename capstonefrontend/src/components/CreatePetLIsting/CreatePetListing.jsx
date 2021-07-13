import React, { Component } from 'react';
import './CreatePetListing.css';
import axios from 'axios';
//import axios from 'axios';

class CreatePetListing extends Component {
    constructor(props) {
        super(props);
            this.state = {
                name: null,
                type: null,
                age: null,
                fixed: null,
                gender: null,
                breed: null,
                price: null,
                children: null,
                pets: null,
                description: null,
                pictures: null,
                user: null
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
            const newpet = {
                name: this.state.name,
                type: this.state.type,
                age: this.state.age,
                fixed: this.state.fixed,
                gender: this.state.gender,
                breed: this.state.breed,
                price: this.state.price,
                children: this.state.children,
                pets: this.state.pets,
                description: this.state.description,
                pictures: this.state.pictures,
                user: 1
            };
        
        await axios.post(`http://127.0.0.1:8000/Pets/`,newpet);
        } 
        catch (error) {
            console.log(error)
        }
        finally{
            this.setState({
                name: null,
                type: null,
                age: null,
                fixed: null,
                gender: null,
                breed: null,
                price: null,
                children: null,
                pets: null,
                description: null,
                pictures: null,
                user: 1
            });
        }
    }    



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
                            <input className="FormInput" type="text" name="name"  onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 

                    <div>
                            <label>Type</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="type" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                        </div>
                    </div> 
                    <div>
                            <label>Age</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="age" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Fixed</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="fixed" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div>
                    <div>
                            <label>Gender</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="gender" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Breed</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="breed" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Price</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="price" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Good with children?</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="children" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Good with other Pets?</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="pets" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Description</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="text" name="description" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
                            </div>
                    </div> 
                    <div>
                            <label>Pictures</label>
                            <div className="inputDiv">
                            <input className="FormInput" type="file" name="pictures" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
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