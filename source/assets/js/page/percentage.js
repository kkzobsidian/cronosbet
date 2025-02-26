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

    setPercentage('fortunedragon', 90, 95, 'green');
    setPercentage('fortunetiger', 90, 95, 'green');
    setPercentage('fortunerabbit', 87, 90, 'green');
    setPercentage('fortunemouse', 30, 40, 'red');
    setPercentage('fortuneox', 90, 91, 'green');
    setPercentage('bigbassbonanza', 30, 50, 'red');
    setPercentage('icescape', 50, 60, 'yellow');
    setPercentage('gates', 80, 85, 'green');
    setPercentage('cashmania', 89, 92, 'green');
    setPercentage('penalty', 20, 50, 'red');
    setPercentage('roletabr', 40, 50, 'yellow');
    setPercentage('autoroleta', 30, 40, 'yellow');
    setPercentage('bacbo', 90, 94, 'green');
    setPercentage('wildape', 50, 75, 'yellow');
    setPercentage('aviator', 40, 50, 'yellow');
    setPercentage('spaceman', 50, 60, 'yellow');
    setPercentage('doublefortune', 80, 90, 'green');
    setPercentage('sweetbonanza', 20, 30, 'red');
});