const menu = [
    {
        id: 1,
        title: 'healthy diet',
        category: 'food',
        price: 20,
        img: 'breakfast1.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: 2,
        title: 'healthy',
        category: 'food',
        price: 10,
        img: 'breakfast2.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 3,
        title: 'diet',
        category: 'food',
        price: 20,
        img: 'breakfast3.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 4,
        title: 'eat healthy',
        category: 'food',
        price: 20,
        img: 'lunch.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 5,
        title: 'hunger strike',
        category: 'food',
        price: 15,
        img: 'lunch1.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. '

    },
    {
        id: 6,
        title: 'eat',
        category: 'food',
        price: 8,
        img: 'lunch2.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 7,
        title: 'Trending Fashion',
        category: 'clothing',
        price: 20,
        img: '2.jpg',
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
        title: 'Swag look',
        category: 'clothing',
        price: 18,
        img: '4.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '


    },
    {
        id: 11,
        title: 'Hoody',
        category: 'clothing',
        price: 40,
        img: '6.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 12,
        title: 'Winter',
        category: 'clothing',
        price: 25,
        img: '8.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 13,
        title: 'Whole Spices',
        category: 'grocery',
        price: 20,
        img: 'spices.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 14,
        title: 'Fruit Sale',
        category: 'grocery',
        price: 40,
        img: 'fruit-cart.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 15,
        title: 'For Breakfast',
        category: 'grocery',
        price: 30,
        img: 'milk-bread.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 16,
        title: 'Mega Sale',
        category: 'grocery',
        price: 100,
        img: 'mega-sale.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 17,
        title: 'iPods',
        category: 'electronics',
        price: 80,
        img: 'ipods.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 18,
        title: 'Walky Talky',
        category: 'electronics',
        price: 60,
        img: 'speakers.png',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 19,
        title: 'Gadgets Handler',
        category: 'electronics',
        price: 10,
        img: 'bag.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    },
    {
        id: 20,
        title: 'Camera',
        category: 'electronics',
        price: 150,
        img: 'camera.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.  '

    }


]





//constant selectors
const searchBtn = document.querySelector('.search')
const displayContainer = document.querySelector('.display-items')
const basketImg = document.querySelector('.cart')
const removeClass = document.querySelector('.toHide')
const showCart = document.querySelector('.cart-items')
const count = document.querySelector('.count')
const totalAmount = document.querySelector('.total span')


//event listners
searchBtn.addEventListener('click', () => {
    const uList = document.querySelector('.item-list')
    uList.classList.toggle('show-navbar')
})

basketImg.addEventListener('click', () => {
    const cartItems = document.querySelector('.selected-items')
    cartItems.classList.add('slide')

    setTimeout(() => {
        cartItems.classList.remove('hide')
    }, 1000)
})

removeClass.addEventListener('click', (e) => {
    const cartItems = document.querySelector('.selected-items')
    const hit = e.currentTarget.parentElement.parentElement;

    hit.classList.add('hide')
    console.log(hit)
    setTimeout(() => {
        cartItems.classList.remove('slide')
    }, 1000)

})


window.addEventListener('DOMContentLoaded', displayItems(menu))





//display basket

const displayBasket = []


const basketTotal = (basket) =>
    basket?.reduce((amount, item) => amount + item.price, 0)


//functions

function displayItems(menuItems) {
    var display = menuItems.map(function (items) {
        return ` 
        <div class="container" data-id=${items.id}>
        <div class="image">
            <img src=${items.img} alt="food">
            <button class="add-to-cart">Add To Cart</button>
        </div>
        <div class="detail">
            <h4>${items.title}</h4>
            <p> ${items.desc}
            </p>
            <p class="price">Price: <span>${items.price}</span></p>
        </div>
    </div>
        `
    })

    display = display.join('')
    displayContainer.innerHTML = display


    const addToCart = displayContainer.querySelectorAll('.add-to-cart')
    addToCart.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const element = e.currentTarget.parentElement.parentElement
            const id = element.dataset.id;
            const findElement = menu.find((item) => item.id == id)
            displayBasket.push(findElement)
            console.log(displayBasket)
            setProducts(displayBasket)

            count.innerHTML = displayBasket.length
            console.log(displayBasket.length)
            totalAmount.innerHTML = basketTotal(displayBasket)
            console.log(totalAmount)
        })
    })
}


function setProducts(items) {
    let elements = items.map((item) => {
        return `
        <div class="context" data-id=${item.id}>
        <div class="pic">
            <img src=${item.img} alt="" class='no-radious'>
            <button class="delete">Delete It</button>
        </div>
        <div class="text">
            <h4>${item.title}</h4>
            <p> ${item.desc}
            </p>
            <p class="price">Price: <span>${item.price}</span></p>
        </div>
    </div>
        `
    })
    elements = elements.join('')
    showCart.innerHTML = elements

    const deltetBtn = showCart.querySelectorAll('.delete')

    deltetBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            const vanish = btn.parentElement.parentElement.dataset.id;
            const item = displayBasket.findIndex((item) => item.id == vanish)
            displayBasket.splice(item, 1)
            setProducts(displayBasket)
            count.innerHTML = displayBasket.length
            const priceItem = showCart.querySelector('.price span')
            console.log(priceItem)


        })
    })
}


