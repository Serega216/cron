document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener("click", function (event) {
        const headerWrapper = document.querySelector(".header-main");
        const navbarToggle = headerWrapper ? headerWrapper.querySelector(".mobile-btn") : null;
        const navigationWrapper = document.querySelector(".header-nav");
        const menu = navigationWrapper ? navigationWrapper.querySelector(".header-nav-inner") : null;

        if (navbarToggle && menu) {
            if (navbarToggle.contains(event.target)) {
               navigationWrapper.classList.toggle("active");
                navbarToggle.classList.toggle("active");
                menu.classList.toggle("active");
            } else {
               navigationWrapper.classList.remove("active");
                navbarToggle.classList.remove("active");
                menu.classList.remove("active");
            }
        }
    })
});
