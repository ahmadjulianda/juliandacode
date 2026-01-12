'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const roles = [
    'Full-Stack Web Developer',
    'React Enthusiast',
    'Problem Solver',
    'UI/UX Lover',
];

const socialLinks = [
    { href: 'https://github.com/yourusername', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/yourusername', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:hello@yourname.com', icon: Mail, label: 'Email' },
];

export function HeroSection() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        const typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    return (
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pb-20">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient orbs */}
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Greeting */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                        <span className="animate-pulse">👋</span>
                        <span>Welcome to my portfolio</span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4 animate-fade-in delay-100">
                        Hi, I&apos;m{' '}
                        <span className="gradient-text">Ahmad Julianda</span>
                    </h1>

                    {/* Typing effect */}
                    <div className="h-12 md:h-14 flex items-center justify-center mb-6 animate-fade-in delay-200">
                        <span className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-medium">
                            {displayText}
                            <span className="inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 animate-pulse" />
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 animate-fade-in delay-300">
                        I help businesses build{' '}
                        <span className="text-text-primary font-medium">scalable web applications</span>{' '}
                        with modern technologies. Passionate about creating beautiful,
                        user-friendly experiences that solve real problems.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in delay-400">
                        <Button
                            href="/projects"
                            variant="primary"
                            size="lg"
                            icon={<ArrowRight className="w-5 h-5" />}
                            iconPosition="right"
                        >
                            View Projects
                        </Button>
                        <Button
                            href="/assets/cv.pdf"
                            variant="secondary"
                            size="lg"
                            icon={<Download className="w-5 h-5" />}
                        >
                            Download CV
                        </Button>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center justify-center gap-4 animate-fade-in delay-500">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-surface border border-border hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-200"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-text-tertiary rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
