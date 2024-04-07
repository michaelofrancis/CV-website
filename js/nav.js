// https://www.youtube.com/watch?v=At4B7A4GOPg&list=LL&index=6&t=3s&ab_channel=WebDevSimplified

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')

})



