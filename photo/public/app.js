const banner = document.querySelector('.banner')
const toggler = document.querySelector('.toggle')
const li = document.querySelectorAll('.menu li a')
const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 150) {
        header.classList.add('sticky')
    }
    else{
        header.classList.remove('sticky')

    }
})
function toggle () {
    toggler.classList.toggle('active')
    banner.classList.toggle('active')
}

li.forEach((lis) => {
    lis.addEventListener('click', () => {
        if(banner.classList.contains('active')) {
            banner.classList.remove('active')
            toggler.classList.remove('active')
        }
    })
})

