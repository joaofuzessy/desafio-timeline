import React, { Component } from 'react';
import './CardHeader.scss';
import  Icon from '../Icon'


class CardHeader extends Component{
    render(){
    return(
    <div className="CardHeader">
        <ul>
            <li><Icon path={'calendar'}/>{this.props.event.dataVenda}</li>
            <li><Icon path={'clock'}/>{this.props.event.horaVenda}</li>
            <li><Icon path={'place'}/><span> {this.props.event.nomeLoja}</span></li>
            <li><Icon path={'money'}/><span>R${((this.props.event.vendasLoja).toFixed(2)).replace('.',',')}</span></li>
        </ul>
    </div>
    )
    }
}


export default CardHeader;