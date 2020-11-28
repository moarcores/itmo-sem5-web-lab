function createGallery(gallery, main, preview) {
    var photoGallery = document.querySelector(gallery)
    var mainPhoto = photoGallery.querySelector(main)
    var thumbnails = photoGallery.querySelectorAll(preview)

    var addThumbnailClickHandler = function (photo) {
        thumbnails[i].addEventListener('click', function () {
            mainPhoto.src = photo;
        });
    };

    for (var i = 0; i < thumbnails.length; ++i) {
        addThumbnailClickHandler(thumbnails[i].src)
    }
}

createGallery('.photo_gallery', '.photo_gallery__main', '.photo_gallery__thumbnail')