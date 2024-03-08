

let Guest_List :string[] = ['Rabia','Amna','Mahanoor'];

// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear. ' + Guest_List[i] + ',\n\nWe are delighted to extend our heartfelt invitation to you to join us our honored guest at Birthday Party. Your presence at this event would truly make it special.\n\nThank You!\n\n')

// }

let absent_Guest :string = 'Rabia' ;

let new_Guest :string = 'Mahanoor' ;

Guest_List[0] = new_Guest ;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear. ' + Guest_List[i] + ',\n\nWe are delighted to extend our heartfelt invitation to you to join us our honored guest at Birthday Party. Your presence at this event would truly make it special.\n\nThank You!\n\n')

}

console.log(`Dear. ${absent_Guest} is not coming to the party.`);

console.log('Good News! We find Big Table So we are inviting 3 more guests.')

Guest_List.unshift('Sidra') ;
Guest_List.splice(2 , 0 , 'Maryam');
Guest_List.push('Bisma');

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear. ' + Guest_List[i] + ',\n\nWe are delighted to extend our heartfelt invitation to you to join us our honored guest at Birthday Party. Your presence at this event would truly make it special.\n\nThank You!\n\n')

}