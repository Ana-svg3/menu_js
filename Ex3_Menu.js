//Exercise 3
//Create an interactive menu in the browser using JavaScript only.

//Counter 
let counter = 0;

let option;//Variable, user choice

do { //Show menu

    option = parseInt(prompt(
        "Counter value: " + counter +
        "1. Increment counter" +
        "2. Decrement counter" +
        "3. Exit"
    ));

    switch (option) { //Switch for the menu options
        case 1:
            counter++;
            console.log("Counter increased:", counter);
            break;
        case 2:
            counter--;
            console.log("Counter decreased:", counter);
            break;
        case 3:
            console.log("finished.");
            break;
        default:
            console.log("Invalid option.");
    }

} while (option !== 3);