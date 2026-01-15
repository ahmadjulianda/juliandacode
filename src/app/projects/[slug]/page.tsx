import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Github, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

// Project data - synced with /app/projects/page.tsx
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
        description: 'A Fullstack Application build with Node.js, Express, MySQL, Sequelize ORM, React and Bulma',
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
        tags: ['React', 'Node.js', 'MySQL', 'Sequelize', 'Bulma'],
        category: 'Full-Stack',
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/ahmadjulianda/fullstack_nodejs_sequelize_bulma',
        timeline: 'Dec 2025',
        role: 'Full-Stack Developer',
    },
    'tugas-harian': {
        title: 'Task Management App',
        image: '/projects/tugas-harian.jpg',
        description: 'A collaborative task management application with real-time updates, team features, and Kanban board interface.',
        fullDescription: `Tugas Harian is a task management application built with Laravel and PHP. It helps users organize their daily tasks efficiently with a clean and intuitive interface.

The application features task categorization, priority levels, and deadline tracking to ensure productivity and task completion.`,
        challenge: `Creating a user-friendly interface that helps users manage their daily tasks effectively while ensuring the backend can handle task updates and notifications efficiently.`,
        solution: `Built with Laravel framework for robust backend operations and MySQL for reliable data storage. The frontend uses HTML and CSS with responsive design principles for accessibility across devices.`,
        features: [
            'Task creation and management',
            'Priority levels and categorization',
            'Deadline tracking and reminders',
            'User authentication',
            'Responsive design',
            'Clean and intuitive interface',
        ],
        tags: ['HTML', 'CSS', 'PHP', 'Laravel', 'MySQL'],
        category: 'Full-Stack',
        liveUrl: 'localhost:3000',
        githubUrl: 'https://github.com/ahmadjulianda/tugas-harian',
        timeline: 'Nov 2025',
        role: 'Full-Stack Developer',
    },
    'amaral-company-profile': {
        title: 'Company Profile',
        image: '/projects/amaral-company-profile.jpg',
        description: 'A Company Profile with Beautiful UI and user friendly, make it easy to navigate and informative.',
        fullDescription: `Amaral Company Profile is a modern and elegant website designed to showcase a company's services, portfolio, and team. Built with React and styled with Tailwind CSS for a sleek, professional appearance.

The website features smooth animations, responsive layouts, and optimized performance to ensure a great user experience across all devices.`,
        challenge: `Creating a visually stunning company profile that effectively communicates the brand identity while maintaining fast load times and excellent user experience.`,
        solution: `Used React for component-based architecture and Tailwind CSS for rapid, responsive styling. Implemented optimized images and lazy loading for performance.`,
        features: [
            'Beautiful and modern UI design',
            'Responsive layout for all devices',
            'Smooth animations and transitions',
            'Company information sections',
            'Service showcase',
            'Contact form integration',
        ],
        tags: ['React', 'Javascript', 'Tailwind CSS'],
        category: 'Frontend',
        liveUrl: 'https://localhost:3000',
        githubUrl: 'https://github.com/ahmadjulianda/amaral-company-profile',
        timeline: 'Oct 2025',
        role: 'Frontend Developer',
    },
    'website-yayasan': {
        title: 'Company Profile',
        image: '/projects/website-yayasan.jpg',
        description: 'A Company Profile with Beautiful UI and user friendly, make it easy to navigate and informative.',
        fullDescription: `Website Yayasan is a professional website designed for a foundation/organization. Built with React and styled with Tailwind CSS, it provides comprehensive information about the organization's mission, programs, and impact.

The website features an accessible design, clear navigation, and engaging content presentation to connect with visitors and stakeholders effectively.`,
        challenge: `Designing a website that clearly communicates the foundation's mission and values while making it easy for visitors to learn about programs and get involved.`,
        solution: `Implemented a clean, professional design with React and Tailwind CSS. Created intuitive navigation and organized content sections for easy information discovery.`,
        features: [
            'Professional organization showcase',
            'Mission and vision sections',
            'Program information pages',
            'Team member profiles',
            'Responsive design',
            'User-friendly navigation',
        ],
        tags: ['React', 'HTML', 'Tailwind CSS'],
        category: 'Frontend',
        liveUrl: 'https://localhost:3000',
        githubUrl: 'https://github.com/ahmadjulianda/website-yayasan',
        timeline: 'Sep 2025',
        role: 'Frontend Developer',
    },
    'ujknodejspbl1': {
        title: 'Blog REST API',
        image: '/projects/ujknodejspbl1.jpg',
        description: 'A RESTful API for blog management with authentication, authorization, and comprehensive documentation.',
        fullDescription: `A fullstack blog application with a robust RESTful API backend. Built with Node.js and Express for the server, React for the frontend, and Prisma ORM for database operations with MySQL.

The application features user authentication, blog post management, and a clean API structure for seamless frontend integration.`,
        challenge: `Building a complete blog system with secure authentication, efficient database queries, and a well-structured API that can scale.`,
        solution: `Used Prisma ORM for type-safe database operations and clean data modeling. Implemented JWT authentication for secure user sessions and created a React frontend for the user interface.`,
        features: [
            'RESTful API architecture',
            'User authentication and authorization',
            'Blog post CRUD operations',
            'Prisma ORM integration',
            'React frontend interface',
            'MySQL database storage',
        ],
        tags: ['Node.js', 'Express', 'React', 'Prisma ORM', 'MySQL'],
        category: 'Fullstack',
        githubUrl: 'https://github.com/ahmadjulianda/ujknodejspbl1',
        timeline: 'Aug 2025',
        role: 'Full-Stack Developer',
    },
    'website-pribadi': {
        title: 'Personal Portfolio Website',
        image: '/projects/website-pribadi.jpg',
        description: 'A conversion-optimized landing page for a SaaS product with animations and responsive design.',
        fullDescription: `My personal portfolio and blog website built with Next.js, featuring smooth animations powered by Framer Motion and styled with Tailwind CSS.

The website showcases my projects, skills, and experience with a modern, professional design optimized for performance and SEO.`,
        challenge: `Creating a personal brand website that effectively showcases my work and skills while providing an excellent user experience with modern animations.`,
        solution: `Built with Next.js for optimal performance and SEO. Used Framer Motion for engaging animations and Tailwind CSS for responsive, modern styling.`,
        features: [
            'Modern portfolio showcase',
            'Project gallery with details',
            'Blog section for articles',
            'Smooth animations with Framer Motion',
            'Responsive design',
            'SEO optimized',
        ],
        tags: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
        category: 'Frontend',
        liveUrl: 'https://juliandacode.com',
        githubUrl: 'https://github.com/ahmadjulianda/juliandacode',
        timeline: 'Jan 2026',
        role: 'Frontend Developer',
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
