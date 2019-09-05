import React, { Component } from 'react';

import './TableProdutos.scss';




class TableProduto extends Component{

    loadProdutos = (produto) =>{

        let nomeProduto = '';
        produto.custom_data.forEach(element => {
                if(element.key==="product_name"){
                     nomeProduto =  element.value;
                }
                return 0;
            }
        )
            

        let valorProduto = '';
        produto.custom_data.forEach(element => {
                if(element.key==="product_price"){
                     valorProduto =  element.value;
                }
                return 0;
            }
        )


        return (
            <tr>
                <td>{nomeProduto}</td>
                <td>R${((valorProduto).toFixed(2)).replace('.',',')}</td>
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