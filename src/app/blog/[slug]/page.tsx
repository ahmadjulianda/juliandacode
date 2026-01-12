import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

// Sample blog posts data
const blogPostsData: Record<string, {
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readingTime: string;
    tags: string[];
    author: {
        name: string;
        bio: string;
        avatar: string;
    };
}> = {
    'understanding-react-server-components': {
        title: 'Understanding React Server Components in Next.js 14',
        excerpt: 'A deep dive into React Server Components and how they change the way we build React applications.',
        content: `
## Introduction

React Server Components (RSC) represent a fundamental shift in how we think about building React applications. They allow us to render components on the server, reducing the JavaScript bundle size and improving initial page load performance.

## What are React Server Components?

Server Components are a new type of component that runs exclusively on the server. Unlike traditional React components, they:

- Don't add to the client JavaScript bundle
- Can directly access server resources (databases, file systems, etc.)
- Cannot use client-side features like useState or event handlers

\`\`\`tsx
// This is a Server Component by default in Next.js 14
async function UserProfile({ userId }: { userId: string }) {
  // Direct database access - no API needed!
  const user = await db.user.findUnique({ where: { id: userId } });
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
}
\`\`\`

## When to Use Client Components

You should use Client Components (with the \`'use client'\` directive) when you need:

- **Interactivity**: useState, useEffect, event handlers
- **Browser APIs**: localStorage, window, etc.
- **Custom hooks** that depend on state or effects

\`\`\`tsx
'use client';

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

## Best Practices

1. **Keep Client Components at the leaves** - Move interactive parts to smaller components
2. **Pass Server Components as children** - This keeps them on the server
3. **Use async/await freely** - Server Components support async functions

## Conclusion

React Server Components are a powerful addition to the React ecosystem. By understanding when to use them, you can build faster, more efficient applications.
    `,
        date: '2026-01-05',
        readingTime: '5 min',
        tags: ['React', 'Next.js', 'Tutorial'],
        author: {
            name: 'Your Name',
            bio: 'Full-Stack Web Developer passionate about React and modern web technologies.',
            avatar: '/avatar.jpg',
        },
    },
    'tips-interview-frontend-developer': {
        title: 'Tips Lolos Interview Frontend Developer',
        excerpt: 'Dari pengalaman interview di berbagai perusahaan tech, berikut tips yang bisa membantu kamu lolos.',
        content: `
## Pengantar

Setelah melalui puluhan interview di berbagai perusahaan, saya ingin berbagi tips yang semoga bisa membantu teman-teman yang sedang mencari pekerjaan sebagai Frontend Developer.

## 1. Kuasai Fundamental

Sebelum fokus ke framework, pastikan kamu paham betul:

- **HTML Semantik** - Accessibility dan SEO sangat penting
- **CSS Layout** - Flexbox dan Grid adalah must-know
- **JavaScript ES6+** - Destructuring, spread operator, async/await

## 2. Portfolio yang Berbicara

Recruiter tidak punya banyak waktu. Buat portfolio yang:

- Langsung menunjukkan skill terbaikmu
- Memiliki proyek yang bisa di-demo langsung
- Menampilkan kode yang bersih di GitHub

## 3. Persiapkan Technical Interview

\`\`\`javascript
// Contoh soal yang sering muncul
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
\`\`\`

## 4. Soft Skills Juga Penting

- Komunikasikan proses berpikir saat problem solving
- Tunjukkan kemampuan bekerja dalam tim
- Jadilah curious dan mau belajar

## Penutup

Interview adalah skill yang bisa dilatih. Semakin sering kamu berlatih, semakin percaya diri kamu akan menjadi. Good luck!
    `,
        date: '2025-12-28',
        readingTime: '8 min',
        tags: ['Career', 'Interview', 'Tips'],
        author: {
            name: 'Your Name',
            bio: 'Full-Stack Web Developer passionate about React and modern web technologies.',
            avatar: '/avatar.jpg',
        },
    },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPostsData[slug];

    if (!post) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

// Simple markdown-like content rendering
function renderContent(content: string) {
    const lines = content.trim().split('\n');
    const elements: React.ReactNode[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let codeLanguage = '';

    lines.forEach((line, index) => {
        // Code block
        if (line.startsWith('```')) {
            if (inCodeBlock) {
                elements.push(
                    <pre key={index} className="bg-[#1E293B] text-[#E2E8F0] p-4 rounded-lg overflow-x-auto my-4">
                        <code className="font-mono text-sm">{codeContent.trim()}</code>
                    </pre>
                );
                codeContent = '';
                inCodeBlock = false;
            } else {
                inCodeBlock = true;
                codeLanguage = line.slice(3);
            }
            return;
        }

        if (inCodeBlock) {
            codeContent += line + '\n';
            return;
        }

        // Headers
        if (line.startsWith('## ')) {
            elements.push(
                <h2 key={index} className="text-2xl font-bold text-text-primary mt-8 mb-4">
                    {line.slice(3)}
                </h2>
            );
            return;
        }

        // List items
        if (line.startsWith('- ')) {
            elements.push(
                <li key={index} className="text-text-secondary ml-4 mb-2">
                    {line.slice(2)}
                </li>
            );
            return;
        }

        if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ')) {
            elements.push(
                <li key={index} className="text-text-secondary ml-4 mb-2 list-decimal">
                    {line.slice(3)}
                </li>
            );
            return;
        }

        // Paragraphs
        if (line.trim()) {
            // Handle inline code
            const parts = line.split(/(`[^`]+`)/g);
            const renderedParts = parts.map((part, i) => {
                if (part.startsWith('`') && part.endsWith('`')) {
                    return (
                        <code key={i} className="bg-surface-elevated px-1.5 py-0.5 rounded text-sm font-mono">
                            {part.slice(1, -1)}
                        </code>
                    );
                }
                // Handle bold text
                return part.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
            });

            elements.push(
                <p key={index} className="text-text-secondary mb-4 leading-relaxed">
                    {renderedParts}
                </p>
            );
        }
    });

    return elements;
}

function TableOfContents({ content }: { content: string }) {
    const headings = content
        .split('\n')
        .filter((line) => line.startsWith('## '))
        .map((line) => line.slice(3));

    return (
        <div className="bg-surface border border-border rounded-xl p-6">
            <h3 className="font-semibold text-text-primary mb-4">Table of Contents</h3>
            <ul className="space-y-2">
                {headings.map((heading, index) => (
                    <li key={index}>
                        <a
                            href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm text-text-secondary hover:text-primary transition-colors"
                        >
                            {heading}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ShareButtons() {
    return (
        <div className="bg-surface border border-border rounded-xl p-6">
            <h3 className="font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
            </h3>
            <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-surface-elevated border border-border hover:border-primary hover:text-primary transition-all">
                    <Twitter className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg bg-surface-elevated border border-border hover:border-primary hover:text-primary transition-all">
                    <Linkedin className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-lg bg-surface-elevated border border-border hover:border-primary hover:text-primary transition-all">
                    <LinkIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPostsData[slug];

    if (!post) {
        return (
            <div className="pt-24 pb-20">
                <div className="container-custom text-center">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Article Not Found</h1>
                    <Button href="/blog" variant="secondary">
                        Back to Blog
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20">
            <div className="container-custom">
                {/* Back button */}
                <Button
                    href="/blog"
                    variant="ghost"
                    size="sm"
                    icon={<ArrowLeft className="w-4 h-4" />}
                    className="mb-8"
                >
                    Back to Blog
                </Button>

                {/* Article header */}
                <header className="max-w-3xl mb-10">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-text-tertiary">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readingTime} read
                        </span>
                        <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author.name}
                        </span>
                    </div>
                </header>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
                    {/* Article content */}
                    <article className="prose max-w-none">
                        {renderContent(post.content)}
                    </article>

                    {/* Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 space-y-6">
                            <TableOfContents content={post.content} />
                            <ShareButtons />
                        </div>
                    </aside>
                </div>

                {/* Author box */}
                <div className="max-w-3xl mt-12 pt-8 border-t border-border">
                    <div className="flex items-start gap-4 p-6 bg-surface border border-border rounded-xl">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                            YN
                        </div>
                        <div>
                            <div className="text-sm text-text-tertiary mb-1">Written by</div>
                            <h3 className="text-lg font-semibold text-text-primary">{post.author.name}</h3>
                            <p className="text-text-secondary text-sm mt-1">{post.author.bio}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
