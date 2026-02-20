export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
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
