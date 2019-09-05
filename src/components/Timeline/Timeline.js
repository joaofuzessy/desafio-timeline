import React, { Component } from 'react';
import './Timeline.scss';
import api from '../../services/api';
import structureData from '../../services/data';
import CardHeader from '../CardHeader';


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
                    <table>
                        <thead>
                            {//Fazer outro map aqui para pegar cada produto e depois componentizar tudo
                            }
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Camisa azul</td>
                                <td>R$100,00</td>
                            </tr>
                        </tbody>
                    
                    </table>
                </div>  
            </li>
        </ul>
            
        
        )))
    //<div>Oi  {this.state.compras.length}</div> ;

    
      
}
}


export default Timeline;