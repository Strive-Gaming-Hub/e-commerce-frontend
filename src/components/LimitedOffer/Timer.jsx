"use client";

import { useState, useEffect } from "react";

export default function Timer({ targetDate }) {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <TimeItem value={timeLeft.days} title="Days" />
            <span className="text-3xl font-bold relative bottom-3">:</span>
            <TimeItem value={timeLeft.hours} title="Hours" />
            <span className="text-3xl font-bold relative bottom-3">:</span>
            <TimeItem value={timeLeft.minutes} title="Minutes" />
            <span className="text-3xl font-bold relative bottom-3">:</span>
            <TimeItem value={timeLeft.seconds} title="Seconds" />
        </div>
    );
}

function TimeItem({title, value}) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-3xl font-semibold">{value < 10 ? "0"+value : value}</span>
            <span className="text-xs font-medium text-gray-300">{title}</span>
        </div>
    )
}