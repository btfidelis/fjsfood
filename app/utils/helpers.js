

export function formataPreco (preco){
    const decimal = '00'

    if(preco % 1 !== 0){
        return preco.toString().replace('.',',')
    }

    return preco.toString() + "," + decimal
    


}