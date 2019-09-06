const checkTransactionId = (data) =>{
    let transactionID;
    data.forEach(element => {  
        if(element.key === "transaction_id"){
            transactionID = element.value;             
        } 
    });
    return transactionID;
}


const checkStoreName = (data) =>{
    let storeName;
    data.forEach(element => {   
        if(element.key === "store_name"){
            storeName = element.value;             
        }
    });
    return storeName;
}



const formatDate = (data) =>{
    const dataEntrada = new Date(data);
    const dia = dataEntrada.getDate();
    const mes = dataEntrada.getMonth();
    const ano = dataEntrada.getFullYear();
    const DataSaida = `${dia}/${mes}/${ano}`;
    return DataSaida;
}


const formatTime = (data) =>{
    const dataEntrada = new Date(data);
    const hora = dataEntrada.getHours();
    const minutos = dataEntrada.getMinutes();
    const HoraSaida = `${hora}:${minutos}`;
    return HoraSaida;
}

const getNomeProduto = (custom_data) =>{
    let nomeProduto = '';
    custom_data.forEach(element => {
            if(element.key==="product_name"){
            nomeProduto = element.value;   
            }  
        }
    )
    return nomeProduto;
}

const getValorProduto = (custom_data) =>{
    let valorProduto = '';
    custom_data.forEach(element => {
            if(element.key==="product_price"){
            valorProduto = element.value;    
            } 
        }
    )
    return valorProduto;
}



const structureData = (structure) =>{ 
    const comprasArray = [];
    let i = 0;
    structure.map((element, ind)=>{ // Itera a primeira vez para achar os obj do tipo "comprou"
        
        if (element.event === "comprou"){
            
            let transactionIdloja = checkTransactionId(element.custom_data);
            let storeName = checkStoreName(element.custom_data);
            let salesDate = formatDate(element.timestamp);
            let salesTime = formatTime(element.timestamp);
            let storeVendas = element.revenue;
            let compra = {
                nomeLoja: storeName,
                transactionID: transactionIdloja,
                vendasLoja: storeVendas,
                dataVenda: salesDate,
                horaVenda: salesTime
            }
            let itensCompra=[];

            comprasArray.push(compra);
           

            structure.map((element)=>{ // Itera novamente para verificar os produtos("comprou-produto") com o mesmo Transaction ID
                if(element.event === "comprou-produto"){
                    let transactionIdProduto = checkTransactionId(element.custom_data);
                    
                    if (transactionIdloja === transactionIdProduto){
                        //itensCompra.push(element);
                        let nomeProduto = getNomeProduto(element.custom_data);
                        let valorProduto = getValorProduto(element.custom_data);
                        
                        let produto = {
                                        nomeProduto: nomeProduto,
                                        valorProduto: valorProduto
                                         }
                        itensCompra.push(produto);
                    }
                }
               
                return 0;
            })
            
            comprasArray[i].produtos = itensCompra;
            i++;
        }
        return 0;
    })   
    
    console.log(comprasArray);
    return comprasArray;
} 







export default structureData;