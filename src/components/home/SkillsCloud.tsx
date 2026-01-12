'use client';

import { useState } from 'react';

interface Skill {
    name: string;
    icon: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    category: 'frontend' | 'backend' | 'database' | 'tools';
}

const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: '⚛️', level: 'Expert', category: 'frontend' },
    { name: 'Next.js', icon: '▲', level: 'Advanced', category: 'frontend' },
    { name: 'TypeScript', icon: '📘', level: 'Advanced', category: 'frontend' },
    { name: 'Tailwind CSS', icon: '🎨', level: 'Expert', category: 'frontend' },
    { name: 'Vue.js', icon: '💚', level: 'Intermediate', category: 'frontend' },

    // Backend
    { name: 'Node.js', icon: '🟢', level: 'Advanced', category: 'backend' },
    { name: 'Express', icon: '🚂', level: 'Advanced', category: 'backend' },
    { name: 'PHP', icon: '🐘', level: 'Intermediate', category: 'backend' },
    { name: 'Laravel', icon: '🔺', level: 'Intermediate', category: 'backend' },
    { name: 'Python', icon: '🐍', level: 'Intermediate', category: 'backend' },

    // Database
    { name: 'PostgreSQL', icon: '🐘', level: 'Advanced', category: 'database' },
    { name: 'MongoDB', icon: '🍃', level: 'Advanced', category: 'database' },
    { name: 'MySQL', icon: '🐬', level: 'Advanced', category: 'database' },
    { name: 'Redis', icon: '🔴', level: 'Intermediate', category: 'database' },

    // Tools
    { name: 'Git', icon: '📦', level: 'Expert', category: 'tools' },
    { name: 'Docker', icon: '🐳', level: 'Intermediate', category: 'tools' },
    { name: 'AWS', icon: '☁️', level: 'Intermediate', category: 'tools' },
    { name: 'Figma', icon: '🎨', level: 'Intermediate', category: 'tools' },
];

const levelColors = {
    Beginner: 'bg-gray-400',
    Intermediate: 'bg-blue-500',
    Advanced: 'bg-purple-500',
    Expert: 'bg-green-500',
};

export function SkillsCloud() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section className="py-32 bg-surface">
            <div className="container-custom">
                {/* Section header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        Tech Stack I Work With
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life. Always learning and exploring new ones.
                    </p>
                </div>

                {/* Skills grid */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="relative group"
                            onMouseEnter={() => setHoveredSkill(skill.name)}
                            onMouseLeave={() => setHoveredSkill(null)}
                        >
                            <div
                                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-xl
                  bg-background border border-border
                  hover:border-primary hover:shadow-md hover:-translate-y-1
                  transition-all duration-200 cursor-default
                  ${hoveredSkill === skill.name ? 'border-primary shadow-md -translate-y-1' : ''}
                `}
                            >
                                <span className="text-xl">{skill.icon}</span>
                                <span className="font-medium text-text-primary">{skill.name}</span>
                            </div>

                            {/* Tooltip */}
                            <div
                                className={`
                  absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5
                  bg-text-primary text-text-inverse text-sm rounded-lg
                  whitespace-nowrap shadow-lg
                  transition-all duration-200
                  ${hoveredSkill === skill.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}
                `}
                            >
                                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${levelColors[skill.level]}`} />
                                {skill.level}
                                {/* Arrow */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-text-primary" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                    {Object.entries(levelColors).map(([level, color]) => (
                        <div key={level} className="flex items-center gap-2 text-sm text-text-secondary">
                            <span className={`w-3 h-3 rounded-full ${color}`} />
                            {level}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
