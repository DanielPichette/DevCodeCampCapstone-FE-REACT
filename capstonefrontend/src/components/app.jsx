import React, { Component } from 'react';
import axios from 'axios';
import './app.css';
import Local from './Local/local';
import Home from './Home/home';
import Register from './Register/register';
import Navigation from './NavigationBar/navigation';
import Header from './Header/header';
import UpdateProfile from './update Profile/updateprofile';
import ItemView from './Item View/itemView';
import Login from './Login/login';
import CreateItemListing from './CreateItemListing/craeteitemlisting';
import PetView from './PetsView/petsview';
import LostPetForm from './CreateLostListing/CreateLostListing';
import ViewListing  from './View listing/viewListing'
import Resources from './Resources/resources';
import Bird from './Bird/bird';
import Cat from './Cat/cat';
import Dog from './Dog/dog';
import Reptile from './Reptile/reptile';
import Fish from './Fish/fish';
import SmallAnimal from './SmallAnimal/small animal';

import Lost from './LostPet/lostpets';
import SearchView from './SearchView/searchview';
import ProfileView from './ProfileView/profile';
import CreatePetListing from './CreatePetLIsting/CreatePetListing';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    link
} from "react-router-dom";
//import Welcome from './Welcome/welcome';
// import HomeBrowse from './HomeBrowse/homeBrowse';

