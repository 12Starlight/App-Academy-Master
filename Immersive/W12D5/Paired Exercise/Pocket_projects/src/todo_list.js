let todos = []; 
let ul = document.getElementsByClassName('todos')[0];
let form = document.getElementsByClassName('add-todo-form')[0];

function addToDo () {
  // e.preventDefault();
  let input = document.getElementsByName('add-todo')[0];
  let todo = {};
  todo.value = input.value;
  todo.done = false; 
  todos.push(todo);
  input.value = "";
  
  localStorage.setItem("todos", JSON.stringify(todos));
  populateList();
  localStorage.getItem("todos") ? "" : todos = [];
}

function populateList () {
  let todoitems = JSON.parse(localStorage.getItem("todos"))
  
  todoitems.forEach((todo, idx) => {
    const label = document.createElement("label");
    label.innerHTML = todo.value
    const input2 = document.createElement("input");
    input2.setAttribute("type", "checkbox");
    input2.setAttribute("num", `${idx}`)
    if(todo.done === true) {
      input2.chekcked = true;
    } else {
      input2.checked = false;
    }
    const li = document.createElement("li");
    li.appendChild(label);
    li.appendChild(input2);
    ul.appendChild(li);
  })
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addToDo();
});

// .addEventListener("click", (e) => {

// })