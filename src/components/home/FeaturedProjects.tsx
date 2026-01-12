import Link from 'next/link';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
}

// Sample featured projects data
const featuredProjects: Project[] = [
    {
        id: 'ecommerce-platform',
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce platform with real-time inventory, payment integration, and admin dashboard.',
        image: '/projects/ecommerce.jpg',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/ecommerce',
    },
    {
        id: 'task-management',
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates and team features.',
        image: '/projects/taskapp.jpg',
        tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/taskapp',
    },
    {
        id: 'portfolio-cms',
        title: 'Portfolio CMS',
        description: 'A headless CMS for managing portfolio content with a beautiful admin interface.',
        image: '/projects/cms.jpg',
        tags: ['Vue.js', 'Laravel', 'MySQL'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/cms',
    },
];

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary-light hover:shadow-lg transition-all duration-300">
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
                    {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} size="sm">
                            {tag}
                        </Badge>
                    ))}
                    {project.tags.length > 3 && (
                        <Badge size="sm" variant="secondary">
                            +{project.tags.length - 3}
                        </Badge>
                    )}
                </div>
            </div>
        </div>
    );
}

export function FeaturedProjects() {
    return (
        <section className="py-32 bg-background">
            <div className="container-custom">
                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                            Selected Works
                        </h2>
                        <p className="text-text-secondary">
                            Some of the projects I&apos;m most proud of
                        </p>
                    </div>
                    <Button
                        href="/projects"
                        variant="ghost"
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPosition="right"
                    >
                        View All Projects
                    </Button>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
