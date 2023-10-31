// This is the javascript code that enables the adding and the substracting
//(Sounds like starfire wrote this... LOl)
let todos = [];

const todosList = document.getElementById('todos');
let todoInput = document.getElementById('textInput'); //We modify this all over the code, that's why it shouldn't be constant
const inputBtn = document.getElementById('add');
const showEnterTodo = document.getElementById('showEnterTodo');
const enterTodo = document.getElementById('enterTodo');

// This function manages what the plus icon does
function showTodoInput(){
    enterTodo.style.display = 'block';
}

showEnterTodo.addEventListener('click',showTodoInput);

function addTodo (e) {
    // console.log(todoInput.value);
    e.preventDefault();
    // In this case we added this to pervent the default behaviour of a button
    // which is to refresh the page and execute our function instead
    let textValue = todoInput.value;
    todos.push(textValue);
    // We reset the todos element so that it doesn't show duplicates
    todosList.innerHTML = '';
    renderTodos();
    todoInput.value = ''; //When you add something, the text bar empties
    enterTodo.style.display = 'none'; //Hide the input bar after adding something
}
// This makes it so that every time the click event in the button fires
// this function is called
inputBtn.addEventListener('click', addTodo);

// REmove item
function removeTodo(index){
    todos = todos.filter((todo, i) => {
        // return i===index ? false : true;
        return !(i===index);
    });

    // This could be inside a function called updateScreen()
    todosList.innerHTML = '';
    renderTodos();
}

// Edit item
// We can edit using a combination of the adding and the removing
function editTodo(index){
    const currElementText = document.querySelector(`#todos div:nth-child(${index +1}) p`).innerText;
    const splicedText = currElementText.slice(4);
    // console.log(splicedText);
    removeTodo(index);
    showTodoInput(); //Show the bar with text
    todoInput.value = splicedText;
    

}


// Render the list mostly
function renderTodos() {
    
    todos.forEach((todo, i)=>
    {
        let currentHTML = todosList.innerHTML;
        let newHtml = (
            `<div class="todoItem">
                <p>${i +1}.- ${todo}</p>
                <div class="actions">
                    <i onClick = "editTodo(${i})" class="fa-solid fa-pen-to-square"></i>
                    <i onClick ="removeTodo(${i})" class="fa-solid fa-delete-left"></i>
                    </div>
            </div>`
        );
        let amendedHTML = currentHTML + newHtml;
        todosList.innerHTML = amendedHTML;
    });
    
}

// Execute this function on page load
renderTodos();