class App extends Component {
    state = {
        currentUser: {
            address: "4421 n maryland avenue",
            city: "shorewood",
            email: "daniel.f.pichette@gmial.com",
            firstName: "Danny",
            id: 5,
            lastName: "Pichette",
            password: "pass",
            phone: "4149431116",
            state: "Wisconsin",
            username: "dpichette",
            zipcode: "53202",
        },
        allItems: [],
        allPets: [],
        allLost:[],
        allUsers:[],
        PetView:"",
        userListings:[],
        allListings: [],
        username: "",
        password: "",
        viewPet: [],
        viewItem: '',
        petselect: 1,
        localUsers:[],
        localpets:[],
        searchinput: "cat",
        searchresults:[],
        itemsearchresults:[],
        long: null,
        lat: null,
        resources: [
            {
                "business_status": "OPERATIONAL",
                "geometry": {
                    "location": {
                        "lat": 43.0856019,
                        "lng": -87.8878806
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 43.0869626302915,
                            "lng": -87.8863615697085
                        },
                        "southwest": {
                            "lat": 43.0842646697085,
                            "lng": -87.88905953029152
                        }
                    }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Bayshore Veterinary Clinic",
                "opening_hours": {
                    "open_now": false
                },
                "photos": [
                    {
                        "height": 1920,
                        "html_attributions": [
                            "<a href=\"https://maps.google.com/maps/contrib/103212505360886774477\">Bayshore Veterinary Clinic</a>"
                        ],
                        "photo_reference": "Aap_uEBAfKyh1a24axk8eVn8pNK7OKwWdcuWpoicRFRJS1S7mj-A-NvZ95xIyTaZek_J0zH1VRVOhFj8OJ2Csa9kikv2PLZiEe8K1Xm_BNORdVTM_cLtyAthWRHMhlmMRj9gNTMtDwQ9Zn3LlaahmPbytGb9c4KuoO3ny5kSvp9dqJJp8jvz",
                        "width": 1584
                    }
                ],
                "place_id": "ChIJXRyiHC8fBYgRybJ6F3FkKtM",
                "plus_code": {
                    "compound_code": "34P6+6R Shorewood, WI, USA",
                    "global_code": "86MJ34P6+6R"
                },
                "rating": 4.7,
                "reference": "ChIJXRyiHC8fBYgRybJ6F3FkKtM",
                "scope": "GOOGLE",
                "types": [
                    "veterinary_care",
                    "point_of_interest",
                    "establishment"
                ],
                "user_ratings_total": 205,
                "vicinity": "3723 North Oakland Avenue, Shorewood"
            },
            {
                "business_status": "OPERATIONAL",
                "geometry": {
                    "location": {
                        "lat": 43.100171,
                        "lng": -87.9026391
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 43.10143078029149,
                            "lng": -87.90129491970849
                        },
                        "southwest": {
                            "lat": 43.09873281970849,
                            "lng": -87.90399288029151
                        }
                    }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Dr. Nicole Mueller",
                "opening_hours": {
                    "open_now": false
                },
                "place_id": "ChIJZ_j2mWYBBYgRxfte458t6_c",
                "plus_code": {
                    "compound_code": "432W+3W Shorewood, WI, USA",
                    "global_code": "86MJ432W+3W"
                },
                "rating": 5,
                "reference": "ChIJZ_j2mWYBBYgRxfte458t6_c",
                "scope": "GOOGLE",
                "types": [
                    "veterinary_care",
                    "point_of_interest",
                    "establishment"
                ],
                "user_ratings_total": 4,
                "vicinity": "4604 North Wilson Drive, Shorewood"
            },
            {
                "business_status": "OPERATIONAL",
                "geometry": {
                    "location": {
                        "lat": 43.08951039999999,
                        "lng": -87.8785274
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 43.0907146302915,
                            "lng": -87.87717851970849
                        },
                        "southwest": {
                            "lat": 43.0880166697085,
                            "lng": -87.8798764802915
                        }
                    }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Shorewood Animal Hospital",
                "opening_hours": {
                    "open_now": false
                },
                "photos": [
                    {
                        "height": 3024,
                        "html_attributions": [
                            "<a href=\"https://maps.google.com/maps/contrib/111943944525224820212\">Anthony Hoak</a>"
                        ],
                        "photo_reference": "Aap_uEA5tlWG0fjrnYllINWQh_jV6EVcoEBeM6B7rWrShUw4_PzwstNVD27mM_XmKvVIds0MaGtD4gfRayQoB88Spw_EOhRY5pAeVGB18BTYMK4yjM3GUIBqux8_fiuG8IuBJSwgYszRn0hgCOcpnVSe90WzlCzjNlaJHOp41mMPOCyqGRI",
                        "width": 4032
                    }
                ],
                "place_id": "ChIJQ01VmjkfBYgR5rtvUEHXZok",
                "plus_code": {
                    "compound_code": "34QC+RH Shorewood, WI, USA",
                    "global_code": "86MJ34QC+RH"
                },
                "rating": 4.9,
                "reference": "ChIJQ01VmjkfBYgR5rtvUEHXZok",
                "scope": "GOOGLE",
                "types": [
                    "veterinary_care",
                    "point_of_interest",
                    "establishment"
                ],
                "user_ratings_total": 190,
                "vicinity": "2500 East Capitol Drive, Shorewood"
            },
            {
                "business_status": "OPERATIONAL",
                "geometry": {
                    "location": {
                        "lat": 43.10016400000001,
                        "lng": -87.90266659999999
                    },
                    "viewport": {
                        "northeast": {
                            "lat": 43.10142768029151,
                            "lng": -87.90132221970848
                        },
                        "southwest": {
                            "lat": 43.09872971970851,
                            "lng": -87.9040201802915
                        }
                    }
                },
                "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/generic_business-71.png",
                "name": "Dr. Noah's Ark Veterinary Clinic",
                "opening_hours": {
                    "open_now": false
                },
                "photos": [
                    {
                        "height": 1947,
                        "html_attributions": [
                            "<a href=\"https://maps.google.com/maps/contrib/100855737829409289839\">Dr. Noah&#39;s Ark Veterinary Clinic</a>"
                        ],
                        "photo_reference": "Aap_uEB1vGMJHea17NN6s5Hh40GCzk6LFzgEIuhfgL2ZvMJANjyaYgK0ZWTQcKFW6tEYi6epYEAfrttqqCZcENHzHuyk6bfqcVAAUPtMEqP62VBOjQCxLSwOv2sj80EJ0vnxhH02QYiIxbfI792ssavLggJYWg7RqdR9Qe2JuJ_XTS3rAuuy",
                        "width": 2831
                    }
                ],
                "place_id": "ChIJd655SeYeBYgRFJ6o1YTB_q0",
                "plus_code": {
                    "compound_code": "432W+3W Shorewood, WI, USA",
                    "global_code": "86MJ432W+3W"
                },
                "rating": 4.9,
                "reference": "ChIJd655SeYeBYgRFJ6o1YTB_q0",
                "scope": "GOOGLE",
                "types": [
                    "veterinary_care",
                    "point_of_interest",
                    "establishment"
                ],
                "user_ratings_total": 258,
                "vicinity": "4604 North Wilson Drive, Shorewood"
            }
        ]

    }
    componentDidMount(){
        this.getUsers();
        this.getItems();
        this.getPetListings();
        this.getAllLost();   
        //this.getGeocode()
        this.getResources()     
        }

