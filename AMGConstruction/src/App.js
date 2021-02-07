import React, { Component } from 'react';
import './App.css';

import Box from './components/box';
import amazinglogo from './assets/amazinglogo.png';
import ebay from './assets/ebay.jpg';
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import insta from './assets/insta.png'
import tcgplayer from './assets/tcgplayer.jpg';
const API_KEY = '';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    };

    render(){
        return (
        <div>
            <div className='container-fluid'>
                <div className = 'row header'>
                    <div className = 'col-md'>
                    <img className = 'header-logo' src={amazinglogo}/>
                    </div>
                    <div className = 'col-md-11'>
                    <h1>Amazing Games TCG</h1>
                    </div>
                </div>
                <div className='header-spacer row'>
                    
                </div>
                
                <div className = 'row content'>
                    <div className = 'col-lg-12 box-col'>
                    <div className='banner'>
                        <h2 className = 'banner-text'>Website Under Construction.</h2>
                    </div>
                    <p className = 'banner-subtext'>In the meantime, you can still shop with us on these platforms:</p>
                    </div>
                    <div className = 'row content-center'>
                        <div className = 'col-lg-4 box-col'>
                            <Box title='Ebay' img={ebay}/>
                        </div>
                        <div className = 'col-lg-4 box-col'>
                            <Box title='TCG Player' img={tcgplayer}/>
                        </div>
                        <div className = 'col-lg-4 box-col'>
                            <div className = 'box'>
                            <h1 className='box-title'>Visit in Store</h1>
                            <h3 className='box-subtitle'>(Appointment only)</h3>
                            <div className='box-info'>
                                <p>Contact Number: 646-600-3889</p>
                                <p>Store Address: 3189 Richmond Road Staten Island, New York</p>
                                <p>Contact Email: AmazingGames@gmail.com</p>
                            </div>
                            <button className='button box-button'>Email</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row footer'>
                    <div className='row'>
                        <div className='col-md-3 footer-col'>
                            
                            <h3>About</h3>
                            <hr/>
                            <p>Games Store based in Staten Island, New York</p>
                            
                        </div>
                        <div className='col-md-3 footer-col'>
                            <h3>Products</h3>
                            <hr/>
                            <p>MTG, DBZ Super, Yuhgioh, Accesories, Pop Vinyls </p>
                           
                        </div>
                        <div className='col-md-3 footer-col'>
                            <h3>Social Media</h3>
                            <hr/>
                            <div className='row'>
                                <div className='col'>
                                    <a><img className='footer-icon' src={ebay}></img></a>
                                    <a><img className='footer-icon' src={facebook}></img></a>
                                    <a><img className='footer-icon'src={insta}></img></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 footer-col'>
                            <h3>Contact</h3>
                            <hr/>
                            <p>Phone#: 646-600-3889</p>
                            <p>Address: 3189 Richmond Rd</p>
                            <p>Email: AmazingGames@gmail.com</p>
                            
                        </div>
                    </div>
                    <div className='row footer-tm'>
                        <p>© 2021 Amazing Games TCG. All rights Reserved .</p>
                    </div>
                </div>
            
            </div>
        </div>
        );
    }
}

export default App;