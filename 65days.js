const banner = document.querySelector('.banner');
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.from-left, .from-right');

/*const options = {
    root: null, // the viewport
    threshold: 0, // how much should be visible before firing
    rootMargin: "-150px" // set custom distance to fire the observer
};*/

const appearOptions = {
    threshold: .5,
    rootMargin: "0px 0px -150px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
