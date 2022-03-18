import contact from "./modules/contact"
import bg from "./modules/background"
import scroll from "./modules/autoScroll"
import menu from "./modules/menu"
import cart from "./modules/cart"

window.addEventListener("DOMContentLoaded", () => {
    contact()
    bg()
    menu()
    scroll()
    cart()
})