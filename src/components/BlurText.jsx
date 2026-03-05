import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const BlurText = ({
    text = '',
    delay = 200,
    className = '',
    animateBy = 'words', // 'words' or 'letters'
    direction = 'top', // 'top' or 'bottom'
    onAnimationComplete,
}) => {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [isAnimating, setIsAnimating] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    useEffect(() => {
        if (isInView) {
            setIsAnimating(true);
        }
    }, [isInView]);

    const defaultFrom = {
        filter: 'blur(10px)',
        opacity: 0,
        y: direction === 'top' ? -50 : 50,
    };

    const defaultTo = {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
    };

    return (
        <p ref={ref} className={className}>
            {elements.map((element, index) => (
                <motion.span
                    key={index}
                    initial={defaultFrom}
                    animate={isAnimating ? defaultTo : defaultFrom}
                    transition={{
                        duration: 0.8,
                        delay: (index * delay) / 1000,
                        ease: 'easeOut'
                    }}
                    onAnimationComplete={
                        index === elements.length - 1 ? onAnimationComplete : undefined
                    }
                    className="inline-block"
                    style={{ marginRight: animateBy === 'words' && element !== ' ' ? '0.25em' : '0' }}
                >
                    {element === ' ' ? '\u00A0' : element}
                </motion.span>
            ))}
        </p>
    );
};

export default BlurText;
