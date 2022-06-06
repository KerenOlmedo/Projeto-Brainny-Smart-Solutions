import fs from 'fs';
import { Cliente } from './type/Cliente';

const data = fs.readFileSync('./lista.json', 'utf8')

const lista:[] = JSON.parse(data)

function busca() {
  lista.map((i: Cliente) => console.log(i.name))
}

busca()