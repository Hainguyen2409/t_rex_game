const t_rex = document.getElementById("t_rex");
const cactus = document.getElementById("cactus");

function jump() {
    if (t_rex.classList != "jump") {
        t_rex.classList.add("jump");

        setTimeout(function () {
            t_rex.classList.remove("jump");
        }, 300)
    }
}

let alive = setInterval(function () {
    let t_rexTop = parseInt(window.getComputedStyle(t_rex).getPropertyValue("top")); 

    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft > 0 && t_rexTop >= 140) {
    alert("Game Over!");
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
  });