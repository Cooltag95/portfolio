document.addEventListener("DOMContentLoaded", () => {
    // 1. Boot rapide
    setTimeout(() => { document.body.classList.remove('loading'); }, 1200);

    // 2. Traduction
    const langBtn = document.getElementById('lang-btn');
    let currentLang = 'fr';
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        langBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        document.querySelectorAll('[data-fr]').forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });
    });

    // 3. Typewriter
    const typewriter = document.getElementById('typewriter');
    const texts = ["Initiating handshake...", "Accessing Orange data...", "System ready."];
    let i = 0, j = 0, isDeleting = false;
    function type() {
        const fullTxt = texts[i];
        typewriter.textContent = isDeleting ? fullTxt.substring(0, j--) : fullTxt.substring(0, j++);
        let speed = isDeleting ? 40 : 80;
        if (!isDeleting && j === fullTxt.length) { speed = 2000; isDeleting = true; }
        else if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % texts.length; speed = 500; }
        setTimeout(type, speed);
    }
    setTimeout(type, 1200);

    // 4. Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
});