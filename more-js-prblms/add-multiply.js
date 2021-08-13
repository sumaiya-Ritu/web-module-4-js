/*
chairWood=3cft/chair  c=cubic
tableWood=10cft/table
bedWood=50cft/bed
*/

function woodCalc(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    // all add ups
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;

    return totalWood;
}

const firstOption = woodCalc(1, 1, 1);
console.log(firstOption);