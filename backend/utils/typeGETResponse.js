function typeGETResponse (data){
    if(Array.isArray(data))
        return {
            Items: data,
            Quantity:data.length
        }
    return data;
}
