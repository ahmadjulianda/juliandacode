import { Metadata } from 'next';
import Image from 'next/image';
import { Download, Mail, Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about me, my experience, skills, and background as a Full-Stack Web Developer.',
};

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string[];
    current?: boolean;
}

interface Education {
    degree: string;
    school: string;
    period: string;
    description?: string;
}

interface SkillCategory {
    name: string;
    skills: { name: string; icon: string }[];
}

const experiences: Experience[] = [
    {
        title: 'Frontend Developer',
        company: 'PT. Amaral Dwina Jaya',
        period: '2024 - Present',
        description: [
            'Built responsive Company Profile with React and Tailwind CSS',
            'Improved application performance by 40% through code optimization',
            'Led the migration from JavaScript to TypeScript',
            'Mentored junior developers on best practices',
        ],
        current: true,
    },
    {
        title: 'Sekretary & Web Developer',
        company: 'Iskandar Muda Wahdah Islamiyah Education Foundation',
        period: '2021 - Present',
        description: [
            'Developed REST APIs using Node.js and Express',
            'Maintained and improved legacy PHP applications',
            'Collaborated with design team on UI/UX improvements',
            'Implemented automated testing with Jest',
        ],
    },
    {
        title: 'Web Maintenance &Administrative Staff',
        company: 'Departmen of Transportation Banda Aceh City',
        period: '2022 - 2025',
        description: [
            'Web Ops: Performed routine maintenance, content updates, and technical troubleshooting for the official website',
            'Admin Support: Handled digital archiving, official correspondence, and data management',
            'Optimization: Improved the delivery of public information by keeping the web platform current and user-friendly',
        ],
    },
];

const education: Education[] = [
    {
        degree: 'Bachelor of Mechanical Engineering',
        school: 'Syiah Kuala University',
        period: '2014 - 2019',
        description: 'Graduated with honors. Focused on Corrosion and Computational Research and software engineering.',
    },
    {
        degree: 'Vocational and Competency-Based Training',
        school: 'Vocational and Productivity Training Center - Ministry of Manpower',
        period: '2025',
        description: 'Graduated with competently and certified. Focused on web technologies and software engineering.',
    },
];

const skillCategories: SkillCategory[] = [
    {
        name: 'Frontend',
        skills: [
            { name: 'React', icon: '⚛️' },
            { name: 'Next.js', icon: '▲' },
            { name: 'TypeScript', icon: '📘' },
            { name: 'Tailwind CSS', icon: '🎨' },
            { name: 'Vue.js', icon: '💚' },
        ],
    },
    {
        name: 'Backend',
        skills: [
            { name: 'Node.js', icon: '🟢' },
            { name: 'Express', icon: '🚂' },
            { name: 'PHP', icon: '🐘' },
            { name: 'Laravel', icon: '🔺' },
            { name: 'Python', icon: '🐍' },
        ],
    },
    {
        name: 'Database',
        skills: [
            { name: 'PostgreSQL', icon: '🐘' },
            { name: 'MongoDB', icon: '🍃' },
            { name: 'MySQL', icon: '🐬' },
            { name: 'Redis', icon: '🔴' },
        ],
    },
    {
        name: 'Tools',
        skills: [
            { name: 'Git', icon: '📦' },
            { name: 'Docker', icon: '🐳' },
            { name: 'AWS', icon: '☁️' },
            { name: 'Figma', icon: '🎨' },
            { name: 'VS Code', icon: '💻' },
        ],
    },
];

const certifications = [
    { name: 'Programming and Software Development', issuer: 'Indonesian Professional Certification Authority', year: '2025' },
    { name: 'JavaScript Course', issuer: 'Progate', year: '2025' },
    { name: 'PHP Developer Course (Laravel)', issuer: 'Progate', year: '2024' },
];

