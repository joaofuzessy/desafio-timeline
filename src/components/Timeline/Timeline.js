import React from 'react';
import './Timeline.scss';

const Timeline = () =>{
    return(
    <ul>
        <li>
            <div className="Card">
            <div className="CardHeader">
            <ul>
                <li>Dia</li>
                <li>Hora</li>
                <li>Local</li>
                <li>Valor Total</li>
            </ul>
            </div>
            <table>
                <thead>
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
    );
}

export default Timeline;