function startCountdown() {
    const dateInput = document.getElementById('date-input');
    const countdown = document.querySelector('.timer');
    const targetDate = new Date(dateInput.value).getTime();

    function updateCountdown() {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        if (timeRemaining <= 0) {
            countdown.innerHTML = `<span id="days">00</span><span id="hours">00</span><span id="minutes">00</span><span id="seconds">00</span>`;
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdown.innerHTML = `<span id="days">${days.toString().padStart(2, '0')}</span><span id="hours">${hours.toString().padStart(2, '0')}</span><span id="minutes">${minutes.toString().padStart(2, '0')}</span><span id="seconds">${seconds.toString().padStart(2, '0')}</span>`;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}