gallery.app.photo.drawPhoto = function() {
    gallery.currentWidth = (function() {
        this._rootElem = document.getElementById('photoContainer');
        var bounds = this._rootElem.getBoundingClientRect();
        return currentWidth = bounds.right - bounds.left;
    }
    )();
    gallery.currentHeight = (function() {
        this._rootElem = document.getElementById('photoContainer');
        var bounds = this._rootElem.getBoundingClientRect();
        var currentHeight = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) - bounds.top;
        return currentHeight;
    }
    )();
    gallery.section = document.createElement('section');
    gallery.section.className = "sectionClass";
    gallery.sectionRow = document.createElement('div');
    gallery.sectionRow.className = "sectionRowClass";
    var maxWidth = gallery.currentWidth;
    var maxHeight = gallery.currentHeight;
    gallery.config.maxWidth = maxWidth;
    gallery.config.maxHeight = maxHeight;

    gallery.calculateImageDivWidthAndHeight = function(photoWidth, photoHeight) {
        var imageDiv_width = 0
          , imageDiv_height = 0;
        if (photoWidth > photoHeight) {

            if (photoWidth > gallery.config.maxWidth && photoHeight > gallery.config.maxHeight) {
                //reduce the width
                imageDiv_width = gallery.config.maxWidth * 0.95;
                imageDiv_height = photoHeight * ((gallery.config.maxWidth * 0.95) / photoWidth);

                if (imageDiv_height > gallery.config.maxHeight) {
                    var reduced_width = imageDiv_width
                      , reduced_height = imageDiv_height;
                    imageDiv_height = (gallery.config.maxHeight * 0.95);
                    imageDiv_width = reduced_width * ((gallery.config.maxHeight * 0.95) / reduced_height);
                }

            } else if (photoWidth > gallery.config.maxWidth) {
                //reduce the width
                imageDiv_width = gallery.config.maxWidth;
                imageDiv_height = photoHeight * (gallery.config.maxWidth / photoWidth);
            } else if (photoHeight > gallery.config.maxHeight) {
                //reduce the height
                imageDiv_height = (gallery.config.maxHeight * 0.95);
                imageDiv_width = photoWidth * ((gallery.config.maxHeight * 0.95) / photoHeight);
            } else {
                imageDiv_width = photoWidth;
                imageDiv_height = photoHeight;
            }

        } else if (photoWidth < photoHeight) {

            if (photoWidth > gallery.config.maxWidth && photoHeight > gallery.config.maxHeight) {
                //reduce the height
                imageDiv_height = (gallery.config.maxHeight * 0.95);
                imageDiv_width = photoWidth * ((gallery.config.maxHeight * 0.95) / photoHeight);

                if (imageDiv_width > gallery.config.maxWidth) {
                    var reduced_width = imageDiv_width
                      , reduced_height = imageDiv_height;
                    imageDiv_width = gallery.config.maxWidth;
                    imageDiv_height = reduced_height * (gallery.config.maxWidth / reduced_width);
                }

            } else if (photoWidth > gallery.config.maxWidth) {
                imageDiv_width = gallery.config.maxWidth;
                imageDiv_height = photoHeight * (gallery.config.maxWidth / photoWidth);
            } else if (photoHeight > gallery.config.maxHeight) {
                //reduce the height
                imageDiv_height = (gallery.config.maxHeight * 0.95);
                imageDiv_width = photoWidth * ((gallery.config.maxHeight * 0.95) / photoHeight);
            } else {
                imageDiv_width = photoWidth;
                imageDiv_height = photoHeight;
            }

        } else {
            if (photoWidth > gallery.config.maxWidth && photoHeight > gallery.config.maxHeight) {
                //reduce the width
                imageDiv_width = gallery.config.maxWidth * 0.95;
                imageDiv_height = photoHeight * ((gallery.config.maxWidth * 0.95) / photoWidth);

                if (imageDiv_height > gallery.config.maxHeight) {
                    var reduced_width = imageDiv_width
                      , reduced_height = imageDiv_height;
                    imageDiv_height = (gallery.config.maxHeight * 0.95);
                    imageDiv_width = reduced_width * ((gallery.config.maxHeight * 0.95) / reduced_height);
                }

            } else if (photoWidth > gallery.config.maxWidth) {
                imageDiv_width = gallery.config.maxWidth;
                imageDiv_height = photoHeight * (gallery.config.maxWidth / photoWidth);

            } else if (photoHeight > gallery.config.maxHeight) {
                imageDiv_height = (gallery.config.maxHeight * 0.95);
                imageDiv_width = photoWidth * ((gallery.config.maxHeight * 0.95) / photoHeight);
            } else {
                imageDiv_width = photoWidth;
                imageDiv_height = photoHeight;
            }

        }
        return {
            imageDiv_width: imageDiv_width,
            imageDiv_height: imageDiv_height
        }

    }
    gallery.app.photo.photosMetadata.reverse();
    for (var j = 0; j < gallery.app.photo.photosMetadata.length; j++) {
        var photos = gallery.app.photo.photosMetadata[j].photos.photo;

        for (var i = 0; i < photos.length; i++) {

            gallery.imageDivElem = document.createElement('div');

            var photoWidth = photos[i][flickr.flickrPhotoWidth]
              , photoHeight = photos[i][flickr.flicrkPhotoHeight];
            var imageDivWidthAndHeight = gallery.calculateImageDivWidthAndHeight(photoWidth, photoHeight);
            gallery.imageDivElem.style.width = imageDivWidthAndHeight.imageDiv_width + "px";
            gallery.imageDivElem.style.height = imageDivWidthAndHeight.imageDiv_height + "px";

            if (eval(gallery.imageDivElem.style.width.split('px')[0]) <= 0.5 * maxWidth) {
                gallery.imageDivElem.style.display = "inline-block";
            } else {
                gallery.imageDivElem.style.display = "block";
            }

            gallery.imageDivElem.style.top = (maxHeight / 2 - gallery.imageDivElem.style.height / 2) + "px";
            gallery.imageDivElem.className = "photo";
            gallery.imageDivElem.style.backgroundImage = "url(" + photos[i][flickr.flickrPhotoUrl] + ")";

            if (photos[i]["url_l"]) {
                gallery.imageDivElem.setAttribute("largeFlickrImage", photos[i]["url_l"]);
            }
            gallery.imageDivElem.onclick = gallery.app.photo.showSinglePhoto;
            gallery.imageDivElem.style.paddingTop = "5px";
            gallery.imageDivElem.style.paddingBottom = "5px";
            gallery.sectionRow.appendChild(gallery.imageDivElem);
        }
    }
    gallery.section.appendChild(gallery.sectionRow);
    document.getElementById('photoContainer').appendChild(gallery.section);

}
