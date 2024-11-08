const toggleSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === 'none' ? 'block' : 'none';
    }
};

// Example usage for toggling the experience section
toggleSection('experience');