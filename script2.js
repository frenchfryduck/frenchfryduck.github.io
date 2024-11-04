function updateTime() {
    const now = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    };
    document.getElementById('time').textContent = new Intl.DateTimeFormat([], options).format(now);
}

const navbarBrand = document.querySelector('.navbar-brand');
const folders = document.querySelectorAll('.folders img');

folders.forEach((folder) => {
    folder.addEventListener('mouseenter', () => {
        navbarBrand.textContent = 'N/A';
    });

    folder.addEventListener('mouseleave', () => {
        navbarBrand.textContent = 'frenchfryduck';
    });
});

navbarBrand.addEventListener('click', () => {
    window.location.href = 'index.html';
});

setInterval(updateTime, 1000);
updateTime();

const textElement = document.getElementById('animated-text');
const text = textElement.textContent;
textElement.innerHTML = '';

text.split(' ').forEach((word, index) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.className = 'word';
    span.style.animationDelay = `${index * 200}ms`;
    textElement.appendChild(span);
    textElement.appendChild(document.createTextNode(' '));
});
