const inputName = document.querySelector(".input-text");
const form = document.querySelector("form");
const card = document.querySelector(".cards");

const DATA = [
  {
    id: 135325,
    name: "Cars justo odio",
    time: "7:35",
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newUser = {
    id: `id${new Date().getTime()}`,
    name: inputName.value,
  };
  DATA.push(newUser);
  console.log(DATA);
  createTable(DATA);
  inputName.value = "";
});

function check() {
  if (checkbox.checked) {
    text.style.textDecorationLine = "line-through";
  } else {
    text.style.textDecorationLine = "none";
  }
}

function check(checkbox, text) {
  if (checkbox.checked) {
    text.style.textDecorationLine = "line-through";
  } else {
    text.style.textDecorationLine = "none";
  }
}

function time() {
  let d1 = new Date().getHours();
  let d2 = new Date().getMinutes();
  return `${d1}:${d2}`;
}

function createTable(date) {
  while (card.firstChild) {
    card.firstChild.remove();
  }
  date.forEach((i, index) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
          <div class="card-wrap">
          <input type="checkbox" onchange="check(this, this.nextElementSibling)" id="checkbox${index}"/>
            <p class="card-text" id="text">${i.name}</p>
            <p class="time">${time()}</p>
          </div>
          <button onclick='deleteUser(${index})' class="close-btn"><img src="./images/close.png" alt="close" /></button>
        </div>
        <hr />
    `;
    card.appendChild(div);
  });
}
createTable(DATA);

function deleteUser(index) {
  DATA.splice(index, 1);
  createTable(DATA);
}
