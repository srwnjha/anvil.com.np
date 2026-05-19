import { useEffect } from 'react';

const useSideMenu = (sideMenu, sideMunuOpen, sideMenuCls, toggleCls = 'show') => {
    useEffect(() => {
        const menuElement = document.querySelector(sideMenu);
        const openButton = document.querySelector(sideMunuOpen);
        const closeButton = document.querySelector(sideMenuCls);
        const menuChild = document.querySelector(`${sideMenu} > div`);

        if (!menuElement || !openButton) return;

        // Open sidebar
        const handleOpen = (e) => {
            e.preventDefault();
            menuElement.classList.add(toggleCls);
        };

        // Close when clicking on backdrop
        const handleBackdropClick = (e) => {
            e.stopPropagation();
            menuElement.classList.remove(toggleCls);
        };

        // Prevent closing when clicking menu content
        const handleMenuChildClick = (e) => {
            e.stopPropagation();
            menuElement.classList.add(toggleCls);
        };

        // Close button
        const handleClose = (e) => {
            e.preventDefault();
            e.stopPropagation();
            menuElement.classList.remove(toggleCls);
        };

        // Add event listeners
        openButton.addEventListener('click', handleOpen);
        menuElement.addEventListener('click', handleBackdropClick);
        
        if (menuChild) {
            menuChild.addEventListener('click', handleMenuChildClick);
        }
        
        if (closeButton) {
            closeButton.addEventListener('click', handleClose);
        }

        // Cleanup
        return () => {
            openButton.removeEventListener('click', handleOpen);
            menuElement.removeEventListener('click', handleBackdropClick);
            
            if (menuChild) {
                menuChild.removeEventListener('click', handleMenuChildClick);
            }
            
            if (closeButton) {
                closeButton.removeEventListener('click', handleClose);
            }
        };
    }, [sideMenu, sideMunuOpen, sideMenuCls, toggleCls]);
};

export default useSideMenu;