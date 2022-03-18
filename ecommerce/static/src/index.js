import scroll from "./modules/autoScroll"
import slide from "./modules/slides"
import menu from "./modules/menu"
import contact from "./modules/contact"
import bg from "./modules/background"
import update from "./modules/update"

window.addEventListener("DOMContentLoaded", () => {
    scroll()
    slide()
    contact()
    menu()
    update()
    bg()
})