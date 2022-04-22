const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        let container = button.parentNode;
        let popup = container.querySelector('.popup');
        popup.classList.add('visibility');
        setTimeout(remove, 1000, popup);
    });
});

function remove(elem) {
    elem.classList.remove('visibility');
}