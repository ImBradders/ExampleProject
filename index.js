let current_brad = ""
let brads = ["brads/1.png", "brads/2.jpeg", "brads/3.jpeg", "brads/4.png", "brads/5.png", "brads/6.jpg"]

function change_brad() {
    let destination = document.getElementById("BradLocation");
    if (current_brad === "") {
        destination.src = brads[Math.floor(Math.random() * brads.length)]
        current_brad = destination.src
    }
    else {
        while (destination.src === current_brad) {
            destination.src = brads[Math.floor(Math.random() * brads.length)]
        }
        current_brad = destination.src
    }
    console.log(current_brad)
}