const grocery = document.querySelector('#grocery')
const form = document.querySelector('form')
const alert = document.querySelector('.alert')
const submit = document.querySelector('.submit')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')


let editFlag = false;
let editId = '';
let editElement;


//****** Event Listners ******//

form.addEventListener('submit', setUpItems)

clearBtn.addEventListener('click', clearFunc)



//******** FUNCTIONS ******//

function setUpItems(e) {
    e.preventDefault();
    let value = grocery.value
    const id = new Date().getTime().toString()

    if (value && !editFlag) {
        const element = document.createElement('article')
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

        container.classList.add('show-container')
        list.appendChild(element)

        const deleteBtn = element.querySelector('.dlt')
        deleteBtn.addEventListener('click', deleteTodo)
        const edit = element.querySelector('.edit')
        edit.addEventListener('click', editTodo)
        alertFunction('todo added success fully', 'success')
        addToLocalStorage(id, value)
        setBackToDefault()
    }

    else if (value && editFlag) {
        editElement.innerHTML = value
        alertFunction('value edited', 'success')

        setBackToDefault()
    }
    else {
        alertFunction('please enter a value', 'danger')
    }

}

//set back to default

function setBackToDefault() {
    editFlag = false;
    editElement = '';
    editId = '';
    grocery.value = ''
}

//alert function 

function alertFunction(text, action) {
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    setTimeout(function () {
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}

//delete function

function deleteTodo(e) {
    const item = e.currentTarget.parentElement.parentElement;
    const id = item.dataset.id
    list.removeChild(item)
    if (list.children.length == 0) {
        container.classList.remove('show-container')
    }
    removeFromLocalStorage(id)
    alertFunction('todo deleted', 'danger')
}

function editTodo(e) {
    const item = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;

    grocery.value = editElement.innerHTML
    editFlag = true
    editId = item.dataset.id
}


//clear function

function clearFunc() {
    const items = document.querySelector('.grocery-items')

    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item)
        })
    }
    container.classList.remove('show-container')
    alertFunction('list is empty now', 'danger')
    setBackToDefault()
    localStorage.removeItem('list')
}
//ADD TO LOCAL STORAGE

function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}


function addToLocalStorage(id, value) {
    const grocery = { id, value }
    let items = getLocalStorage();
    items.push(grocery)

    localStorage.setItem('list', JSON.stringify(items))
    console.log(items)
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage()

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item
        }
    })
    localStorage.setItem('list', JSON.stringify(items))
}