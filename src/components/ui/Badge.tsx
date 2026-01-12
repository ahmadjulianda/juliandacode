import { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning';
    size?: 'sm' | 'md';
    className?: string;
}

const variantStyles = {
    default: 'bg-primary-50 text-primary dark:bg-primary/20',
    primary: 'bg-primary text-text-inverse',
    secondary: 'bg-surface-elevated text-text-secondary border border-border',
    success: 'bg-success/10 text-success',
    warning: 'bg-warning/10 text-warning',
};

const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
};

export function Badge({
    children,
    variant = 'default',
    size = 'sm',
    className = '',
}: BadgeProps) {
    return (
        <span
            className={`
        inline-flex items-center font-medium rounded-full
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
        >
            {children}
        </span>
    );
}
