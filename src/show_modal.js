function createModal(modal, open, close, show) {
    var popup = document.querySelector(modal);
    var openPopupButton = document.querySelector(open);
    var closePopupButton = popup.querySelector(close)

    openPopupButton.addEventListener('click', function (evt) {
        evt.preventDefault();
        popup.classList.add(show)
    });

    closePopupButton.addEventListener('click', function (evt) {
        popup.classList.remove(show);
    });

    document.addEventListener('keydown', function (evt) {
        if (evt.key === "Escape") {
            popup.classList.remove(show);
        }
    });
}

createModal(".modal", ".button__open", ".button__close", "modal--show")