export default function Loaders() {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160">
      <defs>
        <linearGradient
          id="premiumGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        > 
          <stop offset="0%" stopColor="#c8cafd" />
          <stop offset="50%" stopColor="#8c83f6" />
          <stop offset="100%" stopColor="#603dc8" />
        </linearGradient>
        <filter id="premiumGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(80,80)">
        {/* Outer ring */}
        <circle
          cx="0"
          cy="0"
          r="60"
          fill="none"
          stroke="url(#premiumGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="377"
          strokeDashoffset="377"
          filter="url(#premiumGlow)"
          opacity="0.8"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="377;0;377"
            dur="4s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 0 0;360 0 0"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Inner breathing circle */}
        <circle
          cx="0"
          cy="0"
          r="30"
          fill="url(#premiumGradient)"
          opacity="0.2"
          filter="url(#premiumGlow)"
        >
          <animate
            attributeName="r"
            values="30;40;30"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            values="0.2;0.05;0.2"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Center dot */}
        <circle cx="0" cy="0" r="4" fill="#603dc8" filter="url(#premiumGlow)">
          <animate
            attributeName="fill-opacity"
            values="0.6;1;0.6"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
}
