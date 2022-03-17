const slide = () => {
    const arl = document.querySelector("#arl")
    const arr = document.querySelector("#arr")
    const slides = document.querySelector(".slides")
    const slidesPhone = document.querySelector(".slidesPhone")
    const total = 1
    let i = 0
    const elipse = document.querySelector(".elipseBlock")
    const changeSlide = (i) => {
        if (i == 1) {
            slides.querySelectorAll(".slide")[i].classList.add("yesSlide")
            slides.querySelectorAll(".slide")[i].classList.remove("noneSlide")
            slides.querySelectorAll(".slide")[0].classList.remove("yesSlide")
            slides.querySelectorAll(".slide")[0].classList.add("noneSlide")
            slidesPhone.querySelectorAll(".slide")[i].classList.add("yesSlide")
            slidesPhone.querySelectorAll(".slide")[i].classList.remove("noneSlide")
            slidesPhone.querySelectorAll(".slide")[0].classList.remove("yesSlide")
            slidesPhone.querySelectorAll(".slide")[0].classList.add("noneSlide")
            elipse.querySelectorAll(".c")[i].classList.toggle("activeElipse")
            elipse.querySelectorAll(".c")[0].classList.toggle("activeElipse")
        } else {
            slides.querySelectorAll(".slide")[i].classList.add("yesSlide")
            slides.querySelectorAll(".slide")[i].classList.remove("noneSlide")
            slides.querySelectorAll(".slide")[1].classList.remove("yesSlide")
            slides.querySelectorAll(".slide")[1].classList.add("noneSlide")
            slidesPhone.querySelectorAll(".slide")[i].classList.add("yesSlide")
            slidesPhone.querySelectorAll(".slide")[i].classList.remove("noneSlide")
            slidesPhone.querySelectorAll(".slide")[1].classList.remove("yesSlide")
            slidesPhone.querySelectorAll(".slide")[1].classList.add("noneSlide")
            elipse.querySelectorAll(".c")[i].classList.toggle("activeElipse")
            elipse.querySelectorAll(".c")[1].classList.toggle("activeElipse")
        }
    }
    arr.addEventListener('click', () => {
        if (i == 1) {
            i = 0
        } else {
            i++;
        }
        changeSlide(i)
    })
    arl.addEventListener('click', () => {
        if (i == 0) {
            i = total
        } else {
            i--;
        }
        changeSlide(i)
    })
}

export default slide