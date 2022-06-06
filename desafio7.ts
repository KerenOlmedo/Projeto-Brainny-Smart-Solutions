import fs from 'fs';
import { Cliente } from './type/Cliente';

const data = fs.readFileSync('./lista.json', 'utf8')

let lista: [] = JSON.parse(data)

function busca(caracter: string) {
lista.filter((cliente: Cliente) => {
  let busca = caracter.replace(new RegExp("/" + caracter + "/"), 'replacement')
  let primeiroNome = cliente.name.split(" ")
  if(primeiroNome[0].match(busca)){
    console.log(primeiroNome[0]);
  }
})
}
busca('L')