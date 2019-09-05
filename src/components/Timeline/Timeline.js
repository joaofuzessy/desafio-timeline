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
    }


    loadTimeline = async () => {
        const response = await api.get('/events.json');
        const structure = response.data.events;
        
        
        this.setState({compras: structureData(structure)});
    }




render(){
    return (
        
        this.state.compras.map((event,idx) => (
        //<h1 key={event.timestamp}>{event.event}</h1>
        <ul>
            <li>
                <div className="Card">
                    <CardHeader event={event}/>
                    <TableProdutos/>
                </div>  
            </li>
        </ul>
            
        
        )))
    //<div>Oi  {this.state.compras.length}</div> ;

    
      
}
}


export default Timeline;