var popup = document.querySelector(".modal");
var openPopupButton = document.querySelector(".button__open");
var closePopupButton = popup.querySelector('.button__close')

console.log(popup)
console.log(openPopupButton)

openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal--show')
});

closePopupButton.addEventListener('click', function (evt) {
    popup.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === "Escape") {
        popup.classList.remove('modal--show');
    }
});