export function FreighterIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="300" fill="var(--ink-2)" />
      <g opacity="0.5" stroke="var(--sky)" strokeWidth="0.5">
        <line x1="0" y1="230" x2="480" y2="230" />
        <line x1="0" y1="250" x2="480" y2="250" />
        <line x1="0" y1="270" x2="480" y2="270" />
      </g>
      <g stroke="white" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M40 190 L340 190 C360 190 370 178 372 168 L378 150 C380 144 376 140 370 140 L120 140 L96 110 L74 110 L86 140 L48 140 C42 140 38 145 38 151 L38 178 C38 185 40 190 40 190 Z" />
        <path d="M150 140 L170 96 L188 96 L182 140" />
        <path d="M372 168 L420 168" />
        <circle cx="80" cy="196" r="12" />
        <circle cx="300" cy="196" r="12" />
      </g>
      <g stroke="var(--signal)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M60 150 L110 150" />
        <path d="M60 165 L140 165" />
      </g>
      <g opacity="0.7">
        <circle cx="430" cy="60" r="3" fill="var(--signal)" />
        <circle cx="410" cy="90" r="2" fill="white" />
        <circle cx="450" cy="110" r="2" fill="white" />
        <circle cx="60" cy="50" r="2" fill="white" />
      </g>
    </svg>
  );
}

export function ContainerLoadIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="260" height="220" fill="var(--ink-2)" />
      <g stroke="white" strokeOpacity="0.85" strokeWidth="2" strokeLinejoin="round">
        <rect x="40" y="120" width="70" height="46" rx="3" />
        <rect x="118" y="110" width="70" height="56" rx="3" />
        <line x1="40" y1="140" x2="110" y2="140" strokeOpacity="0.4" />
        <line x1="118" y1="132" x2="188" y2="132" strokeOpacity="0.4" />
      </g>
      <g stroke="var(--signal)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M153 60 L153 108" />
        <path d="M120 60 L186 60" />
        <path d="M120 60 L112 76" />
        <path d="M186 60 L194 76" />
      </g>
      <circle cx="153" cy="52" r="6" stroke="var(--signal)" strokeWidth="2.5" />
      <g stroke="white" strokeOpacity="0.6" strokeWidth="1.5">
        <path d="M20 190 L240 190" />
      </g>
    </svg>
  );
}

export function ControlTowerIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 220" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="260" height="220" fill="var(--ink-2)" />
      <g stroke="white" strokeOpacity="0.85" strokeWidth="2" strokeLinejoin="round">
        <path d="M120 200 L120 110 L140 110 L140 200" />
        <path d="M100 110 L160 110 L152 70 L108 70 Z" />
        <line x1="108" y1="90" x2="152" y2="90" strokeOpacity="0.4" />
      </g>
      <g stroke="var(--signal)" strokeWidth="2.5" strokeLinecap="round">
        <path d="M130 70 L130 46" />
        <circle cx="130" cy="40" r="5" />
      </g>
      <g className="radar-sweep" style={{ transformOrigin: "130px 40px" }}>
        <path d="M130 40 L164 22" stroke="var(--sky)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      </g>
      <g stroke="white" strokeOpacity="0.5" strokeWidth="1.5">
        <path d="M30 200 L230 200" />
      </g>
    </svg>
  );
}

export function HeroJetIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 720"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1628" />
          <stop offset="55%" stopColor="#122a4d" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
        <radialGradient id="glow" cx="78%" cy="18%" r="45%">
          <stop offset="0%" stopColor="#ffb238" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#ffb238" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="720" fill="url(#sky)" />
      <rect width="1200" height="720" fill="url(#glow)" />

      {/* stars / distant lights */}
      <g fill="#ffffff" opacity="0.5">
        <circle cx="120" cy="90" r="1.6" />
        <circle cx="230" cy="140" r="1.2" />
        <circle cx="980" cy="120" r="1.6" />
        <circle cx="1080" cy="200" r="1.2" />
        <circle cx="60" cy="260" r="1.2" />
        <circle cx="700" cy="70" r="1.4" />
      </g>

      {/* soft clouds */}
      <g fill="#ffffff" opacity="0.05">
        <ellipse cx="180" cy="560" rx="260" ry="46" />
        <ellipse cx="640" cy="620" rx="340" ry="54" />
        <ellipse cx="1020" cy="540" rx="220" ry="40" />
      </g>

      {/* route arc the jet is following */}
      <path
        d="M60 520 Q 420 300 1150 160"
        stroke="var(--sky)"
        strokeOpacity="0.35"
        strokeWidth="2"
        strokeDasharray="3 10"
        fill="none"
      />

      {/* motion lines */}
      <g stroke="#ffffff" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round">
        <line x1="330" y1="330" x2="430" y2="345" />
        <line x1="310" y1="365" x2="440" y2="382" />
        <line x1="300" y1="400" x2="410" y2="414" />
      </g>

      {/* jet body */}
      <g transform="translate(430 210) rotate(-8)">
        <path
          d="M0 60 L470 60 C500 60 520 45 524 30 L532 4 C534 -4 528 -10 520 -10 L160 -10 L124 -52 L92 -52 L110 -10 L54 -10 C44 -10 36 -3 36 8 L36 42 C36 53 0 60 0 60 Z"
          fill="#0e2545"
          stroke="#ffffff"
          strokeOpacity="0.9"
          strokeWidth="2.5"
        />
        {/* tail fin */}
        <path d="M470 60 L520 -46 L546 -46 L524 60 Z" fill="#0e2545" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2.5" />
        {/* wing */}
        <path d="M170 20 L 60 108 L 110 108 L 210 30 Z" fill="#0e2545" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2.5" />
        {/* cargo pod stripe */}
        <path d="M64 8 L 480 8" stroke="var(--signal)" strokeWidth="10" strokeLinecap="round" />
        {/* windows */}
        <g fill="#7dd3fc" opacity="0.6">
          <circle cx="150" cy="-24" r="4" />
          <circle cx="172" cy="-24" r="4" />
          <circle cx="194" cy="-24" r="4" />
        </g>
        {/* engines */}
        <ellipse cx="140" cy="66" rx="24" ry="14" fill="#0a1628" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2.5" />
        <ellipse cx="340" cy="66" rx="24" ry="14" fill="#0a1628" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="2.5" />
        {/* wordmark */}
        <text
          x="130"
          y="42"
          fontFamily="var(--font-display)"
          fontSize="34"
          fontWeight="700"
          fill="#ffffff"
          letterSpacing="2"
        >
          AEROVA
        </text>
      </g>
    </svg>
  );
}

export function RouteMapIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="320" fill="var(--ink-2)" />
      <g stroke="white" strokeOpacity="0.08" strokeWidth="1">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 50} y1={0} x2={i * 50} y2={320} />
        ))}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`h${i}`} x1={0} y1={i * 50} x2={600} y2={i * 50} />
        ))}
      </g>
      {[
        [90, 230],
        [260, 90],
        [430, 200],
        [520, 70],
        [180, 60],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="var(--signal)" />
          <circle cx={x} cy={y} r="9" stroke="var(--signal)" strokeOpacity="0.4" />
        </g>
      ))}
      <g stroke="var(--sky)" strokeWidth="1.5" strokeDasharray="2 6" strokeLinecap="round" opacity="0.8">
        <path d="M90 230 Q 175 120 260 90" />
        <path d="M260 90 Q 345 60 430 200" />
        <path d="M430 200 Q 475 130 520 70" />
        <path d="M180 60 Q 220 40 260 90" />
      </g>
    </svg>
  );
}
