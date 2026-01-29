document.addEventListener('DOMContentLoaded', () => {
    const changeTextBtn = document.getElementById('changeTextBtn');
    const greeting = document.getElementById('greeting');

    if (changeTextBtn && greeting) {
        changeTextBtn.addEventListener('click', () => {
            greeting.textContent = 'Hello, Universe!';
        });
    }
});