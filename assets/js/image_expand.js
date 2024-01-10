// 照片 -> 全螢幕顯示

function full_view(ele) {
    let src = ele.getAttribute("src");
    document.querySelector("#img-viewer").querySelector("img").setAttribute("src", src);
    document.querySelector("#img-viewer").style.display = "block";
}

function close_model() {
    document.querySelector("#img-viewer").style.display = "none";
}