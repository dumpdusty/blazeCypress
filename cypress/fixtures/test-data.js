const chance = require(`chance`).Chance()

const testData = {
    randomUserEmail : chance.email({domain: "pirate.com"})
}


export default testData
