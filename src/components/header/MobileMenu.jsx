import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import MainMenu from './MainMenu';
import logo from '../../assets/img/logo.svg';

const MobileMenu = () => {
    const menuWrapperRef = useRef(null);

    useEffect(() => {
        const menuWrapper = menuWrapperRef.current;
        if (!menuWrapper) return;

        // Setup: Add classes and expand buttons
        const setupMenu = () => {
            const allLis = menuWrapper.querySelectorAll('.ot-mobile-menu li');
            
            allLis.forEach(li => {
                const submenu = li.querySelector('ul');
                
                if (submenu) {
                    submenu.classList.add('ot-submenu');
                    submenu.style.display = 'none';
                    li.classList.add('ot-item-has-children');
                    
                    // Get direct child anchor
                    const link = Array.from(li.children).find(child => 
                        child.tagName === 'A' || child.classList.contains('nav-link')
                    );
                    
                    if (link && !link.querySelector('.ot-mean-expand')) {
                        const span = document.createElement('span');
                        span.className = 'ot-mean-expand';
                        // span.innerHTML = '+';
                        link.appendChild(span);
                    }
                }
            });
        };

        setupMenu();

        // Simple slide toggle
        const slideToggle = (element, show) => {
            if (show) {
                // Show
                element.style.display = 'block';
                element.style.height = '0px';
                element.style.overflow = 'hidden';
                element.style.transition = 'height 400ms ease';
                
                requestAnimationFrame(() => {
                    element.style.height = element.scrollHeight + 'px';
                });
                
                setTimeout(() => {
                    element.style.height = 'auto';
                    element.style.overflow = '';
                }, 400);
            } else {
                // Hide
                element.style.height = element.scrollHeight + 'px';
                element.style.overflow = 'hidden';
                element.style.transition = 'height 400ms ease';
                
                requestAnimationFrame(() => {
                    element.style.height = '0px';
                });
                
                setTimeout(() => {
                    element.style.display = 'none';
                    element.style.height = '';
                    element.style.overflow = '';
                }, 400);
            }
        };

        // Close all sibling submenus
        const closeSiblingMenus = (currentLi) => {
            const parentUl = currentLi.parentElement;
            const siblings = Array.from(parentUl.children).filter(
                child => child !== currentLi && child.classList.contains('ot-item-has-children')
            );
            
            siblings.forEach(sibling => {
                const submenu = sibling.querySelector('.ot-submenu');
                if (submenu && submenu.classList.contains('ot-open')) {
                    sibling.classList.remove('ot-active');
                    submenu.classList.remove('ot-open');
                    slideToggle(submenu, false);
                }
            });
        };

        // Main click handler
        const handleMenuClick = (e) => {
            // Check if expand button was clicked
            if (e.target.classList.contains('ot-mean-expand')) {
                e.preventDefault();
                e.stopPropagation();
                
                const link = e.target.parentElement;
                const li = link.parentElement;
                const submenu = li.querySelector('.ot-submenu');
                
                if (submenu) {
                    const isOpen = submenu.classList.contains('ot-open');
                    
                    // Close sibling menus before opening this one
                    if (!isOpen) {
                        closeSiblingMenus(li);
                    }
                    
                    li.classList.toggle('ot-active');
                    submenu.classList.toggle('ot-open');
                    slideToggle(submenu, !isOpen);
                }
                
                return false;
            }
            
            // Check if parent link with submenu was clicked (but not expand button)
            const clickedLink = e.target.closest('a');
            if (clickedLink && clickedLink.parentElement.classList.contains('ot-item-has-children')) {
                const clickedExpand = e.target.classList.contains('ot-mean-expand');
                if (!clickedExpand) {
                    // Clicked on link text, not expand button - prevent navigation
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const li = clickedLink.parentElement;
                    const submenu = li.querySelector('.ot-submenu');
                    
                    if (submenu) {
                        const isOpen = submenu.classList.contains('ot-open');
                        
                        // Close sibling menus before opening this one
                        if (!isOpen) {
                            closeSiblingMenus(li);
                        }
                        
                        li.classList.toggle('ot-active');
                        submenu.classList.toggle('ot-open');
                        slideToggle(submenu, !isOpen);
                    }
                    
                    return false;
                }
            }
        };

        // Menu toggle
        const menuToggle = () => {
            menuWrapper.classList.toggle('ot-body-visible');

            if (!menuWrapper.classList.contains('ot-body-visible')) {
                const allSubmenus = menuWrapper.querySelectorAll('.ot-submenu');
                allSubmenus.forEach(submenu => {
                    submenu.style.display = 'none';
                    submenu.classList.remove('ot-open');
                    submenu.style.height = '';
                    submenu.closest('li')?.classList.remove('ot-active');
                });
            }
        };

        // Toggle buttons
        const handleToggleClick = (e) => {
            e.preventDefault();
            menuToggle();
        };

        // Close on outside click
        const handleOutsideClick = (e) => {
            if (e.target === menuWrapper) {
                menuToggle();
            }
        };

        // Prevent menu area clicks from closing
        const menuArea = menuWrapper.querySelector('.ot-menu-area');
        const handleMenuAreaClick = (e) => {
            e.stopPropagation();
        };

        // Attach listeners
        const mobileMenu = menuWrapper.querySelector('.ot-mobile-menu');
        if (mobileMenu) {
            mobileMenu.addEventListener('click', handleMenuClick, true);
        }
        
        menuWrapper.addEventListener('click', handleOutsideClick);
        if (menuArea) {
            menuArea.addEventListener('click', handleMenuAreaClick);
        }

        const toggleButtons = document.querySelectorAll('.ot-menu-toggle');
        toggleButtons.forEach(btn => btn.addEventListener('click', handleToggleClick));

        // Cleanup
        return () => {
            if (mobileMenu) {
                mobileMenu.removeEventListener('click', handleMenuClick, true);
            }
            menuWrapper.removeEventListener('click', handleOutsideClick);
            if (menuArea) {
                menuArea.removeEventListener('click', handleMenuAreaClick);
            }
            toggleButtons.forEach(btn => btn.removeEventListener('click', handleToggleClick));
        };
    }, []);

    return (
        <div className="ot-menu-wrapper" ref={menuWrapperRef}>
            <div className="ot-menu-area text-center">
                <button className="ot-menu-toggle">
                    <i className="fal fa-times" />
                </button>
                <div className="mobile-logo">
                    <Link to="/">
                        <img src={logo} alt="Tronix" />
                    </Link>
                </div>
                <div className="ot-mobile-menu">
                    <MainMenu />
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;