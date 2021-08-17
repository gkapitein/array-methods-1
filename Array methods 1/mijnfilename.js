const addTheWordCool = function (array) {
    array.push("cool")
    // console.log(array)
    return array

}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// B Schrijf een JavaScript functie die het aantal elementen in een array retourneert.
// antwoord 3
const amountOfElementsInArray = (fruit) => fruit.length
console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));

// C Schrijf een JavaScript functie om het éérste element uit een array te retourneren. PS: Bij welk cijfer begint een array ook alweer met tellen?
const selectBelgiumFromBenelux = (array) => array[0]

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));
// resultaat: "Belgie"

//   D Schrijf een JavaScript functie om het laatste element uit een array te retourneren.


// const lastElementInArray =  (animals) =>  animals[(animals.length - 1)]
// of
const lastElementInArray = function (array) {
    return array.pop();
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));
// resultaat: "Schildpad"

//   E Schrijf een JavaScript functie om het eerste element uit een array te halen 
// en het restant te retourneren . 
// Gebruik .slice én de alternatieve optie .splice. 
// Wat is het verschil tussen deze functies? Hint: mutability.
// slice returned de array min wat hij als value heeft
// plice past het array aan en returnt wat er weg wordt gehaald als waarde

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
    //zoals je hieronder ziet muteert .slice methode niet de bestaande array, maar retourneert een nieuwe die we opslaan in een nieuwe variabele/
    const newArray = array.slice(1, 4);
    console.log("Nieuwe array:", newArray, "De onaangetaste array", array);
    return newArray;
};

const impeachTrumpSplice = function (array) {
    const removedElement = array.splice(0, 1);
    console.log(
        "removed element:",
        removedElement,
        "De mutated array, Trump is missing:",
        array
    );
    return array;
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F Write a simple JavaScript program to join all elements of the 
// following array into a string (with spaces). ps: deze opdracht hebben we 
// in het Engels gelaten omdat er een dikke tip in zit over welke array method 
// je gaat gebruiken.

const stringsTogether = function (array) {
    return array.join(" ");
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))
//resultaat: "Winc Academy is leuk ;-}"

// G Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert 
// tot 1 array ['array1', 'array2']

const combineArrays = function (array1, array2) {
    return array1.concat(array2)
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]))
  // resultaat: [1,2,3,4,5,6]