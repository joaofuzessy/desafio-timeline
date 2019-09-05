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
    const dateFormated = data;
    return dateFormated;
}



const structureData = (structure) =>{ 
    const comprasArray = [];
    let i = 0;
    structure.map((element, ind)=>{ // Itera a primeira vez para achar os obj do tipo "comprou"
        
        if (element.event === "comprou"){
            
            comprasArray[i] = [];
            let transactionIdloja = checkTransactionId(element.custom_data);
            let storeName = checkStoreName(element.custom_data);
            let salesDate = formatDate(element.timestamp);
            let storeVendas = element.revenue;
            comprasArray[i].nomeLoja = storeName;
            comprasArray[i].transactionID = transactionIdloja;
            comprasArray[i].vendasLoja = storeVendas;
            comprasArray[i].dataVenda = salesDate; 


            const itensCompra=[];
            structure.map((element)=>{ // Itera novamente para verificar os produtos("comprou-produto") com o mesmo Transaction ID
                if(element.event === "comprou-produto"){
                    let transactionIdProduto = checkTransactionId(element.custom_data);
                    if (transactionIdloja === transactionIdProduto){
                        itensCompra.push(element);
                    }
                }
               
                return 0;
            })
            comprasArray[i].produtos = itensCompra;
            i++;
        }
        return 0;
    })   
    
    
    return comprasArray;
} 

export default structureData;