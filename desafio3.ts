import fs from 'fs';
import { Cliente } from './type/Cliente';

const data = fs.readFileSync('./lista.json', 'utf8')

const lista:[] = JSON.parse(data)

function busca() {
  lista.forEach((cliente: Cliente,index) => console.log(`Cliente: ${index} ${cliente.name}`))
}

busca()