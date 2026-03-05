import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplitText = ({
    text,
    className = '',
    delay = 0,
    duration = 1.25,
    ease = "easeOut",
    splitType = "chars",
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = "-100px",
    textAlign = "center",
    onLetterAnimationComplete,
    showCallback = false
}) => {
    const containerRef = useRef(null);
    const [inView, setInView] = useState(false);
    const [animationCount, setAnimationCount] = useState(0);

    const words = text.split(' ');
    let charIndex = 0;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const handleAnimationComplete = () => {
        setAnimationCount(prev => {
            const newCount = prev + 1;
            if (showCallback && onLetterAnimationComplete && newCount === text.replace(/\s+/g, '').length) {
                onLetterAnimationComplete();
            }
            return newCount;
        });
    };

    return (
        <div
            ref={containerRef}
            className={`flex flex-wrap ${textAlign === 'center' ? 'justify-center' : 'justify-start'} ${className}`}
            style={{ textAlign }}
        >
            {words.map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                    <div className="inline-block whitespace-nowrap">
                        {splitType === "chars" ? (
                            word.split('').map((char, i) => {
                                const currentDelay = delay ? delay / 1000 : 0.05;
                                const index = charIndex++;
                                return (
                                    <motion.span
                                        key={i}
                                        className="inline-block"
                                        initial={from}
                                        animate={inView ? to : from}
                                        transition={{
                                            duration: duration,
                                            ease: ease,
                                            delay: index * currentDelay
                                        }}
                                        onAnimationComplete={handleAnimationComplete}
                                    >
                                        {char}
                                    </motion.span>
                                );
                            })
                        ) : (
                            <motion.span
                                className="inline-block"
                                initial={from}
                                animate={inView ? to : from}
                                transition={{
                                    duration: duration,
                                    ease: ease,
                                    delay: wordIndex * (delay ? delay / 1000 : 0.1)
                                }}
                            >
                                {word}
                            </motion.span>
                        )}
                    </div>
                    {wordIndex < words.length - 1 && <span className="inline-block w-[0.25em]">&nbsp;</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default SplitText;
