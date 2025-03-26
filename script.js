window.alert(`Welcome to my Portofolio..Am Aldric, a Full Stack Developer`);
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('h1, p, img, div');
    elements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
            el.style.opacity = 1;
        }, index * 200);
    });

    document.body.addEventListener('mousemove', (e) => {
        const circles = document.createElement('div');
        circles.style.position = 'absolute';
        circles.style.width = '10px';
        circles.style.height = '10px';
        circles.style.borderRadius = '50%';
        circles.style.backgroundColor = 'rgba(0, 150, 255, 0.7)';
        circles.style.pointerEvents = 'none';
        circles.style.left = `${e.pageX}px`;
        circles.style.top = `${e.pageY}px`;
        document.body.appendChild(circles);

        setTimeout(() => {
            circles.style.transition = 'opacity 0.5s ease-in-out';
            circles.style.opacity = 0;
            setTimeout(() => circles.remove(), 500);
        }, 100);
    });
});