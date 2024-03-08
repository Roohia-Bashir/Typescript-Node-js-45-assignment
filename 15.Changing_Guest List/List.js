"use strict";
let Guest_List = ['Mahanoor', 'Amna', 'Ayesha', 'Rabia'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear. ' + Guest_List[i] + ',\n\nWe are delighted to extend our heartfelt invitation to you to join us our honored guest at Birthday Party. Your presence at this event would truly make it special.\n\nThank You!\n\n');
}
let absent_Guest = 'Rabia';
let new_Guest = 'Ayesha';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear. ' + Guest_List[i] + ',\n\nWe are delighted to extend our heartfelt invitation to you to join us our honored guest at Birthday Party. Your presence at this event would truly make it special.\n\nThank You!\n\n');
}
console.log(`Dear. ${absent_Guest} is not coming to the party.`);
