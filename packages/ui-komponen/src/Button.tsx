import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  icon,
  className = '',
  ...props
}) => {
  // Campur sudut: rounded-sm (tegas, sudut sedikit sekali bulat, anti-template bulat berlebihan)
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-150 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-sm border select-none';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 tracking-wide',
    md: 'text-sm px-4 py-2 gap-2 tracking-normal',
    lg: 'text-base px-5 py-2.5 gap-2.5 font-semibold'
  }[size];

  // Menggunakan palet spesifik:
  // #0F3460 (Biru Tua)
  // #2E7D32 (Hijau Lembut)
  // #2A2A2A (Abu-abu Tua)
  const variantClasses = {
    primary:
      'bg-[#0F3460] text-white border-[#0F3460] hover:bg-[#0B2545] dark:bg-[#165DFF] dark:border-[#165DFF] dark:hover:bg-[#0E4FD1] shadow-sm',
    accent:
      'bg-[#2E7D32] text-white border-[#2E7D32] hover:bg-[#256629] dark:bg-[#2E7D32] dark:border-[#388E3C] dark:hover:bg-[#388E3C] shadow-sm',
    secondary:
      'bg-[#2A2A2A] text-white border-[#2A2A2A] hover:bg-[#1F1F1F] dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700',
    outline:
      'bg-transparent text-[#2A2A2A] border-[#2A2A2A]/25 hover:border-[#0F3460] hover:text-[#0F3460] hover:bg-neutral-100 dark:text-neutral-200 dark:border-neutral-700 dark:hover:border-neutral-500 dark:hover:bg-neutral-800',
    ghost:
      'bg-transparent border-transparent text-[#2A2A2A] hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
  }[variant];

  const fullClassName = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} target={target} rel={rel} className={fullClassName}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={fullClassName} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

