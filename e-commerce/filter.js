const menu = [
    {
        id: 1,
        title: 'healthy diet',
        category: 'breakfast',
        price: 20,
        img: 'breakfast1.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum odio harum error itaque, undevoluptates adipisci atque ipsum qui saepe dignissimos aperiam culpa dolor et vitae optio odit?Laudantium!'

    },
    {
        id: 2,
        title: 'healthy',
        category: 'breakfast',
        price: 10,
        img: 'breakfast2.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum odio harum error itaque, undevoluptates adipisci atque ipsum qui saepe dignissimos aperiam culpa dolor et vitae optio odit?Laudantium!'

    },
    {
        id: 3,
        title: 'diet',
        category: 'breakfast',
        price: 20,
        img: 'breakfast3.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum odio harum error itaque, undevoluptates adipisci atque ipsum qui saepe dignissimos aperiam culpa dolor et vitae optio odit?Laudantium!'

    },
    {
        id: 4,
        title: 'eat healthy',
        category: 'lunch',
        price: 20,
        img: 'lunch.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum odio harum error itaque, undevoluptates adipisci atque ipsum qui saepe dignissimos aperiam culpa dolor et vitae optio odit?Laudantium!'

    },
    {
        id: 5,
        title: 'hunger strike',
        category: 'lunch',
        price: 15,
        img: 'lunch1.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum odio harum error itaque, undevoluptates adipisci atque ipsum qui saepe dignissimos aperiam culpa dolor et vitae optio odit?Laudantium!'

    },
    {
        id: 6,
        title: 'eat',
        category: 'lunch',
        price: 8,
        img: 'lunch2.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum odio harum error itaque, undevoluptates adipisci atque ipsum qui saepe dignissimos aperiam culpa dolor et vitae optio odit?Laudantium!'

    },
    {
        id: 7,
        title: 'eat well',
        category: 'lunch',
        price: 20,
        img: 'lunch3.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum odio harum error itaque, undevoluptates adipisci atque ipsum qui saepe dignissimos aperiam culpa dolor et vitae optio odit?Laudantium!'

    },

    {
        id: 8,
        title: 'shakes',
        category: 'shakes',
        price: 20,
        img: 'shakes.jpeg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum odio harum error itaque, undevoluptates adipisci atque ipsum qui saepe dignissimos aperiam culpa dolor et vitae optio odit?Laudantium!'

    },

    {
        id: 9,
        title: 'drink well',
        category: 'shakes',
        price: 20,
        img: 'shakes.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum odio harum error itaque, undevoluptates adipisci atque ipsum qui saepe dignissimos aperiam culpa dolor et vitae optio odit?Laudantium!'

    },

    {
        id: 10,
        title: 'shake',
        category: 'shakes',
        price: 20,
        img: 'shakes1.jpg',
        desc: 'lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illum odio harum error itaque, undevoluptates adipisci atque ipsum qui saepe dignissimos aperiam culpa dolor et vitae optio odit?Laudantium!'

    }


]


const sectionCenter = document.querySelector('.section-center')
const filterBtn = document.querySelectorAll('.filter-btn')

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu)

})

//filter btns

filterBtn.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCtegory = menu.filter(function (menuItem) {
            //            console.log(menuItem.category)
            if (menuItem.category == category) {
                return menuItem

            }

        })
        console.log(menuCtegory)

        if (category === 'all') {
            displayMenuItems(menu)
        }
        else {
            displayMenuItems(menuCtegory)
        }
    })
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item)

        return `         <article class="menu-item">
                        <img src=${item.img} alt="" class="photo">
                        <div class="item-info">
                        <header>

                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
                 ${item.desc}
            </p>
        </div>
    </article>
`
    })
    displayMenu = displayMenu.join('')
    sectionCenter.innerHTML = displayMenu
}
