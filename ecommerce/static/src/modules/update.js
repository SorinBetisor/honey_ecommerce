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

export default update