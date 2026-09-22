document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTOS
    ========================= */

    const loader =
        document.getElementById("loader");

    const header =
        document.getElementById("header");

    const menuToggle =
        document.getElementById("menuToggle");

    const nav =
        document.getElementById("nav");

    const backTop =
        document.getElementById("backTop");

    const navLinks =
        document.querySelectorAll(".nav a");


    /* =========================
       LOADER
    ========================= */

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 500);

    });


    /* =========================
       HEADER + BOTÓN ARRIBA
    ========================= */

    function handleScroll() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

            backTop.classList.add("show");

        } else {

            header.classList.remove("scrolled");

            backTop.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        handleScroll
    );


    handleScroll();


    /* =========================
       MENÚ MOBILE
    ========================= */

    function closeMenu() {

        nav.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );

    }


    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                nav.classList.toggle("open");


            menuToggle.classList.toggle(
                "active",
                isOpen
            );


            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        }
    );


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            closeMenu
        );

    });


    /* =========================
       ANIMACIONES AL HACER SCROLL
    ========================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    const observer =
        new IntersectionObserver(
            (entries, obs) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        obs.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        (element, index) => {

            element.style.transitionDelay =
                `${Math.min(index % 5, 4) * 70}ms`;

            observer.observe(element);

        }
    );


    /* =========================
       VOLVER ARRIBA
    ========================= */

    backTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    /* =========================
       TESTIMONIOS
    ========================= */

    const testimonials = [

        {
            text:
                "Cada detalle quedó precioso y todo salió mejor de lo que imaginábamos.",

            author:
                "— Familia López"
        },

        {
            text:
                "Nos encantó la atención y la forma en que hicieron realidad nuestra idea.",

            author:
                "— Andrea & Carlos"
        },

        {
            text:
                "Fue una celebración especial de principio a fin. ¡Volveríamos a elegirlos!",

            author:
                "— Familia Martínez"
        }

    ];


    const quote =
        document.querySelector(
            ".testimonial blockquote"
        );


    const cite =
        document.querySelector(
            ".testimonial cite"
        );


    const dots =
        document.querySelectorAll(".dot");


    dots.forEach(
        (dot, index) => {

            dot.addEventListener(
                "click",
                () => {

                    dots.forEach(item => {

                        item.classList.remove(
                            "active"
                        );

                    });


                    dot.classList.add(
                        "active"
                    );


                    quote.style.opacity = "0";

                    cite.style.opacity = "0";


                    setTimeout(() => {

                        quote.textContent =
                            `“${testimonials[index].text}”`;

                        cite.textContent =
                            testimonials[index].author;


                        quote.style.opacity =
                            "1";

                        cite.style.opacity =
                            "1";

                    }, 180);

                }
            );

        }
    );


    /* =========================
       NAVEGACIÓN ACTIVA
    ========================= */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        navLinks.forEach(
                            link => {

                                link.classList.remove(
                                    "current"
                                );


                                if (
                                    link.getAttribute("href")
                                    ===
                                    `#${entry.target.id}`
                                ) {

                                    link.classList.add(
                                        "current"
                                    );

                                }

                            }
                        );

                    }

                });

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(
            section
        );

    });

});