//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Array of variable magicians.
const magicians: string[] = ["Teller", "David Blaine", "Criss Angel", "Harry Houdini"];

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);