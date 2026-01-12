import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 gradient-bg opacity-10" />
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg text-white mb-6">
                        <Mail className="w-8 h-8" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Let&apos;s Work Together
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-text-secondary mb-8">
                        I&apos;m currently open for new opportunities as a Web Developer.
                        Let&apos;s discuss how I can help your team build something amazing!
                    </p>

                    {/* CTA Button */}
                    <Button
                        href="/contact"
                        variant="primary"
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                    >
                        Get In Touch
                    </Button>

                    {/* Availability badge */}
                    <div className="mt-8 inline-flex items-center gap-2 text-sm text-text-secondary">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                        </span>
                        Currently available for freelance & full-time opportunities
                    </div>
                </div>
            </div>
        </section>
    );
}
