var photoGallery = document.querySelector('.photo_gallery')
var mainPhoto = photoGallery.querySelector('.photo_gallery__main')
var thumbnails = photoGallery.querySelectorAll('.photo_gallery__thumbnail')

var addThumbnailClickHandler = function (photo) {
    thumbnails[i].addEventListener('click', function () {
        mainPhoto.src = photo;
    });
};

for (var i = 0; i < thumbnails.length; ++i) {
    addThumbnailClickHandler(thumbnails[i].src)
}