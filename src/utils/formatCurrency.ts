
export function formatCurrency(number:number,moeda =true) {
    return moeda ? `R$ ${number.toFixed(2).replace('.',',')}`:number.toFixed(2).replace('.',',')
}