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

//selectors
const container = document.querySelector('.container')
const basket = document.querySelector('.basket')
const cartItems = document.querySelector('.items')
const cartValue = document.querySelector('.cartValue')
const sliderProducts = document.querySelector('.slider-products')
const showPrice = document.querySelector('.show-price span')
const filterBtn = document.querySelectorAll('.button-container button')





//event listners

basket.addEventListener('click', () => {
    const fixed = document.querySelector('.fixed')
    fixed.classList.toggle('show')


})

window.addEventListener('DOMContentLoaded', displayMenuItems(menu))


filterBtn.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category)
        const menuCategory = menu.filter((menuItems) => {
            if (menuItems.category == category) {
                console.log(menuItems)
                return menuItems
            }

        })
        if (category === 'all') {
            displayMenuItems(menu)
        }
        else {
            displayMenuItems(menuCategory)
        }
    })
}
)
//basket items

const basketItems = [
    // {
    //     id: 1,
    //     title: 'healthy diet',
    //     category: 'breakfast',
    //     price: 20,
    //     img: 'breakfast1.jpg',
    //     desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit.'

    // },
]

const basketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)



//functions
cartValue.innerHTML = basketItems.length

function displayMenuItems(menuItems) {
    let display = menuItems.map(function (items) {

        return `
        <div class="contain" data-id=${items.id}>
        
        <div class="img">
        <img src=${items.img} alt="">
        <button class="add-to-cart">Add To Cart</button>
        </div>
        <div class="detail">
        <h4>${items.title}</h4>
        <p> ${items.desc}</p>
        <h4 class="price">${items.price}</h4>
        
        </div>
        </div>
        `
    })
    display = display.join('')
    container.innerHTML = display
}

const selectBtn = container.querySelectorAll('.add-to-cart')


selectBtn.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        const element = e.currentTarget.parentElement.parentElement;
        const id = element.dataset.id

        const findItems = menu.find((item) => item.id == Number(id))

        basketItems.push(findItems)
        btn.addEventListener("click", (() => cartValue.innerHTML = basketItems.length))

        setProducts(basketItems)
        console.log(basketTotal(basketItems))
        showPrice.innerHTML = basketTotal(basketItems)
    })

})





function setProducts(items) {

    if (basketItems.length < 0) {
        cartItems.textContent = 'You have not selected anything.'
        console.log(basketItems.length)
    }
    else if (basketItems.length > 0) {
        cartItems.innerHTML = items.map((item) =>

            `
        
        <div class="contain" data-id=${item.id}>

        <div class="image">
        <img src=${item.img} alt="" class="image">
        </div>
        <div class="font">
        <h4>${item.title}</h4>
        <p> ${item.desc}</p>
        <h4 class="price">${item.price}</h4>
        <button data-id=${item.id}  class='delete'>Delete It</button>
        </div>
        </div>
        
        `
        )
    }
    const deleteBnt = cartItems.querySelectorAll('.delete')
    deleteBnt.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.parentElement.parentElement.dataset.id;
            console.log(id)
            const item = basketItems.findIndex((item) => item.id === id);
            basketItems.splice(item, 1)
            setProducts(basketItems)
            cartValue.innerHTML = basketItems.length
        })
    })

}





