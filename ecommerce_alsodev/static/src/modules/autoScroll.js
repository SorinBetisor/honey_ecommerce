const scroll = () => {
    let i = document.querySelector(".scroll");
    document.addEventListener("scroll", () => {
        let scroll = window.pageYOffset;
        if (scroll > 500) {
            i.style.display = "block"
        } else {
            i.style.display = "none"
        }
    })
    i.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}

export default scroll