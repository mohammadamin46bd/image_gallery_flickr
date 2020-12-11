gallery.app.photo.sortPhotos = function() {

    if (this.readyState == 4 && this.status == 200) {
        gallery.currentGalleryIdIndex = gallery.currentGalleryIdIndex + 1;
        var response = JSON.parse(this.responseText);

        if (response.stat == "ok") {
            var photoShuffle = [];
            var photos = response.photos.photo;
            var largePhotoSize = 0;
            var largerPhotoIndex = 0;

            while (photos.length > 0) {
                for (var i = 0; i < photos.length; i++) {

                    if ((photos[i][flickr.flickrPhotoWidth] / photos[i][flickr.flicrkPhotoHeight]) > largePhotoSize) {
                        largePhotoSize = (photos[i][flickr.flickrPhotoWidth] / photos[i][flickr.flicrkPhotoHeight]);
                        largerPhotoIndex = i;
                    } else {
                        largePhotoSize = largePhotoSize;
                        largerPhotoIndex = largerPhotoIndex;
                    }
                    if (i === photos.length - 1) {
                        photoShuffle.push(photos[largerPhotoIndex]);
                        photos.splice(largerPhotoIndex, 1);
                        largePhotoSize = 0;
                        largerPhotoIndex = 0;
                    }
                }

            }

            response.photos.photo = photoShuffle;
            gallery.app.photo.photosMetadata.push(response);

            if (gallery.currentGalleryIdIndex == (flickr.gelleryId.split(',').length)) {
                gallery.app.photo.drawPhoto();
                localStorage.setItem('photosMetadata', JSON.stringify(gallery.app.photo.photosMetadata));
            }
        } else {
            gallery.cmd.showSplashMessage(response.message, 60000);
        }

    }

}
;
