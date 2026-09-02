function build_url(){
    var url = encodeURI(decodeURI(document.querySelector('#url').value));
    if (url === "" || url.indexOf("http") === -1){
        document.getElementById("b_url").innerHTML=`输入的不是链接或者未加http请求头！`;
    }
    else {
        // 编码：encodeURIComponent + btoa（与 api/index.html 解码端对应）
        var encoded = btoa(encodeURIComponent(url));
        var resultUrl = document.location.href + "api?cc=" + encoded;
    
        // 1. 显示链接
        document.getElementById("b_url").innerHTML =
            '<a href="' + resultUrl + '" target="_blank">' + resultUrl + '</a>';
    
        // 2. 生成二维码（100x100）
        var qrcodeDiv = document.getElementById("qrcode");
        qrcodeDiv.style.display = "block";
        qrcodeDiv.innerHTML = "";   // 清空旧的，防止重复生成
    
        new QRCode(qrcodeDiv, {
            text: resultUrl,
            width: 100,
            height: 100,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }
}
