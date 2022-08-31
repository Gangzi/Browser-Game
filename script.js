let playler = document.getElementById("playler");
let block = document.getElementById("block");

function jump(){
    playler.classList.add("jump");
    setTimeout(function(){
playler.classList.remove("jump");
    },300)
}
document.addEventListener("keydown", function(event){
    jump();
});