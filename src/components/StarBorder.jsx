import React from "react";

const StarBorder = ({
    as: Component = "div",
    className = "",
    color = "magenta",
    speed = "5s",
    children,
    ...rest
}) => {
    return (
        <Component
            className={`relative inline-block overflow-hidden rounded-[24px] p-[2px] w-full ${className}`}
            {...rest}
        >
            <div
                className="absolute inset-[-1000%] opacity-80"
                style={{
                    background: `conic-gradient(from 90deg at 50% 50%, transparent 40%, ${color} 50%, transparent 60%)`,
                    animation: `spin ${speed} linear infinite`,
                }}
            />
            <div className="relative h-full w-full rounded-[22px] bg-slate-900 overflow-hidden">
                {children}
            </div>
            <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </Component>
    );
};

export default StarBorder;
