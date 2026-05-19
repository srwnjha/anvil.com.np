import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const progressPathRef = useRef(null);
    const pathLength = useRef(0);

    const { pathname } = useLocation();

    useEffect(() => {
        const progressPath = progressPathRef.current;
        if (!progressPath) return;

        // Get path length and set up initial styles
        pathLength.current = progressPath.getTotalLength();
        progressPath.style.transition = 'none';
        progressPath.style.strokeDasharray = `${pathLength.current} ${pathLength.current}`;
        progressPath.style.strokeDashoffset = pathLength.current;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = 'stroke-dashoffset 10ms linear';

        // Update progress based on scroll
        const updateProgress = () => {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength.current - (scroll * pathLength.current / height);
            progressPath.style.strokeDashoffset = progress;

            // Show/hide button based on scroll position
            if (scroll > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Initial update
        updateProgress();

        // Add scroll listener
        window.addEventListener('scroll', updateProgress);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    // Reset scroll to top on route change (single-page navigation)
    useEffect(() => {
        // jump to top when pathname changes
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        // hide the button immediately after navigation
        setIsVisible(false);
    }, [pathname]);

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div 
            className={`scroll-top ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
            style={{ cursor: 'pointer' }}
        >
            <svg 
                className="progress-circle svg-content" 
                width="100%" 
                height="100%" 
                viewBox="-1 -1 102 102"
            >
                <path 
                    ref={progressPathRef}
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                />
            </svg>
        </div>
    );
};

export default ScrollTop;