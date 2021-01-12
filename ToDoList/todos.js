let input = prompt('What would you like to do?');;
let newItem = "";
let numOfItem = "";
//optional to add dummy data inside todos
const todos = ['Let\'s find out','what is correct','or anything else'];

//start with a while loop that checks for quit input
while(input !== 'quit'){
    
     if (input.toLowerCase() === 'new') {
        newItem = prompt('Enter a new item to your todo list.');
        todos.push(newItem);
        console.log(todos);
        input = prompt('What would you like to do next?');
    } else if (input.toLowerCase() === 'list') {
        console.log("Your TODO LIST:\n");
        for (let i = 0; i < todos.length; i++) {
            console.log('Item index ', i, ': ', todos[i]);
        }
        input = prompt('Would you like to continue with something else?');
    } else if (input.toLowerCase() === 'delete') {
        numOfItem = parseInt(prompt('Enter an index of the item to remove.'));
        if (numOfItem < todos.length) {
            todos.splice(numOfItem, 1);
            console.log(todos);
            input = prompt('Would you like to continue with something else?');
        } else if (numOfItem >= todos.length) {
            numOfItem = parseInt(prompt('There is no item with this index, press enter to try again'));
        } else if (!numOfItem) {
            input = prompt('Incorrect input, would you like to continue with something else?');
        }     
    } else {
        input = prompt('Incorrect input. What would you like to do?');
    }
}

console.log('OK QUIT THE APP');