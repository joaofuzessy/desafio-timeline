import React, { Component } from 'react';
import api from '../../services/api';
import Timeline from '../../components/Timeline';

class Main extends Component{
    
    state ={
        compras: [],
    }
    
    
    componentDidMount(){
        this.loadTimeline();
    }

    loadTimeline = async () => {
        const resp = await api.get('/events.json');
        const structure = resp.data.events;
        

        const checkTransactionId = (data) =>{
            let transactionID;
            data.forEach(element => {
                        
                if(element.key=="transaction_id"){
                    transactionID = element.value;
                    
                }
                
            });
            return transactionID;
        }


        const structureData = (structure) =>{ 
            const comprasArray = [];
            
            structure.map((e)=>{
                
                
                if (e.event == "comprou"){
                    
                    let transactionID = checkTransactionId(e.custom_data);
                    const itensCompra=[];
                    
                    structure.map((e)=>{
                        
                        let transactionID2 = checkTransactionId(e.custom_data);
                        if(e.event != "comprou" && transactionID==transactionID2){
                            itensCompra.push(e);
                            
                        }
                    })
                    
                    e.outros = itensCompra;
                    
                    comprasArray.push(e);
 
                }
                
            } )
            console.log(comprasArray);
            return comprasArray;
        } 


        this.setState({compras: structureData(structure)});
    }

    

    render(){
        return (
            <div>
                {this.state.compras.map(event => (
                    <h1 key={event.timestamp}>{event.event}</h1>
                ))}
            </div>
        );
    }
}

export default  Main;
