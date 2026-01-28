/**
 * Brumans - Main JavaScript
 */

(function() {
    'use strict';

    // DOM Elements
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuClose = document.getElementById('menu-close');
    const splashScreen = document.getElementById('splash-screen');
    const referencesToggle = document.getElementById('references-toggle');
    const referencesMore = document.getElementById('references-more');

    /**
     * Splash Screen
     */
    function initSplashScreen() {
        if (splashScreen) {
            setTimeout(function() {
                splashScreen.classList.add('fade-out');
                setTimeout(function() {
                    splashScreen.style.display = 'none';
                }, 500);
            }, 1500);
        }
    }

    // Initialize splash screen immediately
    initSplashScreen();

    /**
     * References Toggle (show more / show less)
     */
    function initReferencesToggle() {
        if (referencesToggle && referencesMore) {
            referencesToggle.addEventListener('click', function() {
                const isVisible = referencesMore.classList.contains('is-visible');

                if (isVisible) {
                    referencesMore.classList.remove('is-visible');
                    referencesToggle.textContent = 'Weitere';
                } else {
                    referencesMore.classList.add('is-visible');
                    referencesToggle.textContent = 'Weniger';
                }
            });
        }
    }

    // Initialize references toggle
    initReferencesToggle();

    /**
     * Header scroll effect
     */
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    /**
     * Smooth scroll to anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Reveal on scroll - fade in when scrolling down
     */
    function initScrollAnimations() {
        const revealElements = document.querySelectorAll('.reveal-section');
        if (!revealElements.length) return;

        // Observer for fade IN
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            {
                threshold: 0.05,
                rootMargin: '0px 0px -80px 0px',
            }
        );

        // Reset sections that are below viewport on scroll
        let ticking = false;
        const resetBelowViewport = () => {
            revealElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                // If section top is below viewport bottom, reset it
                if (rect.top >= window.innerHeight) {
                    el.classList.remove('is-visible');
                }
            });
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(resetBelowViewport);
                ticking = true;
            }
        }, { passive: true });

        if ('IntersectionObserver' in window) {
            revealElements.forEach((el) => observer.observe(el));
        } else {
            revealElements.forEach((el) => el.classList.add('is-visible'));
        }
    }

    /**
     * Mobile menu toggle
     */
    function initMobileMenu() {
        if (!menuToggle || !mobileMenu) return;

        function openMenu() {
            mobileMenu.classList.add('active');
            document.body.classList.add('menu-open');
        }

        function closeMenu() {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }

        menuToggle.addEventListener('click', openMenu);

        if (menuClose) {
            menuClose.addEventListener('click', closeMenu);
        }

        // Close menu when clicking on a link
        mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    /**
     * Initialize all functions
     */
    function init() {
        // Header scroll
        window.addEventListener('scroll', handleHeaderScroll, { passive: true });
        handleHeaderScroll();

        // Smooth scroll
        initSmoothScroll();

        // Scroll animations
        initScrollAnimations();

        // Mobile menu
        initMobileMenu();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
