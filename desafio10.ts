import fs from 'fs';
import { Cliente } from './type/Cliente';

const data = fs.readFileSync('./lista.json', 'utf8')

const lista:[] = JSON.parse(data)

function busca() {
  let counter = 0
  let countedPurchase = lista.reduce((previousValue, cliente: Cliente) => {  
    if(cliente.countPurchase){
      counter = counter + parseInt(cliente.countPurchase)
    }
    return counter
    }, {})
  
    console.log(countedPurchase);
  }
  
  busca()