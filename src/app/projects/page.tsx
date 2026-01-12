'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

// Sample projects data
const projects: Project[] = [
    {
        id: 'crud-application',
        title: 'CRUD Application',
        description: 'A Fullstack Application build with Node.js, Express, MySQL, Sequelize ORM, React and Bulma',
        image: '/projects/crud-app-bulma.jpg',
        tags: ['React', 'Node.js', 'MySQL', 'Sequelize', 'Bulma'],
        category: 'Full-Stack',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/ahmadjulianda/fullstack_nodejs_sequelize_bulma',
        featured: true,
    },
    {
        id: 'task-management',
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, team features, and Kanban board interface.',
        image: '/projects/taskapp.jpg',
        tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io', 'TypeScript'],
        category: 'Full-Stack',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/taskapp',
        featured: true,
    },
    {
        id: 'portfolio-cms',
        title: 'Portfolio CMS',
        description: 'A headless CMS for managing portfolio content with a beautiful admin interface and API-first approach.',
        image: '/projects/cms.jpg',
        tags: ['Vue.js', 'Laravel', 'MySQL', 'REST API'],
        category: 'Full-Stack',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/cms',
    },
    {
        id: 'weather-dashboard',
        title: 'Weather Dashboard',
        description: 'A beautiful weather dashboard with location-based forecasts, animated weather icons, and multi-city support.',
        image: '/projects/weather.jpg',
        tags: ['React', 'TypeScript', 'Weather API', 'Tailwind CSS'],
        category: 'Frontend',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/weather',
    },
    {
        id: 'blog-api',
        title: 'Blog REST API',
        description: 'A RESTful API for blog management with authentication, authorization, and comprehensive documentation.',
        image: '/projects/api.jpg',
        tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
        category: 'Backend',
        githubUrl: 'https://github.com/yourusername/blog-api',
    },
    {
        id: 'landing-page',
        title: 'SaaS Landing Page',
        description: 'A conversion-optimized landing page for a SaaS product with animations and responsive design.',
        image: '/projects/landing.jpg',
        tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
        category: 'Frontend',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/saas-landing',
    },
];

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend'];
const allTags = [...new Set(projects.flatMap((p) => p.tags))];

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary-light hover:shadow-lg transition-all duration-300">
            {/* Featured badge */}
            {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                    <Badge variant="primary" size="sm">Featured</Badge>
                </div>
            )}

            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-surface-elevated">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-6xl opacity-50">🚀</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-text-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full text-text-primary hover:scale-110 transition-transform"
                            aria-label="View live demo"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white rounded-full text-text-primary hover:scale-110 transition-transform"
                            aria-label="View source code"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                    <Badge size="sm" variant="secondary">{project.category}</Badge>
                </div>

                <Link href={`/projects/${project.id}`}>
                    <h3 className="text-lg font-semibold text-text-primary hover:text-primary transition-colors mb-2">
                        {project.title}
                    </h3>
                </Link>

                <p className="text-sm text-text-secondary line-clamp-2 mb-4">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} size="sm">
                            {tag}
                        </Badge>
                    ))}
                    {project.tags.length > 4 && (
                        <Badge size="sm" variant="secondary">
                            +{project.tags.length - 4}
                        </Badge>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredProjects = projects.filter((project) => {
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        const matchesTag = !selectedTag || project.tags.includes(selectedTag);
        return matchesCategory && matchesTag;
    });

    return (
        <div className="pt-24 pb-20">
            <div className="container-custom">
                {/* Page header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        My Projects
                    </h1>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        A collection of work I&apos;m proud of. Each project represents a unique challenge and learning experience.
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-10">
                    {/* Category filter */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${selectedCategory === category
                                        ? 'bg-primary text-text-inverse'
                                        : 'bg-surface border border-border text-text-secondary hover:border-primary hover:text-primary'
                                    }
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Tag filter */}
                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`
                flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200
                ${!selectedTag
                                    ? 'bg-primary-50 text-primary dark:bg-primary/20'
                                    : 'bg-surface-elevated text-text-tertiary hover:text-text-secondary'
                                }
              `}
                        >
                            <Filter className="w-3 h-3" />
                            All Tech
                        </button>
                        {allTags.slice(0, 8).map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                                className={`
                  px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200
                  ${selectedTag === tag
                                        ? 'bg-primary-50 text-primary dark:bg-primary/20'
                                        : 'bg-surface-elevated text-text-tertiary hover:text-text-secondary'
                                    }
                `}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-text-secondary">No projects found matching your filters.</p>
                        <button
                            onClick={() => {
                                setSelectedCategory('All');
                                setSelectedTag(null);
                            }}
                            className="mt-4 text-primary hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
