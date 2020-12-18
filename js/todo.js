const todoList = document.querySelector(".todo-list");
const todoInput = document.querySelector("#todo-input");
const clearButton = document.querySelector(".clear");
const checkButton = document.querySelector(".check");
const likeButton = document.querySelector(".like");

const removeTodo = (e) => {
  const li = e.target.parentNode.parentNode;
  todoList.removeChild(li);
};
const checkTodo = (e) => {
  const li = e.target.parentNode.parentNode;
  li.classList.add("done");
};
const likeTodo = (e) => {
  e.target.innerText === "favorite_border"
    ? (e.target.innerText = "favorite")
    : (e.target.innerText = "favorite_border");
};

todoInput.addEventListener("keypress", function (e) {
  const todo = todoInput.value;
  if (e.keyCode === 13 && todo.trim().length !== 0) {
    const itemTodo = generateTodo(todo);
    todoList.appendChild(itemTodo);
    todoInput.value = "";
  }
});

const generateTodo = (todo) => {
  // like 만들기
  const generateLike = () => {
    const span = document.createElement("span");
    span.classList.add("todo-like");
    const icon = generateIcon("like", "favorite_border");
    icon.addEventListener("click", likeTodo);
    span.appendChild(icon);
    return span;
  };
  // item 만들기
  const generateItem = () => {
    const span = document.createElement("span");
    span.classList.add("todo-item");
    span.innerText = todo;
    return span;
  };
  // manage 만들기
  const generateManage = () => {
    const span = document.createElement("span");
    span.classList.add("todo-manage");
    const icon1 = generateIcon("check", "check");
    const icon2 = generateIcon("clear", "clear");
    icon1.addEventListener("click", checkTodo);
    icon2.addEventListener("click", removeTodo);
    span.appendChild(icon1);
    span.appendChild(icon2);
    return span;
  };
  const generateIcon = (name, text) => {
    const icon = document.createElement("i");
    icon.classList.add("material-icons");
    icon.classList.add(name);
    icon.innerText = text;
    return icon;
  };
  const li = document.createElement("li");
  li.appendChild(generateLike());
  li.appendChild(generateItem());
  li.appendChild(generateManage());
  return li;
};
