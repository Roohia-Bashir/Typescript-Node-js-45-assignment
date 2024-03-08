"use strict";
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
class politicalParties {
    constructor(Name, popularity, Performance) {
        this.chairman = Name;
        this.voters = popularity;
        this.Performance = Performance;
    }
}
//instances about parties;
const PTI = new politicalParties("Our Hero ( 'IMRAN KHAN ' )", "100 % ", " 100 % ");
const PMLN = new politicalParties(" Nawaz Sharif", " 0 % ", " 10 %");
const PPP = new politicalParties("Bilawal bhutto", "0  %", " 5 %");
// Print information about the politicalParties;
console.log(PTI);
console.log(PMLN);
console.log(PPP);
