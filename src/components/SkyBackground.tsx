export default function SkyBackground() {
  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#1a1a2e] to-[#16213e]"
    >
      {/* Sun */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full sun"
        style={{
          background: 'radial-gradient(circle, #ffd700 0%, #ff8c00 50%, transparent 70%)',
          boxShadow: '0 0 50px #ffd700, 0 0 100px #ff8c00',
        }}
      />

      {/* Stars */}
      {Array.from({ length: 100 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white star"
          style={{
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.8 + 0.2,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <style>
        {`
          .sun {
            animation: rotate 20s linear infinite, float 6s ease-in-out infinite;
          }

          .star {
            animation: twinkle 3s ease-in-out infinite;
          }

          @keyframes rotate {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translate(-50%, -50%);
            }
            50% {
              transform: translate(-50%, calc(-50% - 20px));
            }
          }

          @keyframes twinkle {
            0%, 100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 1;
              transform: scale(1.5);
            }
          }
        `}
      </style>
    </div>
  );
} 