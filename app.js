const FORM = document.getElementById("form");
const INPUT = document.getElementById("input");
const TO_DOS_UL = document.getElementById("todos");

const TO_DOS = JSON.parse(localStorage.getItem("todos"));
console.log(TO_DOS);

if (TO_DOS) {
    TO_DOS.forEach((each) => addTodo(each));
}

FORM.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});
function addTodo(for_each) {
  let toDoText = INPUT.value;

  if (TO_DOS) {
    toDoText = TO_DOS.text;
  }

  if (toDoText) {
    const toDoEl = document.createElement("li");
    if (TO_DOS && TO_DOS.completed) {
      toDoEl.classList.add("completed");
    }

    toDoEl.innerText = toDoText;

    toDoEl.addEventListener("click", () => {
      toDoEl.classList.toggle("completed");
      updateLS();
    });

    toDoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      toDoEl.remove();
      updateLS();
    });
    TO_DOS_UL.appendChild(toDoEl)
    INPUT.value = '';
    updateLS();
  }
}

function updateLS() {
    toDosEl = document.querySelectorAll('li')
    const todo = []
    todo.forEach(todoEl=> {
        todo.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        })
    })
    localStorage.setItem('todo', JSON.stringify(todo))
}