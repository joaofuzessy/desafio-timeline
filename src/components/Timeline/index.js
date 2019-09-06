import React, { Component } from 'react';
import './Timeline.scss';
import api from '../../services/api';
import structureData from '../../services/data';
import CardHeader from '../CardHeader';
import TableProdutos from '../TableProdutos';
import Card from '../Card';


class Timeline extends Component{
    state = {
        compras:[]
    }
        

    componentDidMount(){
        this.loadTimeline();
    }


    loadTimeline = async () => {
        const response = await api.get('/events.json');
        const structure = response.data.events;
        
        
        this.setState({compras: structureData(structure)});
    }




render(){
    return (
        <div className="TimeLine">

        {this.state.compras.map((event,idx) => (
        
        <ul key={idx}>
            <li>
                <Card>
                    <CardHeader event={event}/>
                    
                    
                    <TableProdutos event={event}/>
                    
                </Card>  
            </li>
        </ul>
        
        
        ))
        }

        </div>
        )      
    }
}


export default Timeline;