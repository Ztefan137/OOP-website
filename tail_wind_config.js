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

            // BASE STYLES
            addBase({
                'body': {
                    'background-color': '#020c1b',
                    'background-image': 'radial-gradient(at 50% 0%, rgba(3, 37, 78, 0.5) 0px, transparent 60%)',
                    'background-attachment': 'fixed',
                    'margin': '0',
                    'color': '#e2e8f0',
                    'min-height': '100vh',
                    'display': 'flex',
                    'flex-direction': 'column',
                    'align-items': 'center',
                    '-webkit-font-smoothing': 'antialiased',
                    '-moz-osx-font-smoothing': 'grayscale',
                    'padding': '1rem',
                },
                '@media (min-width: 768px)': {
                    'body': { 'padding': '3rem' }
                }
            });

            // COMPONENTS
            addComponents({

                /* CONTAINER */
                '.content-container': {
                    '@apply max-w-6xl w-full space-y-6': '',
                },

                /* HEADER */
                '.content-header': {
                    '@apply bg-gradient-to-r from-cyan-600/40 to-sky-700/40 border border-[#03254E]/60 rounded-[24px] p-6 shadow-xl backdrop-blur-md w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4': '',
                },
                '.content-header-title': {
                    '@apply text-3xl text-white font-serif italic tracking-wide': '',
                },
                '.content-header-subtitle': {
                    '@apply text-xs text-slate-400 font-light': '',
                },

                /* MAIN CONTENT CARD — ENHANCED GRADIENT */
                '.content-card': {
                    '@apply bg-gradient-to-br from-[#03254E]/80 via-[#043463]/70 to-[#021a33]/80 border border-slate-800/40 rounded-[28px] p-6 md:p-8 shadow-xl backdrop-blur-md space-y-4': '',
                },
                '.content-card-title': {
                    '@apply text-2xl font-serif text-white italic': '',
                },
                '.content-card-text': {
                    '@apply text-slate-300 leading-relaxed text-sm md:text-[15px] font-light': '',
                },

                /* GRID */
                '.definition-grid': {
                    '@apply grid grid-cols-1 md:grid-cols-2 gap-6': '',
                },

                /* YELLOW CARD — GOLD GRADIENT */
                '.definition-card-yellow': {
                    '@apply bg-gradient-to-br from-amber-300 via-amber-400 to-yellow-600 text-slate-950 rounded-[28px] p-6 shadow-xl flex flex-col justify-between min-h-[160px]': '',
                },

                /* GREEN CARD — EMERALD → TEAL GRADIENT */
                '.definition-card-green': {
                    '@apply bg-gradient-to-br from-emerald-300 via-emerald-400 to-teal-600 text-slate-950 rounded-[28px] p-6 shadow-xl flex flex-col justify-between min-h-[160px]': '',
                },

                /* ORANGE CARD — FIERY ORANGE → RED GRADIENT */
                '.definition-card-orange': {
                    '@apply bg-gradient-to-br from-orange-400 via-orange-500 to-red-600 text-white rounded-[28px] p-6 shadow-xl flex flex-col justify-between min-h-[160px]': '',
                },

                '.definition-title': {
                    '@apply text-2xl font-serif italic font-bold': '',
                },
                '.definition-text': {
                    '@apply text-xs md:text-sm font-medium leading-relaxed opacity-90': '',
                },

                /* CODE BLOCK — DEPTH GRADIENT */
                '.code-wrapper': {
                    '@apply bg-gradient-to-b from-[#0B1528] to-[#020c1b] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl': '',
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

                /* COMPLETION BANNER */
                '.completion-banner': {
                    '@apply bg-gradient-to-r from-cyan-600/40 to-sky-700/40 text-white rounded-[28px] p-6 shadow-xl flex flex-col sm:flex-row gap-4 items-center justify-between w-full': '',
                },
                '.completion-title': {
                    '@apply text-xl font-serif italic font-bold': '',
                },
                '.completion-subtitle': {
                    '@apply text-xs opacity-90 mt-0.5': '',
                },

                /* BUTTONS */
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
