gallery.app = function() {
    gallery.cmd.getImageRequestGallery();
    gallery.cmd.getImageRequestSize();
    gallery.app.photo.getAndStorePhotoMetadata();
    gallery.app.photo.loadPhotoBySize();
}
window.onorientationchange = function() {
    document.getElementById('photoContainer').removeChild(gallery.section);
    gallery.app.photo.drawPhoto();
	gallery.app.photo.toggleButtons();
}
window.onresize = function() {
    document.getElementById('photoContainer').removeChild(gallery.section);
    gallery.app.photo.drawPhoto();
	gallery.app.photo.toggleButtons();
}
