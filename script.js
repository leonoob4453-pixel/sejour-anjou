document.addEventListener('DOMContentLoaded', () => {

    // IntersectionObserver pour animations
    const sections = document.querySelectorAll('.section-hero');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(section => observer.observe(section));

    // Menu hamburger
    const hamburger = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('close-sidebar');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    if(closeSidebar){
        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
            hamburger.classList.remove('active');
        });
    }

    // Fermer sidebar si clic en dehors
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            sidebar.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Accordéon Programme
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', (e) => {
            e.stopPropagation(); // empêche le click global de fermer sidebar
            const content = header.parentElement.nextElementSibling;
            content.classList.toggle('open');
            header.classList.toggle('open');
        });
    });

});
