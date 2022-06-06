import fs from 'fs';
import { Cliente } from './type/Cliente';

const data = fs.readFileSync('./lista.json', 'utf8')

const lista:[] = JSON.parse(data)

function busca(caracter: string) {
  lista.filter((cliente: Cliente) => {
    let busca = caracter.replace(new RegExp("/" + caracter + "/"), 'replacement')
    let primeiroNome = cliente.name.split(" ")
    console.log(primeiroNome[0]);
  })
}
busca("")