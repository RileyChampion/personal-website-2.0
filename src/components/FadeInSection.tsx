import React, {useEffect, useRef, useState} from 'react';
import '../animations.scss'

interface FadeInSectionProps {
    children: React.ReactNode;
    fadeIn: string
    floatUp: string
    customStyle: React.CSSProperties
}

function FadeInSection({children, fadeIn, floatUp, customStyle} : FadeInSectionProps){
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (domRef.current) {
                    observer.unobserve(domRef.current);
                }
            }
            });
        });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) {
            observer.unobserve(domRef.current);
            }
        };

    }, []);

    return (
    <div style={isVisible ? {animation: `fade-in ${fadeIn} ease-in-out, float-up ${floatUp} ease-in-out`, ...customStyle} : {}} ref={domRef}>
        {children}
    </div>
    );
};
    
export default FadeInSection;