import React, { Component } from 'react';
import './resources.css';
///import axios from 'axios';

class Resources extends Component {
    constructor(props) {
        super(props);
            this.state = {
                LostPets: [this.props.lostpets],
             }
        }


    render() {
        return ( 
          <div className="Resources">
              <h1> Resources</h1>
              <br/>
              <h2>Vetrinary Hospitals:</h2>
              <h3>Milwaukee Vet Clinic</h3>
              <h5>Address: S Bay St, Milwaukee, WI 53207 <br/>
                Hours: <br/>
                Monday
                8AM–6PM <br/>
                Holiday hours <br/>
                Tuesday	9AM–7PM <br/>
                Wednesday	8:30AM–6PM <br/>
                Thursday	8:30AM–6PM <br/>
                Friday	8:30AM–6PM <br/>
                Saturday	Closed <br/>
                Sunday	Closed <br/>
                </h5>
              <h2>Pet Store:</h2>


              <h1>Animal Shelters:</h1>
              <h3>Wisconsin Humane Society Milwaukee Campus</h3>
              <h5>Address: S Bay St, Milwaukee, WI 53207 <br/>
                Hours: <br/>
                Monday 
                Closed <br/>
                Tuesday	11AM–7PM <br/>
                Wednesday	11AM–7PM <br/>
                Thursday	11AM–7PM <br/>
                Friday	11AM–7PM <br/>
                Saturday	10AM–6PM <br/>
                Sunday	Closed <br/>
                </h5>
              
              <h1>Dog Parks</h1>
              <h3>Bay View Dog Park</h3>
              <h5>Address: S Bay St, Milwaukee, WI 53207 <br/>
                Hours: 
                Monday
                5AM–10PM <br/>
                Tuesday	5AM–10PM <br/>
                Wednesday	5AM–10PM <br/>
                Thursday	5AM–10PM  <br/>
                Friday	5AM–10PM <br/>
                Saturday	5AM–10PM <br/>
                Sunday	5AM–10PM</h5>


                <div>
                    <h1>Map Feature Coming Soon!</h1>
                    <img src="https://images.pexels.com/photos/919188/pexels-photo-919188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="map"/>
                </div>
          </div>
        )
    }
}

export default Resources;