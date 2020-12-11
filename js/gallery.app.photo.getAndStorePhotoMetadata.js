gallery.app.photo.getAndStorePhotoMetadata = function() {
    var current_url = window.location.href;
    if (typeof localStorage.getItem('previous_url') == "undefined" || localStorage.getItem('previous_url') == null) {
        localStorage.setItem('previous_url', current_url);
        gallery.app.photo.getPhotoMetadata();

    } else {
        if (current_url == localStorage.getItem('previous_url')) {
            gallery.app.photo.photosMetadata = JSON.parse(localStorage.getItem('photosMetadata'));
            gallery.app.photo.drawPhoto();
        } else {
            localStorage.setItem('previous_url', current_url);
            gallery.app.photo.getPhotoMetadata();
        }
    }
}

gallery.app.photo.getPhotoMetadata = function() {
    var galleryIds = flickr.gelleryId.split(',');
    gallery.currentGalleryIdIndex = 0;

    for (var i = 0; i < galleryIds.length; i++) {
        var url = flickr.restURL + '&method=flickr.galleries.getPhotos&api_key=' + flickr.api_key + '&gallery_id=' + galleryIds[i] + '&extras=' + flickr.extras + '&format=json&nojsoncallback=1&get_gallery_info=1';
        var photoMeta_xhr = new gallery.cmd._xhr_handler();
        photoMeta_xhr.onreadystatechange = gallery.app.photo.sortPhotos;
        photoMeta_xhr.open("GET", url, true);
        photoMeta_xhr.onerror = gallery.app.photo.onPhotoRequestError;
        photoMeta_xhr.send(null);
    }
}
gallery.app.photo.onPhotoRequestError = function(e) {

    if (this.readyState == 4) {
        if (this.status == 0) {
            gallery.cmd.showSplashMessage("No internet connection1", 60000);
        } else if (this.status >= 200 && this.status < 304) {
            gallery.cmd.showSplashMessage("No internet connection2", 60000);
        } else if (this.status >= 400 && this.status < 500) {
            gallery.cmd.showSplashMessage("Client problem1", 60000);
        } else if (this.status >= 500 && this.status < 599) {
            gallery.cmd.showSplashMessage("Client problem2", 60000);
        }
    }
}
