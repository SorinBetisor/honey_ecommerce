const contact = () => {
    const contactBut = document.querySelectorAll(".contactCall")
    const background = document.querySelector(".grayBackground")
    const cancel = document.querySelector(".cancel")
    const listener = function(e) {
        e.preventDefault();
    };
    contactBut.forEach(e => {
        e.addEventListener("click", () => {
            if (background.classList.contains('activeMenu')) {
                background.classList.remove('activeMenu')
            } else {
                background.classList.add('activeMenu')
            }
        })
    })

    background.addEventListener("click", e => {
        document.querySelector(".widgetButt").removeEventListener("click", listener);
        const target = e.target;
        if (!target.closest(".contactPopUp")) {
            background.classList.remove('activeMenu');
        }
    })
    cancel.addEventListener("click", e => {
        background.classList.remove('activeMenu')
    })
}

export default contact