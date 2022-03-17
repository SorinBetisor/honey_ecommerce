const bg = () => {
    var body = document.body,
        html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
    const background = document.querySelector(".grayBackground")
    background.style.height = "" + height + "px"
}

export default bg