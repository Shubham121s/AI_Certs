
// Countdown Timer
const countdownDate = new Date("July 1, 2024 00:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
};

const countdownInterval = setInterval(updateCountdown, 1000);

// Collapsible Module Sections
document.querySelectorAll('.module-header').forEach(header => {
    header.addEventListener('click', () => {
        const moduleContent = header.nextElementSibling;
        moduleContent.classList.toggle('active');
        if (moduleContent.style.display === "block") {
            moduleContent.style.display = "none";
        } else {
            moduleContent.style.display = "block";
        }
    });
});

// Interactive Tabs
document.querySelectorAll('.tabs ul li a').forEach(tab => {
    tab.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });
        const targetId = tab.getAttribute('href').substring(1);
        document.getElementById(targetId).style.display = 'block';
    });
});

// Set default tab to be visible
document.getElementById('prerequisites').style.display = 'block';
