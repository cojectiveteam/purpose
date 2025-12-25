import React from 'react';

interface PrimaryButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
}

// Optimized arrow icon as a separate component
const ArrowIcon = () => (
    <svg
        width="6"
        height="9"
        viewBox="0 0 6 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        <path
            d="M1 1L4.5 4.5L1 8"
            stroke="#7A38FC"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default function PrimaryButton({
    children,
    onClick,
    href,
    className = ""
}: PrimaryButtonProps) {
    const baseStyles = "bg-primary font-big-shoulders text-sm md:text-base capitalize text-text-light px-7 py-3 rounded-full max-w-max flex gap-3 items-center hover:opacity-90 transition-opacity";

    const content = (
        <>
            <span>{children}</span>
            <span className="bg-accent w-6 h-6 rounded-full flex items-center justify-center">
                <ArrowIcon />
            </span>
        </>
    );

    if (href) {
        return (
            <a href={href} className={`${baseStyles} ${className}`}>
                {content}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyles} ${className}`}>
            {content}
        </button>
    );
}
