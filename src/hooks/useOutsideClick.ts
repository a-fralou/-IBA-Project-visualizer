import React from 'react';

export const useOutsideClick = (elementRef: React.RefObject<any>, onOutsideClick: (event: Event) => void) => {
    React.useEffect(() => {
        function handleClickOutside(event: Event) {
            if (elementRef.current && !elementRef.current.contains(event.target)) {
                onOutsideClick(event);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [elementRef, onOutsideClick]);
};