export default function AboutPage() {
    return (
        <div className="pt-24 pb-20">
            <div className="container-custom">
                {/* Hero section */}
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Photo */}
                        <Image
                            src="/assets/photo-ahmad.jpg"
                            alt="Ahmad Julianda"
                            width={192}
                            height={192}
                            className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover flex-shrink-0"
                        />

                        {/* Info */}
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                                Hi, I&apos;m Ahmad Julianda 👋
                            </h1>
                            <p className="text-xl text-primary font-medium mb-4">
                                Full-Stack Web Developer
                            </p>
                            <p className="text-text-secondary max-w-2xl mb-6">
                                A passionate developer based in Indonesia with 3+ years of experience building
                                web applications. I specialize in React, Node.js, PHP and Laravel and modern web technologies.
                                I love turning complex problems into simple, beautiful, and intuitive solutions.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <Button
                                    href="/assets/cv.pdf"
                                    variant="primary"
                                    icon={<Download className="w-4 h-4" />}
                                >
                                    Download CV
                                </Button>
                                <Button
                                    href="/contact"
                                    variant="secondary"
                                    icon={<Mail className="w-4 h-4" />}
                                >
                                    Contact Me
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Experience */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary/10">
                                    <Briefcase className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-text-primary">Work Experience</h2>
                            </div>

                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

                                <div className="space-y-8">
                                    {experiences.map((exp, index) => (
                                        <div key={index} className="relative pl-12">
                                            {/* Timeline dot */}
                                            <div
                                                className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full border-2 ${exp.current
                                                    ? 'bg-primary border-primary'
                                                    : 'bg-surface border-border'
                                                    }`}
                                            />

                                            <div className="bg-surface border border-border rounded-xl p-6 hover:border-primary-light transition-colors">
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    <h3 className="text-lg font-semibold text-text-primary">
                                                        {exp.title}
                                                    </h3>
                                                    {exp.current && (
                                                        <Badge variant="success" size="sm">Current</Badge>
                                                    )}
                                                </div>
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary mb-3">
                                                    <span>{exp.company}</span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {exp.period}
                                                    </span>
                                                </div>
                                                <ul className="space-y-1.5">
                                                    {exp.description.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                                                            <span className="text-primary mt-1">•</span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary/10">
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-text-primary">Education</h2>
                            </div>

                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div key={index} className="bg-surface border border-border rounded-xl p-6">
                                        <h3 className="text-lg font-semibold text-text-primary mb-1">
                                            {edu.degree}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary mb-2">
                                            <span>{edu.school}</span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {edu.period}
                                            </span>
                                        </div>
                                        {edu.description && (
                                            <p className="text-sm text-text-secondary">{edu.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Certifications */}
                        <section>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary/10">
                                    <Award className="w-5 h-5 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-text-primary">Certifications</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="bg-surface border border-border rounded-xl p-4 hover:border-primary-light transition-colors">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary/10">
                                                <Award className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-text-primary text-sm">{cert.name}</h3>
                                                <p className="text-xs text-text-secondary">{cert.issuer} • {cert.year}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-8">
                            {/* Skills */}
                            <section>
                                <h2 className="text-xl font-bold text-text-primary mb-6">Technical Skills</h2>
                                <div className="space-y-6">
                                    {skillCategories.map((category) => (
                                        <div key={category.name}>
                                            <h3 className="text-sm font-medium text-text-tertiary mb-3">
                                                {category.name}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {category.skills.map((skill) => (
                                                    <div
                                                        key={skill.name}
                                                        className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded-lg text-sm"
                                                    >
                                                        <span>{skill.icon}</span>
                                                        <span className="text-text-primary">{skill.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Fun facts */}
                            <section className="bg-surface border border-border rounded-xl p-6">
                                <h2 className="font-semibold text-text-primary mb-4">Fun Facts</h2>
                                <ul className="space-y-2 text-sm text-text-secondary">
                                    <li>☕ Coffee lover (3+ cups/day)</li>
                                    <li>🎮 Casual gamer in my free time</li>
                                    <li>📚 Always reading tech blogs</li>
                                    <li>🎵 Code better with lo-fi music</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
