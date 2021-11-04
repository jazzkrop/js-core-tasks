const numberOfStations = 5

const stations = [
  {
    power: 64
  },
  {
    power: 73
  },
  {
    power: 95
  },
  {
    power: 50
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
    numberOfFlats: 200
  },
  {
    numberOfFlats: 350
  },
  {
    numberOfFlats: 275
  }
]
const requiredEnergyForFlat = 5
const electroLines = [
  {
    power: 4,
    price: 20
  },
  {
    power: 2,
    price: 21
  },
  {
    power: 5,
    price: 19
  },
  {
    power: 1,
    price: 22
  }
]

let requiredEnergy = 0
let ownedEnergy = 0
let price = 0

stations.forEach(el => {
  ownedEnergy += el.power
});
batteries.forEach(el => {
  ownedEnergy += el.power
});
console.log(`owned energy: ${ownedEnergy}`)
houses.forEach(el => {
  requiredEnergy += el.numberOfFlats
});