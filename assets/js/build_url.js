function build_url(){
    var url = encodeURI(decodeURI(document.querySelector('#url').value));
    if (url === "" || url.indexOf("http") === -1){
        document.getElementById("b_url").innerHTML=`输入的不是链接或者未加http请求头！`;
    }
    else {
        // 直接 encodeURIComponent 保证 UTF-8 安全，再 btoa
        var encoded = btoa(encodeURIComponent(rawUrl));
        var fullLink = document.location.href + "api?url=" + encoded;
        document.getElementById("b_url").innerHTML = '<a href="' + fullLink + '" target="_blank">' + fullLink + '</a>';
    }
}