    SetAllListings(){
        const alllistings = this.state.allPets.concat(this.state.allItems)
        this.setState({
            alllistings: alllistings
        });
        console.log('all LISTINGS:',this.state.allListings)
    }


    getUsers = async() => {
        let users = await axios.get(`http://127.0.0.1:8000/Users/`)
        console.log(users)
        this.setState({
            allUsers: users.data,
        })
        console.log('all users:',this.state.allUsers)
        console.log('current users:',this.state.currentUser)
        this.GetlocalUsers();

    };

    getItems = async() => {
        let Items = await axios.get(`http://127.0.0.1:8000/Items/`)
        console.log(Items)
        this.setState({
            allItems: Items.data,
            viewItem: Items.data[1]
        })
        console.log('all Items:',this.state.allItems)
        console.log('view Item:',this.state.viewItem)

    };

    getPetListings = async() => {
        let petListings = await axios.get(`http://127.0.0.1:8000/Pets/`)
        console.log(petListings)
        this.setState({
            allPets: petListings.data,
            viewPet: petListings.data[1],
            localpets: petListings.data
        })
        console.log('all Pets:',this.state.allPets)
        console.log('view Pet:',this.state.viewPet)

    };

    GeyAnimalByType = async(animal) => {
        let all = await axios.get(`http://127.0.0.1:8000/Pets/`)
        let petListings =all.data
        console.log("ALL",petListings)
        var newArray = petListings.filter(function (el) {
            return el.type == animal
          });
          this.setState({
              [animal]: newArray
          })
          console.log("CATS",this.state.animal)
    };

