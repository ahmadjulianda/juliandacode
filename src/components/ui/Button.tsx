import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: ReactNode;
    className?: string;
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
}

type ButtonAsButton = ButtonBaseProps &
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
        href?: never;
    };

type ButtonAsLink = ButtonBaseProps &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
        href: string;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
    primary:
        'bg-primary hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 [&]:text-white',
    secondary:
        'bg-surface text-text-primary border border-border hover:border-primary hover:text-primary',
    ghost:
        'bg-transparent text-text-primary hover:bg-surface hover:text-primary',
    outline:
        'bg-transparent text-primary border border-primary hover:bg-primary hover:text-text-inverse',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
};

export function Button({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    icon,
    iconPosition = 'left',
    ...props
}: ButtonProps) {
    const baseStyles =
        'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed';

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    const content = (
        <>
            {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
        </>
    );

    if ('href' in props && props.href) {
        const { href, ...linkProps } = props as ButtonAsLink;
        return (
            <Link href={href} className={combinedClassName} {...linkProps}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...(props as ButtonAsButton)}>
            {content}
        </button>
    );
}
