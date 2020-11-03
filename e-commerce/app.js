const menu = [
    {
        id: 1,
        title: 'healthy diet',
        category: 'breakfast',
        price: 20,
        img: 'breakfast1.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.'

    },
    {
        id: 2,
        title: 'healthy',
        category: 'breakfast',
        price: 10,
        img: 'breakfast2.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 3,
        title: 'diet',
        category: 'breakfast',
        price: 20,
        img: 'breakfast3.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 4,
        title: 'eat healthy',
        category: 'lunch',
        price: 20,
        img: 'lunch.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 5,
        title: 'hunger strike',
        category: 'lunch',
        price: 15,
        img: 'lunch1.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. '

    },
    {
        id: 6,
        title: 'eat',
        category: 'lunch',
        price: 8,
        img: 'lunch2.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 7,
        title: 'eat well',
        category: 'lunch',
        price: 20,
        img: 'lunch3.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },

    {
        id: 8,
        title: 'shakes',
        category: 'shakes',
        price: 20,
        img: 'shakes.jpeg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. '

    },

    {
        id: 9,
        title: 'drink well',
        category: 'shakes',
        price: 20,
        img: 'shakes.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. '

    },

    {
        id: 10,
        title: 'shake',
        category: 'shakes',
        price: 20,
        img: 'shakes1.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    }


]

//selecting items

var container = document.querySelector('.container')
var shoppingCart = document.querySelector('#shopping')
const cart = document.querySelector('.cart')


cart.addEventListener('click', () => {
    shoppingCart.classList.toggle('show-class')
})

//windows content loaded


window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    displayMneuItems(menu)
})


// const cartItems = document.querySelector('.cart')
// cartItems.addEventListener('click',)

const basketItems = [
    {
        id: 1,
        title: 'otems',
        price: 52,
        img: 'az.png',
        desc: 'lorem ipsum dollar emit skip',

    },
]




//functions

function displayMneuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        //  console.log('items')

        return `
      <div class="img" data-id=${item.id}>
        <div class="items" >
      <img src=${item.img} alt="">
      <a class="add-cart cart1" href="#">
          <ion-icon name="basket"></ion-icon> Add Cart
      </a>
</div>
<div class = "content">
      <h3>${item.title}</h3>
      <h3> ${item.price}</h3>
      <p>${item.desc}</p>
      </div>
  </div>
`
    })

    displayMenu = displayMenu.join('')
    container.innerHTML = displayMenu


    // basket items length
    const addItems = container.querySelectorAll('.cart1')
    addItems.forEach(function (target) {
        target.addEventListener('click', addToBasket)
        target.addEventListener('click', setProduct(basketItems))
        // target.addEventListener('click', setProduct)
    })
}

//function add to basket

const addToBasket = (e) => {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id
    const ids = element.dataset.id

    const findItems = menu.find((item) => item.id === Number(id))
    console.log(findItems)
    basketItems.push(findItems)
    console.log(basketItems)
}


function setProduct(items) {

    shoppingCart.innerHTML = items.map((item) =>
        `
    <div class="img" data-id=${item.id}>
<div class="items" >
<img src=${item.img} alt="">
<a class="add-cart cart1" href="#">
<ion-icon name="basket"></ion-icon> Add Cart
</a>
</div>
<div class = "content">
<h3>${item.title}</h3>
<h3> ${item.price}</h3>
<p>${item.desc}</p>
</div>
</div>`
    )
    console.log(shoppingCart)
}



