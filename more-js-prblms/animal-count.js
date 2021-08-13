function animalCount(miles) {
    const animalDensityFirst10PerMile = 10;
    if (miles <= 10) {
        const count = mile * animalDensityFirst10PerMile;
        return count;
    }
    else if (miles <= 20) {
        const first1DensityAnimals = 10 * animalDensityFirst10PerMile;
        const restMiles = miles - 10;
        const secondDensityAnimals = restMiles * animalDensitySecondPer10Miles;
    }
}
const animals = animalCount(8);
console.log(animals);