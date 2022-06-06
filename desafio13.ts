import fs from 'fs';
import { Cliente } from './type/Cliente';
const data = fs.readFileSync('./lista.json', 'utf8')

const lista: Cliente[] = JSON.parse(data)

function inserir(name: string, birthDate: string, gender: string, lastPurchaseDate: string, countPurchase: string){
  const cliente: Cliente = {
    name: name,
    birthDate: new Date(birthDate),
    gender: gender,
    lastPurchaseDate: new Date(lastPurchaseDate),
    countPurchase: countPurchase
  }
  lista.unshift(cliente)
  console.log(lista)
}

inserir('Joao Silva','2000-06-05T21:35:02.443Z','male','2018-06-05T21:35:02.443Z','1')


