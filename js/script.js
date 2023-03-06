let statsContainer = document.querySelector('.stats'),
    stats = document.querySelectorAll('.stats .box .stat h2'),
    skills = document.querySelectorAll('.skills .bars .bar span'),
    skillsContainer = document.querySelector('.skills'),
    daysContainer = document.querySelector('.count .count-down .days'),
    hoursContainer = document.querySelector('.count .count-down .hours'),
    minutesContainer = document.querySelector('.count .count-down .minutes'),
    secondsContainer = document.querySelector('.count .count-down .seconds');

window.onscroll = function () {
    if (window.scrollY >= skillsContainer.offsetTop-200) {
        skills.forEach(skill => {
            skill.style.width = skill.dataset.width;
        })
    }

    if (window.scrollY >= statsContainer.offsetTop-100) {
        stats.forEach(stat => {
            let statData = stat.dataset.stat;
            let count = setInterval(() => {
                if (Number(stat.textContent) < Number(statData)) {
                    stat.textContent++;
                } else {
                    clearInterval(count);
                }
            }, 3000/Number(statData));
        })
    }
}

function countDown() {
    setInterval(() => {
        let futureDate = new Date("2023-12-30 23:59:59").getTime(),
        nowDate = new Date().getTime(),
        dateDifference = futureDate - nowDate,
        days = Math.floor(dateDifference / (1000 * 60 * 60 * 24)),
        hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((dateDifference % (1000 * 60)) / (1000));

        daysContainer.innerHTML = days;
        hoursContainer.innerHTML = hours > 10 ? hours : `0${hours}`;
        minutesContainer.innerHTML = minutes > 10 ? minutes : `0${minutes}`;
        secondsContainer.innerHTML = seconds > 10 ? seconds : `0${seconds}`;
    }, 1000);
}

countDown();