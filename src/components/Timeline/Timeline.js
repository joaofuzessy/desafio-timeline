import React, { Component } from 'react';
import './Timeline.scss';
import api from '../../services/api';

class Timeline extends Component{
    
    state = {
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
                        
                if(element.key==="transaction_id"){
                    transactionID = element.value;             
                }
                
            });
            return transactionID;
        }


        const structureData = (structure) =>{ 
            const comprasArray = [];
            
            structure.map((e)=>{ // Itera a primeira vez para achar os obj do tipo "comprou"
                
                if (e.event === "comprou"){
                    
                    let transactionIdloja = checkTransactionId(e.custom_data);
                    const itensCompra=[];

                    structure.map((e)=>{ // Itera novamente para verificar os produtos("comprou-produto") com o mesmo Transaction ID
                        
                        let transactionIdProduto = checkTransactionId(e.custom_data);
                        
                        if(e.event === "comprou-produto" && transactionIdloja === transactionIdProduto){
                            itensCompra.push(e);
                            
                        }
                    })
                    
                    e.produtos = itensCompra;
                    
                    comprasArray.push(e);
 
                }
                
            })
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

// const Timeline = () =>{
//     return(
//     <ul>
//         <li>
//             <div className="Card">
//             <div className="CardHeader">
//             <ul>
//                 <li>Dia</li>
//                 <li>Hora</li>
//                 <li>Local</li>
//                 <li>Valor Total</li>
//             </ul>
//             </div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Produto</th>
//                         <th>Preço</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Camisa azul</td>
//                         <td>R$100,00</td>
//                     </tr>
//                 </tbody>
            
//             </table>
//             </div>  
//         </li>
//     </ul>
//     );
// }

export default Timeline;