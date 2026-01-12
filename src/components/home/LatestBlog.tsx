import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readingTime: string;
    tags: string[];
    image?: string;
}

// Sample blog posts data
const latestPosts: BlogPost[] = [
    {
        slug: 'understanding-react-server-components',
        title: 'Understanding React Server Components in Next.js 14',
        excerpt: 'A deep dive into React Server Components and how they change the way we build React applications.',
        date: '2026-01-05',
        readingTime: '5 min',
        tags: ['React', 'Next.js', 'Tutorial'],
    },
    {
        slug: 'tips-interview-frontend-developer',
        title: 'Tips Lolos Interview Frontend Developer',
        excerpt: 'Dari pengalaman interview di berbagai perusahaan tech, berikut tips yang bisa membantu kamu lolos.',
        date: '2025-12-28',
        readingTime: '8 min',
        tags: ['Career', 'Interview'],
    },
    {
        slug: 'building-design-system-tailwind',
        title: 'Building a Design System with Tailwind CSS',
        excerpt: 'Learn how to create a consistent and scalable design system using Tailwind CSS custom configuration.',
        date: '2025-12-20',
        readingTime: '6 min',
        tags: ['CSS', 'Design System'],
    },
];

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}

function BlogPostCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="flex gap-4 p-4 rounded-xl border border-border bg-surface hover:border-primary-light hover:shadow-md transition-all duration-200">
                {/* Image placeholder */}
                <div className="hidden sm:block w-24 h-24 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-3xl opacity-50">📝</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-xs text-text-tertiary mb-2">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readingTime} read
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-text-primary group-hover:text-primary transition-colors line-clamp-1 mb-1">
                        {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-text-secondary line-clamp-2 mb-3">
                        {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} size="sm">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </article>
        </Link>
    );
}

export function LatestBlog() {
    return (
        <section className="py-32 bg-surface">
            <div className="container-custom">
                {/* Section header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                            Latest from the Blog
                        </h2>
                        <p className="text-text-secondary">
                            Thoughts on web development, career tips, and more
                        </p>
                    </div>
                    <Button
                        href="/blog"
                        variant="ghost"
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPosition="right"
                    >
                        Read More Articles
                    </Button>
                </div>

                {/* Blog posts */}
                <div className="grid grid-cols-1 gap-4">
                    {latestPosts.map((post) => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
