// Global | 照片 -> 全螢幕顯示

// 讀取元物件 > 啟動全螢幕區塊

// 開啟
function full_view(ele) {
    let src = ele.getAttribute("src");
    document.querySelector("#img-viewer").querySelector("img").setAttribute("src", src);
    document.querySelector("#img-viewer").style.display = "block";
}

// 關閉
function close_model() {
    document.querySelector("#img-viewer").style.display = "none";
}