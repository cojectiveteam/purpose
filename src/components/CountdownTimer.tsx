"use client";

import { useState, useEffect } from 'react';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownTimerProps {
    targetDate?: Date;
    variant?: 'default' | 'minimal';
    className?: string;
}

export default function CountdownTimer({
    targetDate: customTargetDate,
    variant = 'default',
    className = ''
}: CountdownTimerProps) {
    const [targetDate] = useState(() => customTargetDate || new Date('2025-12-14T11:30:00'));
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const calculateTimeLeft = () => {
            const difference = targetDate.getTime() - new Date().getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!mounted) return null;

    // Default variant - with purple background blocks
    const DefaultTimeBlock = ({ value, label }: { value: number; label: string }) => (

        <div className="flex flex-col gap-4 items-center bg-white text-primary rounded-2xl px-6 py-5 text-center min-w-[110px]">
            <div className="text-6xl font-semibold tabular-nums">
                {value.toString().padStart(2, '0')}
            </div>
            <div className="text-base text-[#333333] font-bold capitalize tracking-wider">{label}</div>
        </div>

    );

    // Minimal variant - no background
    const MinimalTimeBlock = ({ value, label }: { value: number; label: string }) => (
        <div className="flex flex-col items-center font-big-shoulders">
            <span className="text-5xl  font-semibold tabular-nums text-primary">
                {value.toString().padStart(2, '0')}
            </span>
            <span className="text-base text-[#333333] mt-1 capitalize tracking-wider">{label}</span>
        </div>
    );

    const TimeBlock = variant === 'minimal' ? MinimalTimeBlock : DefaultTimeBlock;
    const separatorStyle = variant === 'minimal'
        ? "text-black/30 text-3xl font-bold"
        : "text-black/30 text-4xl font-bold";

    return (
        <div className={`flex items-center gap-5 ${className}`}>
            <TimeBlock value={timeLeft.days} label="Days" />
            <span className={separatorStyle}>:</span>
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <span className={separatorStyle}>:</span>
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <span className={separatorStyle}>:</span>
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>
    );
}
