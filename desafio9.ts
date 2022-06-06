import fs from 'fs';
import { Cliente } from './type/Cliente';

const data = fs.readFileSync('./lista.json', 'utf8')

let lista: [] = JSON.parse(data)

function busca(caracter: string) {
let message = ''
let names = lista.reduce((previousValue, cliente: Cliente) => {  
  let busca = caracter.replace(new RegExp("/" + caracter + "/"), 'replacement')
  let primeiroNome = cliente.name.split(" ")
    if(primeiroNome[0].match(busca)){
      message = `O nome: ${caracter} está contido na lista!`  
    }
    return message
  }, {})

  if(names){
    console.log(names);
  }else{
    console.log(`O nome: ${caracter} não está contido na lista!`)
  }


}
busca('Maria')
