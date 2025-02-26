let timeInSeconds = 35 * 60;
const countdownElement = document.getElementById('countdown');
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateCountdown() {
    if (timeInSeconds > 0) {
        timeInSeconds--;
        countdownElement.textContent = formatTime(timeInSeconds);
    } else {
        countdownElement.textContent = "Tempo Esgotado!";
        clearInterval(countdownInterval);
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);