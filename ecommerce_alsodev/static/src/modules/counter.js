let arrL = document.querySelectorAll(".arrL")
let arrR = document.querySelectorAll(".arrR")
let items = document.querySelectorAll(".cartItem")
const min = (item) => {
    let numb = item.innerHTML
    let val = parseInt(numb, 10)
    if (val === 0) {
        return;
    } else {
        item.innerHTML = val - 1;
    }
}

const max = (item) => {
    let numb = item.innerHTML
    let val = parseInt(numb, 10)

    item.innerHTML = val + 1;
}

const recalc = (price, quant, total) => {
    let val = (parseFloat(price.innerHTML) * parseFloat(quant.innerHTML))
    total.innerHTML = val.toFixed(2)
}

const change = (e) => {
    const target = e.target.closest(".cartItem")
    const id = target.getAttribute('data-remover')
    sessionStorage.setItem(id, target.querySelector(".counter").innerHTML)
    console.log(id)
}

const counter = () => {
    const cartItems = document.querySelectorAll(".cartItem")
    let summ = 0
    cartItems.forEach(e => {
        let price = parseFloat(e.querySelector(".finalPrice").querySelector(".price").innerHTML)
        summ += price
    })
    document.querySelector(".totalAmmount").innerHTML = summ
    return summ
}
counter()

items.forEach(i => {
    let item = i.querySelector(".counter")
    let price = i.querySelector(".itemPrice").querySelector(".price")
    let total = i.querySelector(".finalPrice").querySelector(".price")
    let remove = i.querySelector(".removeCart")
    i.querySelector(".arrL").addEventListener("click",
        function() {
            min(item)
            recalc(price, item, total)
            counter()
            change(e)
        }
    )
    i.querySelector(".arrR").addEventListener("click",
        function(e) {
            max(item)
            recalc(price, item, total)
            counter()
            change(e)
        }
    )
    remove.addEventListener("click", (e) => {
        const target = e.target.closest(".cartItem")
        const id = target.getAttribute('data-remover')
        for (let i in {...localStorage }) {
            const list = JSON.parse(i)
            if (list.id === id) {
                window.localStorage.removeItem(i);
                let element = document.querySelector('#cartAfter');
                const items = {...localStorage };
                var size = Object.keys(items).length;
                if (size) {
                    element.setAttribute('data-after', size);
                } else {
                    element.setAttribute('data-after', 0);
                }

            }
        }
        document.querySelector(".cartItems").removeChild(e.target.closest(".row"))
        counter()
    })
})

document.querySelector("#checkoutButton").addEventListener("click", (e) => {
    sessionStorage.setItem("orderSumm", counter())
})