import fs from 'fs';
import { Cliente } from './type/Cliente';
const data = fs.readFileSync('./lista.json', 'utf8')

const lista:[] = JSON.parse(data)


function calculatelastPurchaseDate(lastPurchaseDateCliente: Date) {
  const data = new Date(lastPurchaseDateCliente);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const birthdayThisYear = new Date(data.getDay(), data.getMonth(), currentYear);
  let lastPurchaseDate = currentYear - data.getFullYear();
  
  if(birthdayThisYear > currentDate) {
    lastPurchaseDate--;
  } 
  return lastPurchaseDate;
}

function busca() {
  lista.filter((cliente: Cliente) => {
    const dataConvertida = calculatelastPurchaseDate(cliente.lastPurchaseDate)
    if(dataConvertida >= 1){
      console.log(cliente);
    }
  })
}
busca()