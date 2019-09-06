import React, { Component } from 'react';
import './Card.scss';
import Icon from '../Icon'; 

class Card extends React.Component{
    render(){
        return(
            
            <div className="Card">
                <div className="Check"><Icon path='check' size='12px' color='#1bb83f'></Icon></div>
                <div className="arrow"></div>
                {this.props.children}
            </div>
        )

    }
       
}


export default Card;