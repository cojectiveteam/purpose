interface GlowEffectProps {
    width?: string;
    height?: string;
    bgClass?: string;
    opacity?: string;
    className?: string;
}

export default function GlowEffect({ className = "", width = "w-[285px]", height = "h-[285px]", bgClass = "gold-gradient", opacity = "opacity-40" }: GlowEffectProps) {
    return (
        <div className={`absolute ${width} ${height} ${bgClass} rounded-full ${opacity} blur-[100px] z-0 ${className}`}></div>
    );
}
