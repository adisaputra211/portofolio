export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const offset = 80; // Navbar height offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

export const handleNavigation = (router, pathname, sectionId) => {
    if (pathname === '/') {
        // Already on home page, just scroll
        scrollToSection(sectionId);
    } else {
        // On a different page, navigate home with query param
        router.push(`/?scroll=${sectionId}`);
    }
};
