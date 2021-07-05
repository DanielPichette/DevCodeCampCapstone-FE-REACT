// import React, { Component } from 'react';
// import './register.css';
// //import axios from 'axios';

// class Register extends Component {
//     constructor(props) {
//         super(props);
//             this.state = {
//                 tbd: "tbd",
//              }
//         }
//     handleDefinitionChange = (event) =>{
//         this.setState({
//         definition: event.target.value
//         });
//         };

//     handleSubmit = async(event) =>{
//         //event.preventDefault();

//         // const newCard = {
//         //     collection: this.props.collection,
//         //     word: this.state.word,
//         //     definition: this.state.definition,
//         // }
//         //await axios.post(`http://127.0.0.1:8000/notecards/`,newCard);
//      };


//     render() {
//         return (        
//             <div className="RegisterContainer">
//            <div className = 'BackgroundOverlay'></div>  

//                 <form className="RegistrationForm" onSubmit={(event) => this.handleSubmit(event)}>
//                      <div className='Registerheader'>
//                         < h1>Sign Up</h1>
//                     </div>
//                     <br/>
//                     <div>
//                         <label>FirstName</label>
//                     </div> 
//                     <div className="inputDiv">
//                         <input className="FormInput" type="text" name="word" placeholder="FirstName" onChange={(event) => this.handleTermChange(event)}/>
//                     </div>
//                     <div>
//                         <label>LastName</label>
//                     </div> 
//                     <div>
//                         <input type="text" name="definition" placeholder={this.state.definition} onChange={(event) => this.handleDefinitionChange(event)}/>
//                     </div>
//                     <div>
//                         <label>UserName</label>
//                     </div> 
//                     <div>
//                         <input type="text" name="word" placeholder={this.state.definition} onChange={(event) => this.handleTermChange(event)}/>
//                     </div>
//                     <div>
//                         <label>Email</label>
//                     </div> 
//                     <div>
//                         <input type="text" name="word" placeholder={this.state.definition} onChange={(event) => this.handleTermChange(event)}/>
//                     </div>
//                     <div>
//                         <label>State</label>
//                     </div> 
//                     <div>
//                         <input type="text" name="word" placeholder={this.state.definition} onChange={(event) => this.handleTermChange(event)}/>
//                     </div>
//                     <div>
//                         <label>City</label>
//                     </div> 
//                     <div>
//                         <input type="text" name="word" placeholder={this.state.definition} onChange={(event) => this.handleTermChange(event)}/>
//                     </div>
//                     <div>
//                         <label>Zipcode</label>
//                     </div> 
//                     <div>
//                         <input type="text" name="word" placeholder={this.state.definition} onChange={(event) => this.handleTermChange(event)}/>
//                     </div>
//                     <div>
//                         <label>Phone Number</label>
//                     </div> 
//                     <div>
//                         <input type="text" name="word" placeholder={this.state.definition} onChange={(event) => this.handleTermChange(event)}/>
//                     </div>
//                     <div>
//                         <label>Adress</label>
//                     </div> 
//                     <div>
//                         <input type="text" name="word" placeholder={this.state.definition} onChange={(event) => this.handleTermChange(event)}/>
//                     </div>
//                     <div>
//                         <label>Pasword</label>
//                     </div> 
//                     <div>
//                         <input type="text" name="word" placeholder={this.state.definition} onChange={(event) => this.handleTermChange(event)}/>
//                     </div>
//                     <br/>
//                     <button type="submit" >Register</button>
//                     <br/>
                    
                
//                 </form>
//             </div>
             
//          );
//     }
// }

// export default Register;