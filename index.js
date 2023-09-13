function clickBody() {
    document.getElementById("loading").classList.remove("hide");
    document.getElementById("login").classList.add("hide");
    setTimeout(function(){
        window.location.href = 'login.html';
    }, 5000);
}
document.body.addEventListener("click", clickBody)