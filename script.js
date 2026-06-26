function startExperience() { 
    let suprise =Prompt("What would you like for a birthday suprise?", "Dingdong"
    );
    alert("🎉 Welcome to the Birthday Surprise!.Alright I will get you" + surprise);

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

    document.querySelector(".message").scrollIntoView({ behavior: "smooth" });
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
