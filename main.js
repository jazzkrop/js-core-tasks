const numberOfStations = 5

const stations = [
  {
    power: 50
  },
  {
    power: 73
  },
  {
    power: 31
  },
  {
    power: 9
  },
  {
    power: 8
  },
  {
    power: 86
  }
]
const batteries = [
  {
    power: 1
  },
  {
    power: 3
  },
  {
    power: 5
  }
]

const houses = [
  {
    numberOfFlats: 13
  },
  {
    numberOfFlats: 20
  },
  {
    numberOfFlats: 20
  }
]
const requiredEnergyForFlat = 5
const electroLines = [
  {
    power: 100,
    price: 20
  },
  {
    power: 150,
    price: 21
  },
  {
    power: 175,
    price: 19
  },
  {
    power: 20,
    price: 22
  }
]

let requiredEnergy = 0
let ownedEnergy = 0
let deltaEnergy = 0
let price = 0

stations.forEach((el) => {
  ownedEnergy += el.power
})
batteries.forEach((el) => {
  ownedEnergy += el.power
})
console.log(`owned energy: ${ownedEnergy}`)
houses.forEach((el) => {
  requiredEnergy += el.numberOfFlats * requiredEnergyForFlat
})
console.log(`req energy: ${requiredEnergy}`)

deltaEnergy = ownedEnergy - requiredEnergy
let indicator = deltaEnergy > 0 ? 1 : -1

electroLines.forEach((el) => {
  if (deltaEnergy == 0) {
    return
  }
  if (Math.abs(deltaEnergy) > el.power){
    price += el.power * el.price
    deltaEnergy -= el.power * indicator
  }
  else {
    price += deltaEnergy * el.price * indicator
    el.power -= Math.abs(deltaEnergy)
    deltaEnergy = 0
  }
})

if ((ownedEnergy - requiredEnergy) == 0) {
  console.log("We have exactly how much we need")
}
else if (ownedEnergy - requiredEnergy < 0) {
  console.log(`We need to pay: ${price}`)
} else {
  console.log(`We can earn: ${price}`)
}