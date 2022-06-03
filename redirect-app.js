document.getElementById("cryptoBtn").onclick = function(){
    var cryppNme = document.getElementById("cryptoName").value;
    window.location.href = "/crypto.html?crypto="+cryppNme;
}