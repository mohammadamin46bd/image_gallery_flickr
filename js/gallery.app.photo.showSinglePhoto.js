gallery.app.photo.showSinglePhoto = function() {

    var innerWidth_custom = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      , innerHeight_custom = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var geDiv = document.createElement('div')
      , width = innerWidth_custom
      , height = innerHeight_custom;
    geDiv.id = "largeImagePanel";

    var closeSpan_div = document.createElement('div');
    closeSpan_div.id = "closeSpanDivId";
    var closeSpan = document.createElement('span');
    closeSpan.id = "closeSpan_Id";
    closeSpan[gallery.cmd.getTextContent(closeSpan)] = " X ",
    closeSpan.onclick = function() {
        var getSplDiv = document.getElementById("largeImagePanel");
        if (getSplDiv) {
            document.body.removeChild(getSplDiv);
        }
    }
    ;
    closeSpan_div.appendChild(closeSpan);
    geDiv.appendChild(closeSpan_div);

    var msgDiv = document.createElement('div');
    msgDiv.id = "largeImg";
    if (this.getAttribute('largeFlickrImage')) {
        if (this.getAttribute('largeFlickrImage').length > 0) {
            msgDiv.style.backgroundImage = "url(" + this.getAttribute('largeFlickrImage') + ")";
        }
    } else {
        msgDiv.style.backgroundImage = "url(" + this.src + ")";
    }

    msgDiv.style.objectFit = "cover!important";
    geDiv.appendChild(msgDiv),
    document.body.appendChild(geDiv);
}
