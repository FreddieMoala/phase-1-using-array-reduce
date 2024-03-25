const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// function totalBatteries(array, func, initVal){
//     let accum = initVal;
//     for ( const element of array){
//         accum = func(element, accum)
//     }
//     return accum;
// }

// function sumBatteries(element, accum){
//     return element + accum;
// }

// console.log(totalBatteries(batteryBatches, sumBatteries, 0));

const totalBatteries = batteryBatches.reduce((total, element) => element + total, 0);