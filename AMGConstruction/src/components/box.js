
import React, { Component } from 'react';

const Box = (props) => ( <div className='box'>
            <div className='col-md-12'>
                <h1 className='box-title'>{props.title}</h1>
                <img className='box-img' src={props.img}/>
                <button className='box-button'>{props.title}</button>
            </div>

        </div> 
        );
 
 
export default Box;