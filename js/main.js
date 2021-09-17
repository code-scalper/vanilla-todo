const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list");

addButton.addEventListener("click", function () {
  const li = document.createElement("li");
  //   li.innerText = inputText.value;

  // like
  const like = document.createElement("span");
  const likeIcon = document.createElement("i");
  like.classList.add("like");
  likeIcon.classList.add("material-icons");
  likeIcon.innerText = "favorite_border";
  like.appendChild(likeIcon);

  // item
  const item = document.createElement("span");
  item.classList.add("item");
  item.innerText = inputText.value;

  // manage
  const manage = document.createElement("span");
  const checkIcon = document.createElement("i");
  const clearIcon = document.createElement("i");
  manage.classList.add("manage");
  checkIcon.classList.add("material-icons", "check");
  checkIcon.innerText = "check";
  clearIcon.classList.add("material-icons", "clear");
  clearIcon.innerText = "clear";
  manage.appendChild(checkIcon);
  manage.appendChild(clearIcon);

  // event
  likeIcon.addEventListener("click", (e) => {
    const target = e.target;
    const text =
      target.innerText === "favorite" ? "favorite_border" : "favorite";
    target.innerText = text;
  });
  checkIcon.addEventListener("click", (e) => {
    const target = e.target.parentNode.parentNode;
    target.classList.add("done");
  });
  clearIcon.addEventListener("click", (e) => {
    const target = e.target.parentNode.parentNode;
    list.removeChild(target);
  });

  // li
  li.appendChild(like);
  li.appendChild(item);
  li.appendChild(manage);
  list.appendChild(li);
});
