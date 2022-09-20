const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function writeToDo(newToDo) {
    const todo = document.createElement("li");
    todo.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    span.classList.add("todo-text");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", (event) => {
        const item = event.target.parentElement;
        toDos = toDos.filter((todo) => {
            return todo.id !== parseInt(item.id);
        });
        saveToDo();
        item.remove();
    });

    todo.appendChild(button);
    todo.appendChild(span);
    toDoList.appendChild(todo);
}

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newToDo = {
        text: toDoInput.value,
        id: Date.now(),
    };
    toDos.push(newToDo);
    writeToDo(newToDo);
    saveToDo();
    toDoInput.value = "";
});

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(writeToDo);
}
