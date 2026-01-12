'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const socialLinks = [
    { href: 'https://github.com/ahmadjulianda', icon: Github, label: 'GitHub', username: '@ahmadjulianda' },
    { href: 'https://www.linkedin.com/in/ahmad-julianda-70693a365', icon: Linkedin, label: 'LinkedIn', username: 'Ahmad Julianda' },
    { href: 'https://instagram.com/juliandahmad', icon: Instagram, label: 'Instagram', username: '@juliandahmad' },
];

const subjectOptions = [
    { value: 'hiring', label: 'Job Opportunity' },
    { value: 'project', label: 'Project Collaboration' },
    { value: 'freelance', label: 'Freelance Work' },
    { value: 'question', label: 'General Question' },
    { value: 'other', label: 'Other' },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Create FormData for better Formspree compatibility
            const submitData = new FormData();
            submitData.append('name', formData.name);
            submitData.append('email', formData.email);
            submitData.append('subject', formData.subject);
            submitData.append('message', formData.message);
            // Add _replyto so you can reply directly to the sender
            submitData.append('_replyto', formData.email);

            const response = await fetch('https://formspree.io/f/mbddreel', {
                method: 'POST',
                body: submitData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                const errorData = await response.json();
                console.error('Formspree error:', errorData);
                setStatus('error');
            }
        } catch (error) {
            console.error('Submit error:', error);
            setStatus('error');
        }

        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="pt-24 pb-20">
            <div className="container-custom">
                {/* Page header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Have a project in mind or want to discuss opportunities?
                        I&apos;d love to hear from you! Fill out the form below or reach out directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
                    {/* Contact form */}
                    <div className="lg:col-span-3">
                        <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="input"
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="input"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="input appearance-none"
                                    >
                                        <option value="">Select a subject</option>
                                        {subjectOptions.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="input resize-none"
                                        placeholder="Tell me about your project or opportunity..."
                                    />
                                </div>

                                {/* Submit button */}
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className="w-full text-white"
                                    icon={status === 'loading' ? undefined : <Send className="w-4 h-4" />}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                                </Button>

                                {/* Status messages */}
                                {status === 'success' && (
                                    <div className="flex items-center gap-2 p-4 bg-success/10 text-success rounded-lg">
                                        <CheckCircle className="w-5 h-5" />
                                        <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="flex items-center gap-2 p-4 bg-error/10 text-error rounded-lg">
                                        <AlertCircle className="w-5 h-5" />
                                        <span>Something went wrong. Please try again later.</span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Contact info sidebar */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Contact info card */}
                        <div className="bg-surface border border-border rounded-2xl p-6">
                            <h2 className="font-semibold text-text-primary mb-6">Contact Info</h2>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary/10">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-text-tertiary">Email</div>
                                        <a
                                            href="mailto:ahmadjulianda@gmail.com"
                                            className="text-text-primary hover:text-primary transition-colors"
                                        >
                                            ahmadjulianda@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary/10">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-text-tertiary">Location</div>
                                        <span className="text-text-primary">Indonesia</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="bg-surface border border-border rounded-2xl p-6">
                            <h2 className="font-semibold text-text-primary mb-6">Social Links</h2>

                            <div className="space-y-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-elevated transition-colors group"
                                    >
                                        <div className="p-2 rounded-lg bg-surface-elevated group-hover:bg-primary-50 dark:group-hover:bg-primary/10 transition-colors">
                                            <social.icon className="w-5 h-5 text-text-secondary group-hover:text-primary transition-colors" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-text-primary">{social.label}</div>
                                            <div className="text-xs text-text-tertiary">{social.username}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                                </span>
                                <span className="font-medium text-text-primary">Available for work</span>
                            </div>
                            <p className="text-sm text-text-secondary">
                                I typically respond within 24 hours. Looking forward to hearing from you!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
