import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])
    // useEffect(() => {
    //     const rafId = requestAnimationFrame(() => {
    //         window.scrollTo({
    //             top: 0,
    //             left: 0,
    //             behavior: 'auto',
    //         });
    //     });

    //     return () => cancelAnimationFrame(rafId);
    // }, [pathname]);

    return null
}

export default ScrollToTop