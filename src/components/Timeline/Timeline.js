import React, { Component } from 'react';
import './Timeline.scss';
import api from '../../services/api';
import structureData from '../../services/data';
import CardHeader from '../CardHeader';
import TableProdutos from '../TableProdutos';

class Timeline extends Component{
    state = {
        compras:[]
    }
        

    componentDidMount(){
        this.loadTimeline();
        this.renderTimeline();
    }


    loadTimeline = async () => {
        const response = await api.get('/events.json');
        const structure = response.data.events;
        
        
        this.setState({compras: structureData(structure)});
    }

    renderTimeline = () => {
        return (
            this.state.compras.map((event,idx) => (
            
            <ul>
                <li>
                    <div className="Card">
                        <CardHeader event={event}/>
                        
                        
                        <TableProdutos event={event}/>
                        
                    </div>  
                </li>
            </ul>
            )
            )
        )           
        }


    render(){
        return (
            <div className="TimeLine">
                {this.renderTimeline()}
            </div>
            
            
            )
        
        
    }
    }


    export default Timeline;