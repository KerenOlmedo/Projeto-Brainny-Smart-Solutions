import { faker } from '@faker-js/faker';
import fs from 'fs';

let lista = []

function gerar() {
  const name = faker.name.findName();

  const birthDate = faker.date.birthdate({
    max: 2006,
    min: 1910,
  })

  const gender = faker.name.gender()

  const lastPurchaseDate = faker.date.between('2010-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z')

  const countPurchase = faker.random.numeric(2)

  return {name, birthDate, gender, lastPurchaseDate, countPurchase}
}

for (let index = 0; index < 1000; index++) {
  const element = index;
  lista.push(gerar())
}

const listaJson = JSON.stringify(lista)

fs.writeFile('lista.json', listaJson, (err) => {
  if (err) {
    console.log(err)
  }
})
