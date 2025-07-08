import { useEffect, useState } from "react"
import { SunMedium, Moon } from 'lucide-react';
import { cn } from "../lib/utils";

const ToggleTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme== "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            
        }else{
            setIsDarkMode(false)
        }
    },[])
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);

        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")

            setIsDarkMode(true);
        }
    };
    return (
        <div className="fixed top-5 right-20 sm:top-6 sm:right-28 md:top-5 md:right-8 z-50 flex flex-row items-center justify-between gap-2 ">
            <button
                onClick={toggleTheme}
                className={cn(
                    "rounded-full p-1",
                    "bg-white/70 dark:bg-gray-900/70 shadow-lg backdrop-blur-md",
                    "transition-colors duration-300 focus:outline-none cursor-pointer border border-gray-200 dark:border-gray-700",
                    "hover:scale-110 active:scale-95"
                )}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
                {isDarkMode ? (
                    <SunMedium className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
                ) : (
                    <Moon className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />
                )}
            </button>
        </div>
    );
}
export default ToggleTheme;