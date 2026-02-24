// script.js
document.addEventListener('DOMContentLoaded', () => {
    // ------------------------
    // Custom Cursor
    // ------------------------
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        if(cursor) {
            cursor.style.top = e.clientY + 'px';
            cursor.style.left = e.clientX + 'px';
        }
    });

    // ------------------------
    // Scroll Progress Bar
    // ------------------------
    const progress = document.getElementById('progress-bar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if(progress) progress.style.width = scrollPercent + '%';
    });

    // ------------------------
    // Typing Effect
    // ------------------------
    const typingElement = document.querySelector('.typing');
    if(typingElement){
        const professions = ["Full Stack Developer", "Ethical Hacker", "Robotics Engineer"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = professions[wordIndex];

            if(!isDeleting){
                typingElement.textContent = currentWord.slice(0, charIndex + 1);
                charIndex++;

                if(charIndex === currentWord.length){
                    isDeleting = true;
                    setTimeout(type, 1500); // wait before deleting
                    return;
                }
            } else {
                typingElement.textContent = currentWord.slice(0, charIndex - 1);
                charIndex--;

                if(charIndex === 0){
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % professions.length;
                }
            }

            setTimeout(type, isDeleting ? 50 : 100); // faster deleting
        }

        type();
    }

    // ------------------------
    // Optional: Project Card Video Hover (if you have videos)
    // ------------------------
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const video = card.querySelector('.project-video');
        if(video){
            card.addEventListener('mouseenter', () => { video.play(); });
            card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
        }
    });
});
