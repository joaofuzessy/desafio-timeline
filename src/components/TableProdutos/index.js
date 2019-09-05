import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TableProdutos.scss';



class TableProduto extends Component{
    render(){
    return(
        <div className="TableProdutos">
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
       )
    }
}


export default TableProduto;