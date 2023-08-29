const lazyLoading = () => {
    const lazyImgs = document.querySelectorAll('.lazy');
    
    /*
    const observer = new IntersectionObserver(() => {}, {
        root: null,
        rootMargin: '0px',
        threshold: 0,
    });
    */
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });   
    });

    lazyImgs.forEach((img) => {
        observer.observe(img);
    });
};

export default lazyLoading;