let input = prompt("What would you like to do")
const todos = ['Collect check eggs', 'clean cat box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************')
    } else if (input === 'new') {
        const newToDo = prompt('ok, what is the new ToDo?');
        todos.push(newToDo);
        console.log(`${newToDo} added to the list`)
    } else if (input === 'delete') {
        const index = prompt('ok, enter the index of the item to delete');
        todos.splice(index, 1);
        console.log(index);
    }
    input = prompt("What would you like to do")
}
console.log("Ok, quiting the app")