import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
};

export function Card({
    children,
    className = '',
    hover = true,
    padding = 'md',
}: CardProps) {
    return (
        <div
            className={`
        bg-surface border border-border rounded-xl
        transition-all duration-200
        ${hover ? 'hover:border-primary-light hover:shadow-md' : ''}
        ${paddingStyles[padding]}
        ${className}
      `}
        >
            {children}
        </div>
    );
}

interface CardImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function CardImage({ src, alt, className = '' }: CardImageProps) {
    return (
        <div className={`relative overflow-hidden rounded-lg ${className}`}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
        </div>
    );
}

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
    return <div className={className}>{children}</div>;
}

interface CardTitleProps {
    children: ReactNode;
    className?: string;
    as?: 'h2' | 'h3' | 'h4';
}

export function CardTitle({ children, className = '', as: Tag = 'h3' }: CardTitleProps) {
    return (
        <Tag className={`text-lg font-semibold text-text-primary ${className}`}>
            {children}
        </Tag>
    );
}

interface CardDescriptionProps {
    children: ReactNode;
    className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
    return (
        <p className={`text-sm text-text-secondary line-clamp-2 ${className}`}>
            {children}
        </p>
    );
}
