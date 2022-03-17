let vueCart = new Vue({
    el: '.vueMark',
    data: {
        items: {...localStorage }
    },
    delimiters: ['${', '}'],
    computed: {
        list: function() {
            let ret = []
            for (let i in {...localStorage }) {
                let parsed = JSON.parse(i)

                if (sessionStorage.getItem(parsed.id)) {
                    let quantity = sessionStorage.getItem(parsed.id)
                    let total = quantity * parsed.price
                    localStorage.setItem(i, quantity)
                    ret.push([parsed, quantity, total])
                } else {
                    ret.push([parsed, 1, parsed.price])
                }
            }
            return ret
        }
    }
})