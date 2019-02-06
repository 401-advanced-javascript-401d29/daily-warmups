'use strict';

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let practiceFor  = (array) => {
    for(let i = 0 ; i < array.length ; i++) {
        console.log(array[i]);
    }
}

let practiceWhile  = (array) => {
    let incrementor = 0;
    while(incrementor < array.length) {
        console.log(array[incrementor]);
        incrementor++;
    }
}

// practiceFor(numberArray);
// practiceWhile(numberArray);

let practiceMap = (array, callback) => {
    const newArray = [];
    for(let i = 0 ; i < array.length ; i++){
        newArray[i] = callback(array[i]);
    }
    return newArray;
}

let practiceMapped = practiceMap(numberArray, x => x + 1);
// practiceFor(practiceMapped);

let practiceFilter = (array, callback) => {
    const newArray = [];
    for (let i in array){
        if(callback(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
let practiceFiltered = numberArray.filter(x => x > 5)
practiceFor(practiceFiltered);

let practiceReduce = (array, callback, firstValue) => {
    let accumulator = firstValue;
    for(let i in array){
        if(callback(array[i])){
        }
    }
    return accumulator;
};

const reducedArray = numberArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(reducedArray);
