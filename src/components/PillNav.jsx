import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const PillNav = ({
    items = [],
    activeHref = '/',
    logo,
    logoAlt = "Logo",
    className,
    ease = "easeOut",
    baseColor = "#000000",
    pillColor = "#ffffff",
    hoveredPillTextColor = "#000000",
    pillTextColor = "#ffffff",
    theme = "dark",
    initialLoadAnimation = false
}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Set default generic pill nav colors based on theme if not overridden
    const finalBaseColor = theme === 'light' ? '#ffffff' : baseColor;
    const finalBaseText = theme === 'light' ? '#000000' : '#ffffff';

    return (
        <nav
            className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full shadow-lg border",
                theme === 'light' ? 'border-gray-200 shadow-gray-200/50' : 'border-gray-800 shadow-black/50',
                className
            )}
            style={{ backgroundColor: finalBaseColor }}
        >
            {logo && (
                <div className="mr-8 scale-90">
                    {typeof logo === 'string' ? <img src={logo} alt={logoAlt} className="h-8 w-auto" /> : logo}
                </div>
            )}

            <ul className="flex items-center gap-2 m-0 p-0 list-none">
                {items.map((item, index) => {
                    const isActive = item.href === activeHref;
                    const isHovered = hoveredIndex === index;

                    return (
                        <li
                            key={index}
                            className="relative list-none m-0 p-0"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <a
                                href={item.href}
                                className="relative z-10 block px-5 py-2 text-sm font-medium transition-colors duration-300 no-underline"
                                style={{
                                    color: isActive || isHovered ? hoveredPillTextColor : (theme === 'light' ? '#1E3A8A' : finalBaseText)
                                }}
                            >
                                {item.label}
                            </a>

                            <AnimatePresence>
                                {(isHovered || isActive) && (
                                    <motion.div
                                        layoutId="pill-bg"
                                        className="absolute inset-0 z-0 rounded-full"
                                        style={{ backgroundColor: pillColor }}
                                        initial={{ opacity: initialLoadAnimation ? 0 : 1, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30,
                                            ease: ease
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default PillNav;
