import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

// Sample project data - in a real app, this would come from a CMS or MDX files
const projectsData: Record<string, {
    title: string;
    description: string;
    fullDescription: string;
    challenge: string;
    solution: string;
    features: string[];
    tags: string[];
    category: string;
    liveUrl?: string;

    githubUrl?: string;
    image?: string;
    timeline: string;
    role: string;
}> = {
    'crud-application': {
        title: 'CRUD Application',
        image: '/projects/crud-app-bulma.jpg',
        description: 'A Fullstack Application built with Node.js, Express, MySQL, Sequelize ORM, React and Bulma for modern CRUD operations.',
        fullDescription: `This CRUD Application is a fullstack project that demonstrates the fundamentals of creating, reading, updating, and deleting data. Built with a robust backend using Node.js and Express, combined with Sequelize ORM for seamless MySQL database interactions.

The frontend is powered by React, providing a dynamic and responsive user interface, while Bulma CSS framework ensures a clean and modern design. The application includes Axios for HTTP requests and CORS for secure cross-origin resource sharing.`,
        challenge: `The main challenge was designing a clean architecture that separates concerns between the frontend and backend while maintaining efficient data flow. Ensuring proper error handling and validation across the stack was also crucial.`,
        solution: `I implemented a RESTful API architecture using Express with Sequelize ORM for clean database operations. The React frontend uses Axios for API calls with proper error handling. Bulma provides responsive styling without heavy configuration.`,
        features: [
            'Create, Read, Update, Delete operations',
            'RESTful API with Express',
            'MySQL database with Sequelize ORM',
            'React frontend with dynamic UI',
            'Responsive design with Bulma CSS',
            'CORS enabled for secure requests',
            'Axios for HTTP client',
            'Clean and organized code structure',
        ],
        tags: ['React', 'Node.js', 'MySQL', 'Sequelize', 'Bulma', 'Express'],
        category: 'Full-Stack',
        githubUrl: 'https://github.com/ahmadjulianda/fullstack_nodejs_sequelize_bulma',
        timeline: 'Dec 2025',
        role: 'Full-Stack Developer',
    },

    'ecommerce-platform': {
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce platform with real-time inventory management and payment integration.',
        fullDescription: `This e-commerce platform was built to provide a seamless shopping experience for both customers and administrators. The platform features a modern, responsive design that works beautifully on all devices. It includes real-time inventory tracking, secure payment processing via Stripe, and a comprehensive admin dashboard for managing products, orders, and customers.`,
        challenge: `The main challenge was implementing real-time inventory management that could handle high traffic during flash sales without overselling products. Additionally, ensuring PCI compliance while maintaining a smooth checkout experience required careful architecture decisions.`,
        solution: `I implemented an optimistic UI pattern with server-side validation and used Redis for caching inventory counts. For payments, I integrated Stripe with webhooks to handle asynchronous payment confirmations. The admin dashboard was built with React Query for efficient data fetching and caching.`,
        features: [
            'Real-time inventory tracking',
            'Secure payment processing with Stripe',
            'Admin dashboard with analytics',
            'Order management system',
            'Customer account management',
            'Responsive design for all devices',
            'Email notifications',
            'Product search and filtering',
        ],
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
        category: 'Full-Stack',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/ecommerce',
        timeline: 'Oct 2025 - Dec 2025',
        role: 'Full-Stack Developer',
    },
    'task-management': {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates and team features.',
        fullDescription: `A powerful task management application designed for teams to collaborate effectively. Features include Kanban boards, real-time updates, and comprehensive project management tools.`,
        challenge: `Building a real-time collaboration system that could handle multiple users editing the same board simultaneously without conflicts was the primary challenge.`,
        solution: `Implemented operational transformation for conflict resolution and used Socket.io for real-time updates. The frontend uses optimistic updates with rollback capabilities for a smooth user experience.`,
        features: [
            'Kanban board interface',
            'Real-time collaboration',
            'Team management',
            'Task assignments and due dates',
            'File attachments',
            'Activity timeline',
        ],
        tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io', 'TypeScript'],
        category: 'Full-Stack',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/yourusername/taskapp',
        timeline: 'Aug 2025 - Oct 2025',
        role: 'Full-Stack Developer',
    },
};

