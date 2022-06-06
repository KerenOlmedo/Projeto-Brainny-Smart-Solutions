import fs from 'fs';
import { Cliente } from './type/Cliente';
const data = fs.readFileSync('./lista.json', 'utf8')

const lista:[] = JSON.parse(data)

function busca() {
  lista.filter((cliente: Cliente) => {
    if(parseInt(cliente.countPurchase) > 15){
      console.log(cliente);
    }
  })
}

busca()