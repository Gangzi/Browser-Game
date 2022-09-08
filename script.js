//Variables
const player = document.getElementById("player");
const block = document.getElementById("block");
const score = document.getElementById("score");
/* make the player jump*/
function jump() {
    player.classList.add("jump");
    setTimeout(function () {
        player.classList.remove("jump");
    }, 500)
}
/* make the player jump when we press the key*/
document.addEventListener("keypress", function () {
    jump();
});
/* make the palyer if has collsion */
setInterval(() => {
    score.innerText++;
    /*get player position*/
    const playerTop = parseInt(window.getComputedStyle(player)
        .getPropertyValue('top'));
    /* get block position*/
    const blockLeft = parseInt(window.getComputedStyle(block)
        .getPropertyValue('left'));
    /*set the block disappear when runs out of the game box*/
    if (blockLeft < 0) {
        block.style.display = 'none';
    } else {
        block.style.display = '';
    }
    /* when collision also gets the score*/
    if (blockLeft < 180 && blockLeft >130 && playerTop >= 190 ) {
        alert("Your score is : " + score.innerText + 
        "      Refresh and try again?");
    }

}, 50);