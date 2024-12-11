// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Nav Links
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Scroll-To-Top Button
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.textContent = "↑";
    scrollToTopBtn.className = "scroll-to-top";
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 20px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    `;

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Show/Hide Scroll-To-Top Button
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Form Validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            const inputs = form.querySelectorAll("input[required], textarea[required]");
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add("is-invalid");
                } else {
                    input.classList.remove("is-invalid");
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert("Please fill out all required fields.");
            }
        });
    }
});
