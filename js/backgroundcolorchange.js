const btn = document.getElementById("colorBtn");

function getRandomColor() {
    const letter = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }

    return color;
}

let intervalId = null;

btn.addEventListener("click", function() {
    if (intervalId === null) {
        intervalId = setInterval(() => {
            // Generate two random colors for the gradient
            const color1 = getRandomColor();
            const color2 = getRandomColor();
            // Set a linear gradient as the background
            document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
        }, 5000);
    }
});


// reset button

const resetButton = document.getElementById('resetBtn');

function resetRandom() {
    const color = "#ffffff";
    return color;
}

resetBtn.addEventListener("click", function() {
    document.body.style.background = "#ffffff";
});

   




