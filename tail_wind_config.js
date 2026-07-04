// tailwind-config.js
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            }
        }
    },
    plugins: [
        function({ addComponents, addBase }) {

            addBase({
                body: {
                    backgroundColor: '#020c1b',
                    backgroundImage: 'radial-gradient(at 50% 0%, rgba(3, 37, 78, 0.5) 0px, transparent 60%)',
                    backgroundAttachment: 'fixed',
                    margin: '0',
                    color: '#e2e8f0',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'grayscale',
                    padding: '1rem',
                },
                '@media (min-width: 768px)': {
                    body: { padding: '3rem' }
                }
            });

            addComponents({

                '.content-container': {
                    '@apply max-w-6xl w-full space-y-6': '',
                },

                '.content-header': {
                    '@apply bg-gradient-to-r from-cyan-600/40 to-sky-700/40 border border-[#03254E]/60 rounded-[24px] p-6 shadow-xl backdrop-blur-md w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4': '',
                },
                '.content-header-title': {
                    '@apply text-3xl text-white font-serif italic tracking-wide': '',
                },
                '.content-header-subtitle': {
                    '@apply text-xs text-slate-400 font-light': '',
                },

                // CONTENT CARD – gradient + shadow ca CSS pur
                '.content-card': {
                    borderRadius: '28px',
                    padding: '1.5rem',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.45)',
                    backdropFilter: 'blur(24px)',
                    border: '1px solid rgba(30,64,175,0.4)',
                    backgroundImage: 'linear-gradient(135deg, rgba(15,28,46,0.9), rgba(3,37,78,0.8), rgba(2,16,31,0.9))',
                },

                '.content-card-title': {
                    '@apply text-2xl font-serif text-white italic': '',
                },
                '.content-card-text': {
                    '@apply text-slate-300 leading-relaxed text-sm md:text-[15px] font-light': '',
                },

                '.definition-grid': {
                    '@apply grid grid-cols-1 md:grid-cols-2 gap-6': '',
                },

                // YELLOW CARD
                '.definition-card-yellow': {
                    borderRadius: '28px',
                    padding: '1.5rem',
                    minHeight: '160px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                    backgroundImage: 'linear-gradient(135deg, #f7e9b0, #e2b215, #b8860b)',
                    color: '#0f172a',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                },

                // GREEN CARD
                '.definition-card-green': {
                    borderRadius: '28px',
                    padding: '1.5rem',
                    minHeight: '160px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                    backgroundImage: 'linear-gradient(135deg, #b2f7d4, #10b981, #0f766e)',
                    color: '#0f172a',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                },

                // ORANGE CARD
                '.definition-card-orange': {
                    borderRadius: '28px',
                    padding: '1.5rem',
                    minHeight: '160px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
                    backgroundImage: 'linear-gradient(135deg, #ffb38a, #ff5a00, #b91c1c)',
                    color: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                },

                '.definition-title': {
                    '@apply text-2xl font-serif italic font-bold': '',
                },
                '.definition-text': {
                    '@apply text-xs md:text-sm font-medium leading-relaxed opacity-90': '',
                },

                // CODE WRAPPER
                '.code-wrapper': {
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: '1px solid #1f2937',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                    backgroundImage: 'linear-gradient(180deg, #0b1528, #09101f, #020c1b)',
                },
                '.code-header': {
                    '@apply bg-[#070D19] px-4 py-2.5 border-b border-slate-800/60 flex justify-between items-center text-xs text-slate-400 font-mono': '',
                },
                '.code-body': {
                    '@apply !p-5 !m-0 text-xs md:text-sm font-mono overflow-x-auto leading-relaxed text-slate-200 text-left !bg-[#0B1528] w-full block': '',
                    '& .token.keyword': { '@apply text-pink-500 font-bold': '' },
                    '& .token.string': { '@apply text-lime-400': '' },
                    '& .token.number': { '@apply text-amber-400': '' },
                    '& .token.class-name': { '@apply text-cyan-400': '' },
                    '& .token.function': { '@apply text-fuchsia-400': '' },
                    '& .token.macro': { '@apply text-rose-400': '' },
                    '& .token.header': { '@apply text-emerald-400': '' },
                    '& .token.punctuation': { '@apply text-slate-400': '' }
                },

                '.completion-banner': {
                    '@apply bg-gradient-to-r from-cyan-600/40 to-sky-700/40 text-white rounded-[28px] p-6 shadow-xl flex flex-col sm:flex-row gap-4 items-center justify-between w-full': '',
                },
                '.completion-title': {
                    '@apply text-xl font-serif italic font-bold': '',
                },
                '.completion-subtitle': {
                    '@apply text-xs opacity-90 mt-0.5': '',
                },

                '.btn-primary': {
                    '@apply bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 shrink-0 self-start sm:self-auto': '',
                },
                '.btn-action': {
                    '@apply w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition-all uppercase tracking-wider shrink-0': '',
                }
            });
        }
    ]
};
