'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';

export function ThemeToggle() {
    const { theme, toggleTheme, mounted } = useTheme();

    // Don't render interactive elements until mounted to prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="p-2 rounded-lg bg-surface border border-border w-9 h-9" />
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-lg bg-surface border border-border hover:border-primary transition-all duration-200 focus-ring"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <div className="relative w-5 h-5">
                <Sun
                    className={`absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-300 ${theme === 'light' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                        }`}
                />
                <Moon
                    className={`absolute inset-0 w-5 h-5 text-indigo-400 transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                        }`}
                />
            </div>
        </button>
    );
}
