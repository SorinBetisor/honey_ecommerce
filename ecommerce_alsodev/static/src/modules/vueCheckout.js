const app = new Vue({
    el: ".oneLine",
    data: {
        val: sessionStorage.getItem("orderSumm")
    },
    delimiters: ['${', '}'],
})