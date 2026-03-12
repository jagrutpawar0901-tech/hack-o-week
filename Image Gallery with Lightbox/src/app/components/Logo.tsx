export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Gradient definitions */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="33%" stopColor="#FFA500" />
            <stop offset="66%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF1493" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ECDC4" />
            <stop offset="50%" stopColor="#44A08D" />
            <stop offset="100%" stopColor="#5E72E4" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A8E6CF" />
            <stop offset="50%" stopColor="#FFD3B6" />
            <stop offset="100%" stopColor="#FFAAA5" />
          </linearGradient>
        </defs>
        
        {/* Camera/Gallery icon with vibrant gradients */}
        <rect x="4" y="12" width="40" height="28" rx="4" fill="url(#grad1)" />
        <rect x="8" y="16" width="32" height="20" rx="2" fill="#1a1a1a" opacity="0.3" />
        
        {/* Lens circles */}
        <circle cx="24" cy="26" r="8" fill="url(#grad2)" />
        <circle cx="24" cy="26" r="5" fill="url(#grad3)" />
        <circle cx="24" cy="26" r="2" fill="#fff" />
        
        {/* Flash indicator */}
        <rect x="36" y="8" width="6" height="6" rx="1" fill="url(#grad1)" />
      </svg>
      
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Chromatic
        </h1>
        <p className="text-sm text-gray-400 -mt-1">Gallery</p>
      </div>
    </div>
  );
}
