const tourBtn = document.querySelector('.start')


tourBtn.addEventListener('click', (e) => {
    const home = e.currentTarget.parentElement;
    home.classList.add('hide')
})

window.addEventListener('DOMContentLoaded', () => {
    const user = document.querySelector('.user')
    const userName = prompt('good day! please enter your name')

    user.textContent = userName

    const li = document.querySelector('#fixed .li a')
    const icon = document.querySelector('.icon1')

    li.classList.toggle('color', window.scrollY < 590)
    icon.classList.toggle('color', window.scrollY < 590)


})

window.addEventListener('scroll', () => {
    const li = document.querySelector('#fixed .li a')
    const li1 = document.querySelector('#fixed .li1 a')
    const li2 = document.querySelector('#fixed .li2 a')
    const li3 = document.querySelector('#fixed .li3 a')
    const icon = document.querySelector('.icon1')
    const icon1 = document.querySelector('.icon2')
    const icon2 = document.querySelector('.icon3')
    const icon3 = document.querySelector('.icon4')




    li.classList.toggle('color', window.scrollY < 590)
    icon.classList.toggle('color', window.scrollY < 590)

    li1.classList.toggle('color', window.scrollY > 590 && window.scrollY < 1190)
    icon1.classList.toggle('color', window.scrollY > 590 && window.scrollY < 1190)

    li2.classList.toggle('color', window.scrollY > 1190 && window.scrollY < 1790)
    icon2.classList.toggle('color', window.scrollY > 1190 && window.scrollY < 1790)

    li3.classList.toggle('color', window.scrollY > 1790 && window.scrollY < 2400)
    icon3.classList.toggle('color', window.scrollY > 1790 && window.scrollY < 2400)

})