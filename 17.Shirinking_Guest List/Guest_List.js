"use strict";
let Guest_List = ['Rabia', 'Amna', 'Mahanoor'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dear. ' + Guest_List[i] + ',\n\nWe are delighted to extend our heartfelt invitation to you to join us our honored guest at Birthday Party. Your presence at this event would truly make it special.\n\nThank You!\n\n')
// }
let absent_Guest = 'Rabia';
let new_Guest = 'Mahanoor';
Guest_List[0] = new_Guest;
//for(let i=0; i<Guest_List.length; i++){
//   console.log('Dear. ' + Guest_List[i] + ',\n\nWe are delighted to extend our heartfelt invitation to you to join us our honored guest at Birthday Party. Your presence at this event would truly make it special.\n\nThank You!\n\n')
//}
console.log(`Dear. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find Big Table So we are inviting 3 more guests.');
// 3 guest add in array.
Guest_List.unshift('Sidra');
Guest_List.splice(2, 0, 'Maryam');
Guest_List.push('Bisma');
//i have printed here array of 6 guest.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear. ' + Guest_List[i] + ',\n\nWe are delighted to extend our heartfelt invitation to you to join us our honored guest at Birthday Party. Your presence at this event would truly make it special.\n\nThank You!\n\n');
}
//sorry message to guest for not inviting.
console.log('\nsorry we can not arrrange Big Table,only Two peoples will be invited.');
//here,i have removed guest.
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`sorry. ${remove_Guest}, You are not invited for dinner`);
}
//remaining 2 invited guest.
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear. ' + Guest_List[i] + ',\n\nYou are still invited\n\nThank You!\n\n');
}
//i have remove all the guest from array.
Guest_List.splice(0, 2);
console.log(Guest_List);
