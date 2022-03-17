const menu = () => {
    let clic = document.querySelector(".linesImage")
    const menu = document.querySelector(".menuPhone")
    clic.addEventListener('click', () => {
        if (menu.classList.contains("yesSlide")) {
            menu.classList.remove("yesSlide")
            menu.classList.add("noneSlide")
        } else {
            menu.classList.add("yesSlide")
            menu.classList.remove("noneSlide")
        }
    })
}
export default menu