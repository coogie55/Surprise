
// =====================================
// FAVE'S GRADUATION SURPRISE
// =====================================

const openButton = document.getElementById("openButton");
const introScreen = document.getElementById("introScreen");
const celebrationScreen = document.getElementById("celebrationScreen");

const finalButton = document.getElementById("finalButton");
const finalMessage = document.getElementById("finalMessage");

const sparkleField = document.getElementById("sparkleField");


// =====================================
// 1. CREATE BACKGROUND SPARKLES
// =====================================

function createSparkles() {

    if (!sparkleField) return;

    sparkleField.innerHTML = "";

    for (let i = 0; i < 30; i++) {

        const sparkle = document.createElement("span");

        sparkle.className = "sparkle";
        sparkle.textContent = Math.random() > 0.5 ? "✧" : "✦";

        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.top = Math.random() * 100 + "%";

        sparkle.style.fontSize =
            (10 + Math.random() * 15) + "px";

        sparkle.style.animationDelay =
            Math.random() * 3 + "s";

        sparkleField.appendChild(sparkle);
    }
}

createSparkles();


// =====================================
// 2. OPEN THE GRADUATION SURPRISE
// =====================================

if (openButton) {

    openButton.addEventListener("click", () => {

        // Prevent multiple clicks
        if (openButton.disabled) return;

        openButton.disabled = true;
        openButton.textContent = "Here we go... ♡";

        // Start the celebration
        createPetals(30);

        setTimeout(() => {

            introScreen.classList.add("hide");

            setTimeout(() => {

                introScreen.style.display = "none";

                celebrationScreen.classList.add("show");

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

                // More petals when the celebration appears
                createPetals(40);

            }, 850);

        }, 700);

    });

}


// =====================================
// 3. FINAL PERSONAL MESSAGE
// =====================================

if (finalButton && finalMessage) {

    finalButton.addEventListener("click", () => {

        finalMessage.classList.toggle("show");

        if (finalMessage.classList.contains("show")) {

            finalButton.textContent = "Sending more love ♡";

            createPetals(25);

        } else {

            finalButton.textContent = "One more thing ♡";

        }

    });

}


// =====================================
// 4. FALLING PETALS AND HEARTS
// =====================================

function createPetals(amount) {

    const symbols = [
        "✿",
        "♡",
        "✧",
        "❀",
        "♥"
    ];

    const colours = [
        "#d58b9e",
        "#e5b1bd",
        "#c4778b",
        "#dba6b3",
        "#e8c6cd"
    ];

    for (let i = 0; i < amount; i++) {

        const petal = document.createElement("span");

        petal.className = "petal";

        petal.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.fontSize =
            (12 + Math.random() * 18) + "px";

        petal.style.color =
            colours[Math.floor(Math.random() * colours.length)];

        const duration = 4 + Math.random() * 5;

        petal.style.animationDuration =
            duration + "s";

        petal.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(petal);

        // Remove petals after animation
        setTimeout(() => {
            petal.remove();
        }, (duration + 3) * 1000);

    }

}


// =====================================
// 5. LITTLE CONSOLE GREETING
// =====================================

console.log(
    "%cMade with love for Fave ❤️",
    "color: #c4778b; font-size: 18px; font-weight: bold;"
);
