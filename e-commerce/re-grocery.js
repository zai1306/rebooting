const alert = document.querySelector('.alert')
const form = document.querySelector('form')
const grocery = document.querySelector('#grocery')
const submit = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')


//edit options

let editElement;
let editFlag = false
let editID = '';








//******* EVENT LISTNERS *******//
form.addEventListener('submit', addItems)

clearBtn.addEventListener('click', clearItems)

window.addEventListener('DOMContentLoaded', setUpItems)


//******* Functions *******//

function addItems(e) {
    e.preventDefault();
    const value = grocery.value
    const id = new Date().getTime().toString()

    if (value && !editFlag) {
        createListItem(id, value)
        //adding class
        container.classList.add('show-container')
        //display alert

        displayAlert('grocery added', 'success')

        //add to localStorage
        addToLocalStorage(id, value)
        //set back to default
        setBackToDefault()
    }

    else if (value && editFlag) {
        editElement.innerHTML = value
        displayAlert('value edited', 'success')

        //edit local storage
        editLocalStorage(editID, value)
        setBackToDefault()


    }
    else {
        displayAlert('please enter a value', 'danger')
    }
}


//display alert Function

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`)
    }, 1000)

}

//clear button functionality
function clearItems() {
    const items = document.querySelectorAll('.grocery-items')

    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item)
        })
    }
    container.classList.remove('show-container')
    displayAlert('List Is Empty Now', 'danger')
    setBackToDefault()
    localStorage.removeItem("list")
}

//delete button functionality

function deleteItem(e) {
    const item = e.currentTarget.parentElement.parentElement;
    const id = item.dataset.id
    list.removeChild(item)
    if (list.children.length === 0) {
        container.classList.remove('show-container')
    }
    displayAlert('item deleted', 'danger')
    setBackToDefault();

    //remove from local storage
    removeFromLocalStorage(id)
}

function editItem(e) {
    const item = e.currentTarget.parentElement.parentElement;
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //set form value
    grocery.value = editElement.innerHTML;
    editFlag = true
    editID = item.dataset.id;
    submit.textContent = 'edit'

}


//set back to default

function setBackToDefault() {
    grocery.value = ''
    editFlag = false;
    editID = '';
    submit.textContent = 'submit'
}

// ************* LOCAL STORAGE ********//

function addToLocalStorage(id, value) {
    const grocery = { id, value }
    let items = getLocalStorage()

    items.push(grocery)

    localStorage.setItem('list', JSON.stringify(items))
    console.log(items)

}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item
        }
    })
    localStorage.setItem('list', JSON.stringify(items))
}


function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items.map(function (item) {
        if (item.id === id) {
            item.value = value
        };
        return item

    })
    localStorage.setItem('list', JSON.stringify(items))

}

function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}


function setUpItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }
}


function createListItem(id, value) {
    const element = document.createElement('article')
    //adding class

    element.classList.add('grocery-items')
    //add id
    const attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr)

    element.innerHTML = `
    <p class="title">${value}</p>
    <div class="btn-container">
        <button class="edit">
            <ion-icon name="create-outline"></ion-icon>
        </button>

        <button class="dlt">
            <ion-icon name="trash-outline" style="color: red; border: none;"></ion-icon>

        </button>
    </div>`

    const deletebtn = element.querySelector('.dlt');
    const edit = element.querySelector('.edit')

    deletebtn.addEventListener('click', deleteItem)
    edit.addEventListener('click', editItem)
    //append child 
    list.appendChild(element)
}
localStorage.setItem('orange', JSON.stringify(['items', 'ietms1']))