const projectIds = Object.keys(projectsData);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projectsData[slug];

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: project.title,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projectsData[slug];

    if (!project) {
        return (
            <div className="pt-24 pb-20">
                <div className="container-custom text-center">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Project Not Found</h1>
                    <Button href="/projects" variant="secondary">
                        Back to Projects
                    </Button>
                </div>
            </div>
        );
    }

    const currentIndex = projectIds.indexOf(slug);
    const prevProject = currentIndex > 0 ? projectIds[currentIndex - 1] : null;
    const nextProject = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : null;

    return (
        <div className="pt-24 pb-20">
            <div className="container-custom">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
                    <span>/</span>
                    <span className="text-text-primary">{project.title}</span>
                </nav>

                {/* Back button */}
                <Button
                    href="/projects"
                    variant="ghost"
                    size="sm"
                    icon={<ArrowLeft className="w-4 h-4" />}
                    className="mb-6"
                >
                    Back to Projects
                </Button>

                <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-elevated mb-10">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                            <span className="text-8xl opacity-50">🚀</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <Badge size="md" className="mb-4">{project.category}</Badge>
                            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                                {project.title}
                            </h1>
                            <p className="text-lg text-text-secondary">
                                {project.description}
                            </p>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-3">
                            {project.liveUrl && (
                                <Button
                                    href={project.liveUrl}
                                    target="_blank"
                                    variant="primary"
                                    icon={<ExternalLink className="w-4 h-4" />}
                                >
                                    Live Demo
                                </Button>
                            )}
                            {project.githubUrl && (
                                <Button
                                    href={project.githubUrl}
                                    target="_blank"
                                    variant="secondary"
                                    icon={<Github className="w-4 h-4" />}
                                >
                                    View Code
                                </Button>
                            )}
                        </div>

                        {/* Overview */}
                        <section>
                            <h2 className="text-xl font-semibold text-text-primary mb-4">Overview</h2>
                            <div className="prose">
                                {project.fullDescription.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="text-text-secondary mb-4">{paragraph}</p>
                                ))}
                            </div>
                        </section>

                        {/* Challenge */}
                        <section>
                            <h2 className="text-xl font-semibold text-text-primary mb-4">🎯 The Challenge</h2>
                            <p className="text-text-secondary">{project.challenge}</p>
                        </section>

                        {/* Solution */}
                        <section>
                            <h2 className="text-xl font-semibold text-text-primary mb-4">💡 The Solution</h2>
                            <p className="text-text-secondary">{project.solution}</p>
                        </section>

                        {/* Features */}
                        <section>
                            <h2 className="text-xl font-semibold text-text-primary mb-4">✨ Key Features</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-text-secondary">
                                        <span className="text-primary mt-1">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Project info card */}
                            <div className="bg-surface border border-border rounded-xl p-6 space-y-4">
                                <h3 className="font-semibold text-text-primary">Project Info</h3>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Calendar className="w-4 h-4 text-text-tertiary" />
                                        <div>
                                            <div className="text-text-tertiary">Timeline</div>
                                            <div className="text-text-primary">{project.timeline}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-sm">
                                        <User className="w-4 h-4 text-text-tertiary" />
                                        <div>
                                            <div className="text-text-tertiary">Role</div>
                                            <div className="text-text-primary">{project.role}</div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-border" />

                                <div>
                                    <div className="text-sm text-text-tertiary mb-2">Tech Stack</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} size="sm">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-16 pt-8 border-t border-border">
                    {prevProject ? (
                        <Link
                            href={`/projects/${prevProject}`}
                            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            <span>Previous Project</span>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextProject && (
                        <Link
                            href={`/projects/${nextProject}`}
                            className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                        >
                            <span>Next Project</span>
                            <ChevronRight className="w-5 h-5" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
