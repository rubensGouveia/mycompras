
export function formatCurrency(number:number) {
    return `R$ ${number.toFixed(2).replace('.',',')}`
}