'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Download, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent'}
      `}
        >
            <div className="container-custom">
                <nav className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-xl font-bold text-text-primary hover:text-primary transition-colors"
                    >
                        <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-sm font-bold">
                            AJ
                        </span>
                        <span className="hidden sm:block">Ahmad Julianda</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`
                  relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${pathname === link.href
                                        ? 'text-primary'
                                        : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                                    }
                `}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <Button
                            href="/contact"
                            variant="primary"
                            size="sm"
                            icon={<Mail className="w-4 h-4" />}
                        >
                            Contact Me
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-surface transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6 text-text-primary" />
                            ) : (
                                <Menu className="w-6 h-6 text-text-primary" />
                            )}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
          md:hidden fixed inset-x-0 top-16 bg-surface border-b border-border
          transition-all duration-300 ease-in-out overflow-hidden
          ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
            >
                <div className="container-custom py-4">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`
                  px-4 py-3 rounded-lg text-base font-medium transition-colors
                  ${pathname === link.href
                                        ? 'bg-primary-50 text-primary dark:bg-primary/10'
                                        : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
                                    }
                `}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <hr className="my-2 border-border" />

                        <Button
                            href="/assets/cv.pdf"
                            variant="secondary"
                            icon={<Download className="w-4 h-4" />}
                            className="justify-start"
                        >
                            Download CV
                        </Button>

                        <Button
                            href="/contact"
                            variant="primary"
                            icon={<Mail className="w-4 h-4" />}
                            className="justify-start"
                        >
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
