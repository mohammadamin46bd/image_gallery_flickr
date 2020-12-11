gallery.cmd = {};
gallery.cmd.getTextContent = function(t) {
    var e = "innerText"in t ? "innerText" : "textContent";
    return e
}
gallery.cmd._xhr_handler = function(method, url) {
    try {
        return new XMLHttpRequest();
    } catch (e) {}
    try {
        return new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {}
    try {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
    alert("XMLHttpRequest not supported");
    return null;
}
gallery.cmd.getQueryParameters = function(strParamName) {
    var strReturn = "";
    var strHref = window.location.href;
    if (strHref.indexOf("?") > -1) {
        var strQueryString = strHref.substr(strHref.indexOf("?")).toLowerCase();
        var aQueryString = strQueryString.split("&");
        for (var iParam = 0; iParam < aQueryString.length; iParam++) {
            if (aQueryString[iParam].indexOf(strParamName.toLowerCase() + "=") > -1) {
                var aParam = aQueryString[iParam].split("=");
                strReturn = aParam[1];
                break;
            }
        }
    }
    return unescape(strReturn);
}
gallery.cmd.showSplashMessage = function(msg, timeout) {

    var innerWidth_custom = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      , innerHeight_custom = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var geDiv = document.createElement('div')
      , width = 300
      , height = 150;
    geDiv.id = "generalSplashID",
    geDiv.style.width = width + "px",
    geDiv.style.height = height + "px",
    geDiv.style.left = (innerWidth_custom / 2 - width / 2) + "px",
    geDiv.style.top = (innerHeight_custom / 2 - height / 2) + "px",
    geDiv.style.background = "rgba(0,0,0,0.8)",
    geDiv.style.zIndex = "4000",
    geDiv.style.position = "fixed",
    geDiv.style.border = "5px solid white",
    geDiv.style.borderRadius = "15px";

    var closeSpan_div = document.createElement('div');
    closeSpan_div.id = "closeSpan_div_id",
    closeSpan_div.style.position = "relative";

    var closeSpan = document.createElement('span');
    closeSpan.style.color = "white",
    closeSpan[gallery.cmd.getTextContent(closeSpan)] = " X ",
    closeSpan.style.position = "relative",
    closeSpan.style.borderRadius = "20px",
    closeSpan.style.background = "rgba(0,0,0,1)",
    closeSpan.style.fontSize = "25px",
    closeSpan.style.top = "10px",
    closeSpan.style.left = (width / 2 - 10) + "px";
    closeSpan.onclick = function() {
        var getSplDiv = document.getElementById("generalSplashID");
        if (getSplDiv) {
            document.body.removeChild(getSplDiv);
        }
    }
    ;
    closeSpan_div.appendChild(closeSpan),
    geDiv.appendChild(closeSpan_div);

    var msgDiv = document.createElement('div');
    msgDiv.style.marginTop = "20px",
    msgDiv.style.marginLeft = "10px",
    msgDiv.style.color = "white",
    msgDiv.style.textAlign = "center",
    msgDiv[gallery.cmd.getTextContent(msgDiv)] = msg,
    geDiv.appendChild(msgDiv),
    document.body.appendChild(geDiv);

    window.setTimeout(function() {
        var getSplDiv = document.getElementById("generalSplashID");
        if (getSplDiv) {
            document.body.removeChild(getSplDiv);
        }
    }, timeout)

}

gallery.cmd.getImageRequestGallery = function() {
    var galleryId = gallery.cmd.getQueryParameters('galleryid');
    if (galleryId.length > 0) {
        flickr.gelleryId = galleryId;
    }

}
gallery.cmd.getImageRequestSize = function() {
    var innerWidth_custom = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (innerWidth_custom > 767) {
        flickr.flickrPhotoUrl = "url_l",
        flickr.flickrPhotoWidth = "width_l",
        flickr.flicrkPhotoHeight = "height_l";
    } else if (innerWidth_custom > 374) {
        flickr.flickrPhotoUrl = "url_m",
        flickr.flickrPhotoWidth = "width_m",
        flickr.flicrkPhotoHeight = "height_m";
    } else {
        flickr.flickrPhotoUrl = "url_s",
        flickr.flickrPhotoWidth = "width_s",
        flickr.flicrkPhotoHeight = "height_s";
    }

    var imageRequestSize_url = gallery.cmd.getQueryParameters('size');

    if (imageRequestSize_url.length > 0) {
        if (imageRequestSize_url == "l") {
            flickr.flickrPhotoUrl = "url_l",
            flickr.flickrPhotoWidth = "width_l",
            flickr.flicrkPhotoHeight = "height_l";
        } else if (imageRequestSize_url == "m") {
            flickr.flickrPhotoUrl = "url_m",
            flickr.flickrPhotoWidth = "width_m",
            flickr.flicrkPhotoHeight = "height_m";
        } else {
            flickr.flickrPhotoUrl = "url_s",
            flickr.flickrPhotoWidth = "width_s",
            flickr.flicrkPhotoHeight = "height_s";
        }
    }
}
