"use client";

import { useState, useEffect } from "react";

const LiveClock = () => {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const time = new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    }).format(now);

    const date = new Intl.DateTimeFormat(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(now);

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
                {time.toUpperCase()}
            </h1>
            <p className="text-lg font-medium text-[#C9DDFF] lg:text-2xl">
                {date}
            </p>
        </div>
    );
};

export default LiveClock;
