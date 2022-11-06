import { format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatDate(date: Date, string ='dd/MM/yyyy') {
    return format(date ,string,{locale:ptBR})
}