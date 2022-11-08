export interface ICompra {
    id:string
    estabelecimento: string
    produtos: IProduto[]
    valorCompra: number
    created_at?: string
    endereco?:string
}


export interface IProduto {
    codigo: string;
    nome: string;
    quantidade: number;
    unidadeMedida: string;
    valorUnitario: number;
    valorTotal: number;
}


export interface IGetHome {
    orcamento: Orcamento
    compras: ICompra[]
  }
  
  export interface Orcamento {
    id: string
    valor: number
    mesAno: string
    created_at: string
    updated_at: string
  }
    
