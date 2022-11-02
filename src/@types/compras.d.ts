export interface ICompra{
    estabelecimento:string
    produtos: IProduto[]
    valorCompra: number
}

  
export interface IProduto{ 
    codigo: string;
    nome: string;
    quantidade: number;
    unidadeMedida: string;
    valorUnitario: number;   
    valorTotal: number;   
}