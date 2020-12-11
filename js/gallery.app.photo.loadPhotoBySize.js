gallery.app.photo.loadPhotoBySize = function() {

gallery.app.photo.loadPhotoBySizeButton = function() {

        if (this.id == "largePhoto") {
            flickr.flickrPhotoUrl = "url_l",
            flickr.flickrPhotoWidth = "width_l",
            flickr.flicrkPhotoHeight = "height_l";
        } else if (this.id == "mediumPhoto") {
            flickr.flickrPhotoUrl = "url_m",
            flickr.flickrPhotoWidth = "width_m",
            flickr.flicrkPhotoHeight = "height_m";
        } else {
            flickr.flickrPhotoUrl = "url_s",
            flickr.flickrPhotoWidth = "width_s",
            flickr.flicrkPhotoHeight = "height_s";
        }
        document.getElementById('photoContainer').removeChild(gallery.section);
        gallery.app.photo.drawPhoto();
    }
document.getElementById("smallPhoto").onclick = gallery.app.photo.loadPhotoBySizeButton;
document.getElementById("mediumPhoto").onclick = gallery.app.photo.loadPhotoBySizeButton;
document.getElementById("largePhoto").onclick = gallery.app.photo.loadPhotoBySizeButton;
gallery.app.photo.toggleButtons();
}

gallery.app.photo.toggleButtons = function(){
var clientWidth = window.innerWidth || document.documentElement.clientWidth  || document.body.clientWidth;
if(clientWidth > 414){
document.getElementById("smallPhoto").style.display = "inline-block";
document.getElementById("mediumPhoto").style.display = "inline-block";
document.getElementById("largePhoto").style.display = "inline-block";	
}else{
document.getElementById("smallPhoto").style.display = "none";
document.getElementById("mediumPhoto").style.display = "none";
document.getElementById("largePhoto").style.display = "none";		
}
	
}
