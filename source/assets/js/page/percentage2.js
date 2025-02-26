document.addEventListener("DOMContentLoaded", function () {
    function getRandomPercentage(min, max) {
        return Math.random() * (max - min) + min;
    }

    function setPercentage(gameId, min, max, className) {
        var percentageBar = document.querySelector('#' + gameId + ' .container-g-percentage-bar');
        var percentage = getRandomPercentage(min, max);
         percentageBar.style.width = percentage + '%';
        percentageBar.textContent = percentage.toFixed(2) + '%';
        percentageBar.classList.add(className);
    }

    setPercentage('mines', 95, 98, 'green');
    setPercentage('megaroleta', 95, 98, 'green');
});