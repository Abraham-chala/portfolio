// Smooth scrolling for nav links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({behavior:"smooth"});
    });
});

// Scroll animations
// Scroll animations
function revealOnScroll(){
    const faders = document.querySelectorAll('.fade-in');
    const skills = document.querySelectorAll('.skill');

    faders.forEach(fader => {
        const top = fader.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 100){
            fader.classList.add('show');
        }
    });

    skills.forEach(skill => {
        const top = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 100){
            skill.classList.add('show');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);