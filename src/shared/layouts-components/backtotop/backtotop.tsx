

import React, { useEffect, useRef } from 'react'

interface BacktotopProps { }

const Backtotop: React.FC<BacktotopProps> = () => {
    const scrollToTopRef = useRef<HTMLDivElement | null>(null);
    const screenUp = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollToTopRef.current) {
                window.scrollY > 100 ? (scrollToTopRef.current.style.display = "flex") : (scrollToTopRef.current.style.display = "none")
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollToTopRef]);

    return (
        <div ref={scrollToTopRef} className="scrollToTop" onClick={screenUp}>
            <span className="arrow lh-1">
                <i className="ti ti-caret-up fs-20"></i>
            </span>
        </div>
    )
}

export default Backtotop