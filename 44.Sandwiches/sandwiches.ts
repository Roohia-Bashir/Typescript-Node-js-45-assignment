// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.



function makeSandwich(items: string[]): void {
    console.log("Making a sandwich with:");
    items.forEach(item => console.log("- " + item));
    console.log("Enjoy your sandwich!\n");
}

makeSandwich(["Bread ","Capsicum", "Cheese", "Hard boiled-eggs" ,"Chicken Patie" ,"barbque sauce"]);
makeSandwich(["Bread","Onions", "Mayonnise" ,'Beef patie']);
makeSandwich(["Bread","Tomatos", "Green Chilies","Mutton patie","Tanduri sauce"]);