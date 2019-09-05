import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardHeader.scss';
import  Icon from '../Icon'


class CardHeader extends Component{
    render(){
    return(
    <div className="CardHeader">
        <ul>
            <li>{this.props.event.dataVenda}</li>
            <li>Hora</li>
            <li><Icon path={'place'}/><span> {this.props.event.nomeLoja}</span></li>
            <li><Icon path={'money'}/><span>R${this.props.event.vendasLoja}</span></li>
        </ul>
    </div>
    )
    }
}


export default CardHeader;