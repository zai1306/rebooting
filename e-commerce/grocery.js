const alert = document.querySelector(".alert");
const form = document.querySelector("form");
const grocery = document.getElementById("grocery");
const submit = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

//edit options
let editOption;
let editFlag = false;
let editID = "";

console.log(container);

clearBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".grocery-items");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }

  container.classList.remove("show-container");
  displayAlert("clear List", "danger");
  setBackToDefault();
  clearLocalStorage();
  //localStorage.removeItem('list')
});

window.addEventListener("DOMContentLoaded", setUpItems());

//selecting eventListners

form.addEventListener("submit", addItems);

//creating functions

function addItems(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    createListItem(id, value);
    container.classList.add("show-container");
    displayAlert("item aded to grocery list", "success");
    //adding to local storage

    addToLoccalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    editOption.innerHTML = value;
    displayAlert("value edited", "success");
    editToLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("enter a value", "danger");
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert

  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

//setBackToDefault setUp

function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submit.textContent = "submit";
}

//adding to local storage

function addToLoccalStorage(id, value) {
  let items = getLocalStorage();

  const grocery = { id, value };
  items.push(grocery);
  localStorage.setItem("item", JSON.stringify(items));

  console.log(items);
}

function getLocalStorage() {
  return localStorage.getItem("item")
    ? JSON.parse(localStorage.getItem("item"))
    : [];
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("item", JSON.stringify(items));
}
function clearLocalStorage() {
  localStorage.setItem("item", "");
}

function editToLocalStorage(id, value) {
  let items = getLocalStorage();
  items.map(function (item) {
    if (item.id == id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("item", JSON.stringify(items));
}

//localStorage API
//setItem
//getItem
//removeItem
//save as String
// localStorage.setItem('orange', JSON.stringify(['items', 'item1']))

// let oranges = JSON.parse(localStorage.getItem('orange'))
// console.log(oranges);

//******* SetUpItems ******//

function setUpItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
  }
  container.classList.add("show-container");
}

function createListItem(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-items");

  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit">
            <ion-icon name="create-outline"></ion-icon>
        </button>

        <button type="button" class="dlt">
            <ion-icon name="trash-outline" style="color: red; border: none;"></ion-icon>
        </button>
    </div>`;

  console.log(element.setAttribute());

  //adding delete functionality

  const deleteBtn = element.querySelector(".dlt");
  deleteBtn.addEventListener("click", (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
      container.classList.remove("show-container");
    }

    displayAlert("item removed", "danger");
    setBackToDefault();
    removeFromLocalStorage(id);
  });

  const edit = element.querySelector(".edit");

  edit.addEventListener("click", (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item

    editOption = e.currentTarget.parentElement.previousElementSibling;
    //set form value
    grocery.value = editOption.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submit.textContent = "edit";
  });

  list.appendChild(element);
}
