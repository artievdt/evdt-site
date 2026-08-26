import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlightedWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  highlightedWord,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}) => {
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`space-y-3 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'} ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow-2xs ${
            isDark
              ? 'bg-red-500/15 text-red-400 border border-red-500/30'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {badgeIcon}
          <span>{badge}</span>
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-display font-extrabold tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}{' '}
        {highlightedWord && (
          <span className="bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
            {highlightedWord}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed font-normal ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