    getGeocode = async() => {
        let adress= '4421 N Maryland Avenue, Shorewood, WI'
        let all = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=apikey`)
        let geocode =all.data.results[0].geometry.location.lng
        console.log("long",geocode)
        
        this.setState({
            lat: all.data.results[0].geometry.location.lat,
            long:all.data.results[0].geometry.location.lng,
        })
        console.log(this.state)
    };

    getResources = async() => {
        let lat= 43.0963042;
        let lng = -87.8828156;
        let all = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.0963042,-87.8828156&radius=1500&type=veterinary_care&key=API KEY`)
        console.log("RESOURCES",all)
        
    };

    getAllLost = async() => {
        let lostPets = await axios.get(`http://127.0.0.1:8000/LostPets/`)
        console.log(lostPets)
        this.setState({
            allLost: lostPets.data,
        })
        console.log('Lost Pets:',this.state.allLost)
    };

    GetPet(selected){
        var newArray = this.state.allPets.filter(function (el) {
            return el.id==selected
          });
          this.setState({
              viewPet: newArray[0]
          })
        console.log("PETPETPETPETPET");
        console.log(this.state.viewPet)
        console.log(this.state.viewPet.name)

    }

    SetCurrentUser(input){
        try{this.setState({
            currentUser : input
        })
        console.log(this.state.currentUser)
        console.log("input is:",input)
        console.log(this.state.currentUser.username)
    }
    catch(error){
        this.setState({
            currentUser: "pickle",
        })
    }

        
    };
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log("THEORY")
        console.log(this.state.searchinput)
        
        };

    GetlocalUsers(){
        var newArray = this.state.allUsers.filter(function (el) {
            return el.city==="chicago"})
        this.setState({
            localUsers: newArray,
        })
            console.log("NEWARRAY",newArray);
        this.getLocalListings()
    }


    getLocalListings(){
        for (let i = 0; i < this.state.localUsers.length; i++) {
            var newArray = this.state.localpets.filter(function (el) {
                return el.user===this.state.localUsers[i].id})
            this.setState({
                localpets: newArray,
            })
        }
        console.log(this.state.localpets) 
    }

    getlocalpets(event, input){
        event.preventDefault()
        var newarray = this.state.allPets.filter( function (el) {
            return el.location.includes(input)
        });
        this.setState({
            localpets: newarray
        })
        console.log(newarray)
        console.log("Shorewood")
    }
     getSearchResults (event){
        var newarray = this.state.allPets.filter( function (el) {
            return el.location==(event.target.value) || el.type==(event.target.value) || el.name.includes(event.target.value) || el.state==(event.target.value) || el.price==(event.target.value) || el.gender==(event.target.value)
        });
        var items = this.state.allItems.filter( function (el) {
            return el.location==(event.target.value) || el.animal==(event.target.value) || el.name.includes(event.target.value) || el.category==(event.target.value) || el.price==(event.target.value) || el.age===(event.target.value)
        });
        this.setState({
            itemsearchresults: items,
            searchresults: newarray,
            searchinput: event.target.value
        })
        console.log(newarray)
        console.log(this.state.searchresults)
    }
    checkstate(){
        console.log("CURRENT STAE IS")
        console.log(this.state)
    }
    viewpet(pet){
        // var listing= this.state.allLost.filter( function (p) {
        //     return p.id==pet.id
        // })
        // console.log(listing[0])
        console.log(pet);
    }
 

    render() {
        return (
            <div className="MainWrapper">
                <Router>
                    <div>
                        <Header state={()=>this.state} handleChange={(event)=>this.getSearchResults(event)} />
                        <Navigation />
                        <div className="Content">
                            <Switch>
                                <Route path="/" exact component={Home}>
                                    <Home state={this.state} viewpet={()=>this.GetPet()} getlocal={(event)=>this.getlocalpets(event,"shorewood")} viewpet={()=>this.viewpet()}/>
                                </Route>
                                <Route path="/Register" component={Register}>
                                    <Register state={this.state} setuser={()=>this.SetCurrentUser()}/>
                                </Route>
                                <Route path="/Profile" component={ProfileView}>
                                    <ProfileView state={this.state} viewpet={()=>this.GetPet()}/>
                                </Route>
                                <Route path="/SearchResults" component={SearchView}>
                                    <SearchView state={this.state} viewpet={()=>this.GetPet()}/>
                                </Route>
                                <Route path="/Lost" component={Lost}>
                                    <Lost lostpets={this.state.allLost} state={this.state} viewpet={()=>this.GetPet()}/>
                                </Route>
                                <Route path="/UpdateProfile" component={UpdateProfile}>
                                    <UpdateProfile state={this.state}/>
                                </Route>
                                <Route path="/PetView" component={PetView}>
                                    <PetView state={this.state} viewpet={()=>this.GetPet()}/>
                                </Route>
                                <Route path="/Login" component={Login}>
                                    <Login handleChange={(event)=>this.handleChange(event)}getCurrentUser={(event, usernameinput, passwordinput) => this.SetCurrentUser(event, usernameinput, passwordinput)} state={this.state}/>
                                </Route>
                                <Route path="/AddPetListing" component={CreatePetListing}>
                                    <CreatePetListing state={this.state}/>
                                </Route>
                                <Route path="/Resources" component={Resources}>
                                    <Resources state={this.state}/>
                                </Route>
                                <Route path="/listing" component={ViewListing}>
                                    <  ViewListing state={this.state} />
                                </Route>
                                <Route path="/ItemView" component={ItemView}>
                                    <  ItemView state={this.state}/>
                                </Route>
                                <Route path="/CreateItemListing" component={CreateItemListing}>
                                    <  CreateItemListing />
                                </Route>
                                <Route path="/LostPetForm" component={LostPetForm}>
                                    <  LostPetForm />
                                </Route>
                                <Route path="/Cat" component={Cat}>
                                    <  Cat state={this.state}/>
                                </Route>
                                <Route path="/Dog" component={Dog}>
                                    <  Dog state={this.state}/>
                                </Route>
                                <Route path="/Reptile" component={Reptile}>
                                    <  Reptile state={this.state}/>
                                </Route>
                                <Route path="/SmallAnimal" component={SmallAnimal}>
                                    <  SmallAnimal state={this.state}/>
                                </Route>
                                <Route path="/Fish" component={Fish}>
                                    <  Fish state={this.state}/>
                                </Route>
                                <Route path="/Bird" component={Bird}>
                                    <  Bird state={this.state}/>
                                </Route>
                                <Route path="/Local" component={Local}>
                                    <  Local state={this.state}/>
                                </Route>
                            </Switch>
                            {/* <button onClick={()=>this.SetCurrentUser("potato")}>currentUser</button>
                            <button onClick={(event)=>this.GetPet(1)}>getpet</button>
                            <button onClick={(event)=>this.getlocalpets(event, this.state.currentUser.city)}>getlocal</button>
                            <button onClick={(event)=>this.getSearchResults(event)}>results</button>
                            <button onClick={()=>this.checkstate()}>CheckState</button>
 */}


                
                    
                    {/* <Register/> */}
                    {/* <Login/> */}
                    {/* <SearchView/> */}
                    {/* <PetView/> */}
                    {/* <ProfileView/> */}
                    </div>
                    </div>
                </Router>
            </div>

        
            

        );
    }
}
export default App;