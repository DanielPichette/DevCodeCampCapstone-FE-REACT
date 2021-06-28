import React, { Component} from 'react';

class Header extends Component {
    state = { 
        tbd:"tbd",
     }
    render() { 
        return ( 
            <div className='HeaderWrapper'>

                <div className='HeaderLogo'>
                    <h1>LeashLocal</h1>
                </div>

                <div className='HeaderSearch'>
                    <form>
                        <input type="text" name="searchbar" className='SearchBar' />
                    </form>
                </div>

                <div className='HeaderAccount'>
                    <h1>Account</h1>
                    
                </div>
            </div>
         );
    }
}
 
export default Header;