import { useEffect } from 'react';

const useCommonScripts = () => {
    useEffect(() => {
        // Preloader fadeout
        const timer = setTimeout(() => {
            const preloader = document.querySelector('.preloader');
            if (preloader) {
                preloader.style.opacity = '0';
                preloader.style.transition = 'opacity 0.5s';
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }
            
            const swiperFade = document.querySelector('.swiper-fade');
            if (swiperFade) {
                swiperFade.classList.add('fade-ani');
            }
        }, 100);

        // Preloader close button
        const preloaderCloseBtns = document.querySelectorAll('.preloaderCls');
        preloaderCloseBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const preloader = document.querySelector('.preloader');
                if (preloader) {
                    preloader.style.display = 'none';
                }
            });
        });

        // Sticky header on scroll
        const handleScroll = () => {
            const topPos = window.scrollY;
            const stickyWrapper = document.querySelector('.sticky-wrapper');
            const categoryMenu = document.querySelector('.category-menu');
            
            if (topPos > 500) {
                stickyWrapper?.classList.add('sticky');
                categoryMenu?.classList.add('close-category');
            } else {
                stickyWrapper?.classList.remove('sticky');
                categoryMenu?.classList.remove('close-category');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Background images from data attributes
        const bgElements = document.querySelectorAll('[data-bg-src]');
        bgElements.forEach(el => {
            const src = el.getAttribute('data-bg-src');
            el.style.backgroundImage = `url(${src})`;
            el.removeAttribute('data-bg-src');
            el.classList.add('background-image');
        });

        // Background colors from data attributes
        const bgColorElements = document.querySelectorAll('[data-bg-color]');
        bgColorElements.forEach(el => {
            const color = el.getAttribute('data-bg-color');
            el.style.backgroundColor = color;
            el.removeAttribute('data-bg-color');
        });

        // Mask images from data attributes
        const maskElements = document.querySelectorAll('[data-mask-src]');
        maskElements.forEach(el => {
            const mask = el.getAttribute('data-mask-src');
            el.style.maskImage = `url(${mask})`;
            el.style.webkitMaskImage = `url(${mask})`;
            el.classList.add('bg-mask');
            el.removeAttribute('data-mask-src');
        });

        // Theme colors from data attributes
        const themeColorElements = document.querySelectorAll('[data-theme-color]');
        themeColorElements.forEach(el => {
            const color = el.getAttribute('data-theme-color');
            el.style.setProperty('--theme-color', color);
            el.removeAttribute('data-theme-color');
        });

        // Shape Mockup positioning
        const shapeMockups = document.querySelectorAll('.shape-mockup');
        shapeMockups.forEach((shape) => {
            const shapeTop = shape.getAttribute('data-top');
            const shapeRight = shape.getAttribute('data-right');
            const shapeBottom = shape.getAttribute('data-bottom');
            const shapeLeft = shape.getAttribute('data-left');
            
            if (shapeTop) shape.style.top = shapeTop;
            if (shapeRight) shape.style.right = shapeRight;
            if (shapeBottom) shape.style.bottom = shapeBottom;
            if (shapeLeft) shape.style.left = shapeLeft;
            
            shape.removeAttribute('data-top');
            shape.removeAttribute('data-right');
            shape.removeAttribute('data-bottom');
            shape.removeAttribute('data-left');
            
            if (shape.parentElement) {
                shape.parentElement.classList.add('shape-mockup-wrap');
            }
        });

        // Cleanup
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
};

export default useCommonScripts;