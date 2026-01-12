import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react';

const socialLinks = [
    {
        href: 'https://github.com/ahmadjulianda',
        icon: Github,
        label: 'GitHub',
    },
    {
        href: 'https://www.linkedin.com/in/ahmad-julianda-70693a365',
        icon: Linkedin,
        label: 'LinkedIn',
    },
    {
        href: 'https://instagram.com/juliandahmad',
        icon: Instagram,
        label: 'Instagram',
    },
    {
        href: 'mailto:ahmadjulianda@gmail.com',
        icon: Mail,
        label: 'Email',
    },
];

const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-surface">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-xl font-bold text-text-primary"
                        >
                            <span className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white text-sm font-bold">
                                AJ
                            </span>
                            <span>Ahmad Julianda</span>
                        </Link>
                        <p className="text-sm text-text-secondary max-w-xs">
                            Full-Stack Web Developer passionate about creating beautiful and
                            functional web experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-text-secondary hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-semibold text-text-primary mb-4">Connect</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-surface-elevated border border-border hover:border-primary hover:text-primary transition-all duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-text-secondary mt-4">
                            hello@ahmadjulianda.com
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-text-tertiary">
                        © {currentYear} Ahmad Julianda. All rights reserved.
                    </p>
                    <p className="text-sm text-text-tertiary flex items-center gap-1">
                        Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
