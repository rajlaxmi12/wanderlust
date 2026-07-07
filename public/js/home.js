// =========================================
// Wanderlust Home Page JS
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Smooth scroll for anchor links
    // ===============================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });



    // ===============================
    // Hero Fade Animation
    // ===============================

    const hero = document.querySelector(".hero-content");

    if (hero) {

        hero.style.opacity = "0";
        hero.style.transform = "translateY(40px)";

        setTimeout(() => {

            hero.style.transition = "all .8s ease";

            hero.style.opacity = "1";

            hero.style.transform = "translateY(0)";

        }, 150);

    }



    // ===============================
    // Category Hover Effect
    // ===============================

    const categories = document.querySelectorAll(".category-card");

    categories.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px) scale(1.03)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });



    // ===============================
    // Listing Card Animation
    // ===============================

    const listingCards = document.querySelectorAll(".listing-card");

    listingCards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.boxShadow = "0 20px 45px rgba(0,0,0,.18)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.boxShadow = "";

        });

    });



    // ===============================
    // Search Validation
    // ===============================

    const form = document.querySelector(".hero-search");

    if (form) {

        form.addEventListener("submit", function (e) {

            const input = form.querySelector("input");

            if (input.value.trim() === "") {

                e.preventDefault();

                alert("Please enter a destination.");

                input.focus();

            }

        });

    }



    // ===============================
    // Counter Animation
    // ===============================

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 80;

        const update = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });



    // ===============================
    // Reveal on Scroll
    // ===============================

    const reveals = document.querySelectorAll(

        ".listing-card,.testimonial,.why-card,.category-card"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform = "translateY(0)";

                }

            });

        },

        {

            threshold: .2

        }

    );

    reveals.forEach(el => {

        el.style.opacity = "0";

        el.style.transform = "translateY(40px)";

        el.style.transition = ".7s";

        observer.observe(el);

    });

});
