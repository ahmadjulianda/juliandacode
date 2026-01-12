'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readingTime: string;
    tags: string[];
    featured?: boolean;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
    {
        slug: 'understanding-react-server-components',
        title: 'Understanding React Server Components in Next.js 14',
        excerpt: 'A deep dive into React Server Components and how they change the way we build React applications. Learn the key concepts and best practices.',
        date: '2026-01-05',
        readingTime: '5 min',
        tags: ['React', 'Next.js', 'Tutorial'],
        featured: true,
    },
    {
        slug: 'tips-interview-frontend-developer',
        title: 'Tips Lolos Interview Frontend Developer',
        excerpt: 'Dari pengalaman interview di berbagai perusahaan tech, berikut tips yang bisa membantu kamu lolos interview sebagai frontend developer.',
        date: '2025-12-28',
        readingTime: '8 min',
        tags: ['Career', 'Interview', 'Tips'],
        featured: true,
    },
    {
        slug: 'building-design-system-tailwind',
        title: 'Building a Design System with Tailwind CSS',
        excerpt: 'Learn how to create a consistent and scalable design system using Tailwind CSS custom configuration and best practices.',
        date: '2025-12-20',
        readingTime: '6 min',
        tags: ['CSS', 'Tailwind', 'Design System'],
    },
    {
        slug: 'typescript-tips-tricks',
        title: 'TypeScript Tips & Tricks for React Developers',
        excerpt: 'Level up your TypeScript skills with these practical tips and tricks specifically for React development.',
        date: '2025-12-15',
        readingTime: '7 min',
        tags: ['TypeScript', 'React', 'Tips'],
    },
    {
        slug: 'optimizing-nextjs-performance',
        title: 'Optimizing Next.js Performance: A Complete Guide',
        excerpt: 'Everything you need to know about making your Next.js application blazing fast. From images to bundle size.',
        date: '2025-12-10',
        readingTime: '10 min',
        tags: ['Next.js', 'Performance', 'Tutorial'],
    },
    {
        slug: 'git-workflow-for-teams',
        title: 'Git Workflow Best Practices for Development Teams',
        excerpt: 'A comprehensive guide to establishing an effective Git workflow that scales with your team.',
        date: '2025-12-05',
        readingTime: '6 min',
        tags: ['Git', 'Workflow', 'Teams'],
    },
];

const allTags = [...new Set(blogPosts.flatMap((p) => p.tags))];

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}

function FeaturedPost({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="relative rounded-2xl overflow-hidden bg-surface border border-border hover:border-primary-light hover:shadow-lg transition-all duration-300">
                {/* Image */}
                <div className="aspect-[2/1] bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                    <span className="text-6xl opacity-50">📝</span>
                </div>

                <div className="absolute top-4 left-4">
                    <Badge variant="primary" size="sm">Featured</Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-text-tertiary mb-3">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readingTime} read
                        </span>
                    </div>

                    <h2 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors mb-2">
                        {post.title}
                    </h2>

                    <p className="text-text-secondary line-clamp-2 mb-4">
                        {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <Badge key={tag} size="sm">{tag}</Badge>
                        ))}
                    </div>
                </div>
            </article>
        </Link>
    );
}

function BlogPostCard({ post }: { post: BlogPost }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block">
            <article className="flex gap-4 p-4 rounded-xl border border-border bg-surface hover:border-primary-light hover:shadow-md transition-all duration-200">
                {/* Image placeholder */}
                <div className="hidden sm:block w-32 h-24 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
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
                        {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} size="sm">{tag}</Badge>
                        ))}
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const featuredPosts = blogPosts.filter((p) => p.featured);
    const regularPosts = blogPosts.filter((p) => !p.featured);

    const filteredPosts = useMemo(() => {
        return regularPosts.filter((post) => {
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesTag = !selectedTag || post.tags.includes(selectedTag);

            return matchesSearch && matchesTag;
        });
    }, [regularPosts, searchQuery, selectedTag]);

    return (
        <div className="pt-24 pb-20">
            <div className="container-custom">
                {/* Page header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Blog
                    </h1>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        Sharing thoughts on web development, career tips, tutorials, and more.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="mb-10 space-y-4">
                    {/* Search */}
                    <div className="relative max-w-md mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input pl-12"
                        />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`
                flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                ${!selectedTag
                                    ? 'bg-primary text-text-inverse'
                                    : 'bg-surface border border-border text-text-secondary hover:border-primary hover:text-primary'
                                }
              `}
                        >
                            <Tag className="w-3 h-3" />
                            All
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                  ${selectedTag === tag
                                        ? 'bg-primary text-text-inverse'
                                        : 'bg-surface border border-border text-text-secondary hover:border-primary hover:text-primary'
                                    }
                `}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured posts */}
                {!searchQuery && !selectedTag && featuredPosts.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl font-semibold text-text-primary mb-6">Featured Posts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featuredPosts.map((post) => (
                                <FeaturedPost key={post.slug} post={post} />
                            ))}
                        </div>
                    </div>
                )}

                {/* All posts */}
                <div>
                    {!searchQuery && !selectedTag && (
                        <h2 className="text-xl font-semibold text-text-primary mb-6">All Posts</h2>
                    )}

                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4">
                            {filteredPosts.map((post) => (
                                <BlogPostCard key={post.slug} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-text-secondary">No articles found matching your search.</p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
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
        </div>
    );
}
