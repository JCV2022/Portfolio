const darkMode = () => {
    // State
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    // OnMount
    // if theme is truthy, add class theme to the body
    const theme = localStorage.getItem('theme');

    // Handlers
    theme && document.body.classList.add(theme);
    
    // Events
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if(document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    };

    themeToggleBtns.forEach(btn =>
        btn.addEventListener('click', handleThemeToggle)
    );
};

export default darkMode;