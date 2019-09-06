import React, { Component } from 'react';

import './TableProdutos.scss';




class TableProduto extends Component{
    
    loadProdutos = (produto) =>{
        return (
            <tr>
                <td>{produto.nomeProduto}</td>
                <td>R${((produto.valorProduto).toFixed(2)).replace('.',',')}</td>
            </tr>
        )
    } 


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
                {this.props.event.produtos.map((produto,idx) => (
                    this.loadProdutos(produto)
                ))}
                </tbody>
            
            </table>
    
        </div>
       )
    }
}


export default TableProduto;