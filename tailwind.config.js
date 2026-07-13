/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#0B1020',
        'cyber-primary': '#2563EB',
        'cyber-success': '#22C55E',
        'cyber-warning': '#FACC15',
        'cyber-danger': '#EF4444',
        'cyber-text': '#FFFFFF',
        'cyber-secondary': '#1E293B',
        'cyber-hover': '#3B82F6',
        'cyber-disabled': '#475569',
        'cyber-border': '#334155',
        'cyber-card': '#0F172A'
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'fade-out': 'fadeOut 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'glitch': 'glitch 2.5s infinite',
        'scan': 'scan 3s linear infinite',
        'blink': 'blink 1.2s steps(2) infinite',
        'shake': 'shake 0.35s ease-in-out',
        'flash-green': 'flashGreen 0.5s ease-out',
        'flash-red': 'flashRed 0.5s ease-out',
        'star-pop': 'starPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeOut: { '0%': { opacity: '1' }, '100%': { opacity: '0' } },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(37, 99, 235, 0.4)' },
          '50%': { boxShadow: '0 0 28px rgba(37, 99, 235, 0.9)' }
        },
        glitch: {
          '0%, 100%': { textShadow: '2px 0 #22C55E, -2px 0 #EF4444' },
          '20%': { textShadow: '-2px 0 #22C55E, 2px 0 #EF4444' },
          '40%': { textShadow: '2px 2px #2563EB, -2px -2px #FACC15' },
          '60%': { textShadow: '0 0 #fff' }
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '75%': { transform: 'translateX(6px)' }
        },
        flashGreen: { '0%': { backgroundColor: 'rgba(34,197,94,0.5)' }, '100%': { backgroundColor: 'transparent' } },
        flashRed: { '0%': { backgroundColor: 'rgba(239,68,68,0.5)' }, '100%': { backgroundColor: 'transparent' } },
        starPop: { '0%': { transform: 'scale(0) rotate(-90deg)', opacity: '0' }, '100%': { transform: 'scale(1) rotate(0)', opacity: '1' } }
      }
    }
  },
  plugins: []
};
