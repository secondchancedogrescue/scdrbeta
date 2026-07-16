import React, { createContext, useContext, useEffect, useState } from 'react';
import Calendar from './Calendar';

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
    const [calOpen, setCalOpen] = useState(false);

    const handleOpenCal = () => setCalOpen(true);
    const handleCloseCal = () => setCalOpen(false);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') handleCloseCal();
        };

        if (calOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [calOpen]);

    return (
        <ModalContext.Provider value={{ handleOpenCal }}>
            {children}
            <Calendar open={calOpen} onClose={handleCloseCal} />
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext);
    return context;
}