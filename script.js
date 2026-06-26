function startExperience() { 
    let surprise = prompt("What would you like for a birthday suprise?", "Dingdong"
    );
    alert("🎉 Welcome to the Birthday Surprise Ethan!.Alright I will get you " + surprise + ".");
}

function celebrate() {
    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });

    alert("🎂 Happy Birthday! Make a Wish!");
}

function playMusic() {
    document.getElementById("song").play();
}

/* Show final message after delay */
setTimeout(() => {
    document.querySelector(".final-message").style.display = "block";

    confetti({
        particleCount: 500,
        spread: 200
    });

}, 8000);
