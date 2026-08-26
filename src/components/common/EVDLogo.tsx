import React from 'react';

interface EVDLogoProps {
  variant?: 'full' | 'icon' | 'wordmark';
  theme?: 'light' | 'dark' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const EVDLogo: React.FC<EVDLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md'
}) => {
  // Height configurations
  const heightMap = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-11 sm:h-12',
    xl: 'h-14 sm:h-16'
  };

  const currentHeight = heightMap[size];

  // Gear Icon Component for the two 'o's in Technology
  const GearIcon = ({ className: gearClass = "w-4 h-4" }: { className?: string }) => (
    <svg
      viewBox="0 0 100 100"
      className={`${gearClass} inline-block mx-[1px] align-middle`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M50 35C41.7 35 35 41.7 35 50C35 58.3 41.7 65 50 65C58.3 65 65 58.3 65 50C65 41.7 58.3 35 50 35ZM50 57C46.1 57 43 53.9 43 50C43 46.1 46.1 43 50 43C53.9 43 57 46.1 57 50C57 53.9 53.9 57 50 57Z"
      />
      <path
        d="M93.5 42.5L84.2 41C83.5 38.3 82.4 35.8 81 33.4L86.8 25.8C87.8 24.5 87.6 22.6 86.3 21.6L78.4 13.7C77.4 12.4 75.5 12.2 74.2 13.2L66.6 19C64.2 17.6 61.7 16.5 59 15.8L57.5 6.5C57.2 4.9 55.7 3.7 54.1 3.7H45.9C44.3 3.7 42.8 4.9 42.5 6.5L41 15.8C38.3 16.5 35.8 17.6 33.4 19L25.8 13.2C24.5 12.2 22.6 12.4 21.6 13.7L13.7 21.6C12.4 22.6 12.2 24.5 13.2 25.8L19 33.4C17.6 35.8 16.5 38.3 15.8 41L6.5 42.5C4.9 42.8 3.7 44.3 3.7 45.9V54.1C3.7 55.7 4.9 57.2 6.5 57.5L15.8 59C16.5 61.7 17.6 64.2 19 66.6L13.2 74.2C12.2 75.5 12.4 77.4 13.7 78.4L21.6 86.3C22.6 87.6 24.5 87.8 25.8 86.8L33.4 81C35.8 82.4 38.3 83.5 41 84.2L42.5 93.5C42.8 95.1 44.3 96.3 45.9 96.3H54.1C55.7 96.3 57.2 95.1 57.5 93.5L59 84.2C61.7 83.5 64.2 82.4 66.6 81L74.2 86.8C75.5 87.8 77.4 87.6 78.4 86.3L86.3 78.4C87.6 77.4 87.8 75.5 86.8 74.2L81 66.6C82.4 64.2 83.5 61.7 84.2 59L93.5 57.5C95.1 57.2 96.3 55.7 96.3 54.1V45.9C96.3 44.3 95.1 42.8 93.5 42.5ZM50 72C37.9 72 28 62.1 28 50C28 37.9 37.9 28 50 28C62.1 28 72 37.9 72 50C72 62.1 62.1 72 50 72Z"
      />
    </svg>
  );

  // Emblem Component (The Diamond/Rhombus Bracket with Red Signal Waves)
  const Emblem = ({ emblemSize = "w-9 h-9" }: { emblemSize?: string }) => (
    <div className={`relative ${emblemSize} shrink-0 flex items-center justify-center`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Dark Navy Angled Diamond Outer Border */}
        <path
          d="M18 50 L48 16 C50 14 54 14 56 16 L84 48 C86 50 86 54 84 56 L56 84 C54 86 50 86 48 84 L18 54 C16 52 16 48 18 50 Z"
          fill="none"
          stroke={theme === 'dark' ? '#38BDF8' : '#0B132B'}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dynamic Red Inner Chevron Wave 1 */}
        <path
          d="M32 50 Q48 34 64 50"
          stroke="#E11D2A"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Dynamic Red Inner Chevron Wave 2 */}
        <path
          d="M26 50 Q48 24 70 50"
          stroke="#E11D2A"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Central Core Signal Dot / Accent */}
        <circle cx="50" cy="50" r="4" fill="#E11D2A" />
      </svg>
    </div>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Emblem emblemSize={size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9'} />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 sm:gap-2.5 select-none ${currentHeight} ${className}`}
    >
      {/* SVG Vector Logo matching exactly the uploaded asset */}
      <svg
        viewBox="0 0 460 85"
        className="h-full w-auto max-w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 1. Left Emblem: Navy Rhombus Chevron with Red Signal Waves */}
        <g id="logo-emblem" transform="translate(4, 2)">
          {/* Outer Chevron Rhombus Border */}
          <path
            d="M8 40 L38 8 C40 6 44 6 46 8 L74 38 C76 40 76 44 74 46 L46 74 C44 76 40 76 38 74 L8 44 C6 42 6 38 8 40 Z"
            fill="none"
            stroke={theme === 'dark' ? '#94A3B8' : '#0B132B'}
            strokeWidth="6.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Glowing Red Inner Signal Arcs */}
          <path
            d="M20 41 Q40 24 60 41"
            stroke="#E11D2A"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          <path
            d="M26 42 Q40 29 54 42"
            stroke="#E11D2A"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M32 43 Q40 35 48 43"
            stroke="#E11D2A"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>

        {/* 2. Bold Red "EVD" */}
        <g id="logo-evd" transform="translate(86, 0)">
          <text
            x="0"
            y="58"
            fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
            fontWeight="900"
            fontSize="54"
            letterSpacing="-0.5px"
            fill="#E11D2A"
          >
            EVD
          </text>
        </g>

        {/* 3. Deep Navy "Technology" with Cog Gears in 'o's */}
        <g id="logo-technology" transform="translate(205, 0)">
          {/* "Techn" */}
          <text
            x="0"
            y="57"
            fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
            fontWeight="800"
            fontSize="46"
            letterSpacing="-0.8px"
            fill={theme === 'dark' ? '#FFFFFF' : '#0B132B'}
          >
            Techn
          </text>

          {/* First Gear 'o' */}
          <g transform="translate(132, 27) scale(0.33)" fill={theme === 'dark' ? '#E2E8F0' : '#0B132B'}>
            <path
              d="M50 35C41.7 35 35 41.7 35 50C35 58.3 41.7 65 50 65C58.3 65 65 58.3 65 50C65 41.7 58.3 35 50 35ZM50 57C46.1 57 43 53.9 43 50C43 46.1 46.1 43 50 43C53.9 43 57 46.1 57 50C57 53.9 53.9 57 50 57Z"
            />
            <path
              d="M93.5 42.5L84.2 41C83.5 38.3 82.4 35.8 81 33.4L86.8 25.8C87.8 24.5 87.6 22.6 86.3 21.6L78.4 13.7C77.4 12.4 75.5 12.2 74.2 13.2L66.6 19C64.2 17.6 61.7 16.5 59 15.8L57.5 6.5C57.2 4.9 55.7 3.7 54.1 3.7H45.9C44.3 3.7 42.8 4.9 42.5 6.5L41 15.8C38.3 16.5 35.8 17.6 33.4 19L25.8 13.2C24.5 12.2 22.6 12.4 21.6 13.7L13.7 21.6C12.4 22.6 12.2 24.5 13.2 25.8L19 33.4C17.6 35.8 16.5 38.3 15.8 41L6.5 42.5C4.9 42.8 3.7 44.3 3.7 45.9V54.1C3.7 55.7 4.9 57.2 6.5 57.5L15.8 59C16.5 61.7 17.6 64.2 19 66.6L13.2 74.2C12.2 75.5 12.4 77.4 13.7 78.4L21.6 86.3C22.6 87.6 24.5 87.8 25.8 86.8L33.4 81C35.8 82.4 38.3 83.5 41 84.2L42.5 93.5C42.8 95.1 44.3 96.3 45.9 96.3H54.1C55.7 96.3 57.2 95.1 57.5 93.5L59 84.2C61.7 83.5 64.2 82.4 66.6 81L74.2 86.8C75.5 87.8 77.4 87.6 78.4 86.3L86.3 78.4C87.6 77.4 87.8 75.5 86.8 74.2L81 66.6C82.4 64.2 83.5 61.7 84.2 59L93.5 57.5C95.1 57.2 96.3 55.7 96.3 54.1V45.9C96.3 44.3 95.1 42.8 93.5 42.5ZM50 72C37.9 72 28 62.1 28 50C28 37.9 37.9 28 50 28C62.1 28 72 37.9 72 50C72 62.1 62.1 72 50 72Z"
            />
          </g>

          {/* "l" */}
          <text
            x="170"
            y="57"
            fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
            fontWeight="800"
            fontSize="46"
            letterSpacing="-0.8px"
            fill={theme === 'dark' ? '#FFFFFF' : '#0B132B'}
          >
            l
          </text>

          {/* Second Gear 'o' */}
          <g transform="translate(185, 27) scale(0.33)" fill={theme === 'dark' ? '#E2E8F0' : '#0B132B'}>
            <path
              d="M50 35C41.7 35 35 41.7 35 50C35 58.3 41.7 65 50 65C58.3 65 65 58.3 65 50C65 41.7 58.3 35 50 35ZM50 57C46.1 57 43 53.9 43 50C43 46.1 46.1 43 50 43C53.9 43 57 46.1 57 50C57 53.9 53.9 57 50 57Z"
            />
            <path
              d="M93.5 42.5L84.2 41C83.5 38.3 82.4 35.8 81 33.4L86.8 25.8C87.8 24.5 87.6 22.6 86.3 21.6L78.4 13.7C77.4 12.4 75.5 12.2 74.2 13.2L66.6 19C64.2 17.6 61.7 16.5 59 15.8L57.5 6.5C57.2 4.9 55.7 3.7 54.1 3.7H45.9C44.3 3.7 42.8 4.9 42.5 6.5L41 15.8C38.3 16.5 35.8 17.6 33.4 19L25.8 13.2C24.5 12.2 22.6 12.4 21.6 13.7L13.7 21.6C12.4 22.6 12.2 24.5 13.2 25.8L19 33.4C17.6 35.8 16.5 38.3 15.8 41L6.5 42.5C4.9 42.8 3.7 44.3 3.7 45.9V54.1C3.7 55.7 4.9 57.2 6.5 57.5L15.8 59C16.5 61.7 17.6 64.2 19 66.6L13.2 74.2C12.2 75.5 12.4 77.4 13.7 78.4L21.6 86.3C22.6 87.6 24.5 87.8 25.8 86.8L33.4 81C35.8 82.4 38.3 83.5 41 84.2L42.5 93.5C42.8 95.1 44.3 96.3 45.9 96.3H54.1C55.7 96.3 57.2 95.1 57.5 93.5L59 84.2C61.7 83.5 64.2 82.4 66.6 81L74.2 86.8C75.5 87.8 77.4 87.6 78.4 86.3L86.3 78.4C87.6 77.4 87.8 75.5 86.8 74.2L81 66.6C82.4 64.2 83.5 61.7 84.2 59L93.5 57.5C95.1 57.2 96.3 55.7 96.3 54.1V45.9C96.3 44.3 95.1 42.8 93.5 42.5ZM50 72C37.9 72 28 62.1 28 50C28 37.9 37.9 28 50 28C62.1 28 72 37.9 72 50C72 62.1 62.1 72 50 72Z"
            />
          </g>

          {/* "gy" */}
          <text
            x="223"
            y="57"
            fontFamily="'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif"
            fontWeight="800"
            fontSize="46"
            letterSpacing="-0.8px"
            fill={theme === 'dark' ? '#FFFFFF' : '#0B132B'}
          >
            gy
          </text>
        </g>
      </svg>
    </div>
  );
};
