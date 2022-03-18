const cart = () => {
    const line = document.querySelectorAll(".shopItem")
    const convertor = (inp) => {
        const id = inp.getAttribute("product-id"),
            t = inp.querySelector(".titleItem").querySelector("h3").innerHTML.trim(),
            p = inp.querySelector(".priceItem").querySelector("h4").innerHTML,
            imgPath = inp.querySelector("img").getAttribute("src").trim()
        const price = parseInt(p.replace(/([A-z])\w+/gm, '').trim(), 10);
        console.log(id)
        let item = {
            title: t,
            id: id,
            price: price,
            img: "{% static '" + imgPath.substring(1) + "' %}",
        }
        return item
    }
    const update = () => {
        let element = document.querySelectorAll('#cartAfter');
        const items = {...localStorage };
        var size = Object.keys(items).length;
        element.forEach(el => {
            if (size) {
                el.setAttribute('data-after', size);
            } else {
                el.setAttribute('data-after', 0);
            }
        })
    }
    update()

    function lineupd() {
        line.forEach(e => {
            e.querySelector(".buttonAdd").addEventListener("click", (ex) => {
                const id = convertor(e)
                if (id) {
                    window.localStorage.setItem(JSON.stringify(id), "1")
                }
                update()
            })
        })
    }

    lineupd()

}




export default cart