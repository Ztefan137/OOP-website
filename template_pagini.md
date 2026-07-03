# Template grafic 

Acest fișier conține toate blocurile vizuale din proiectul tău, complet izolate și comentate. Copiază elementele de care ai nevoie pentru a construi o pagină nouă în același stil.

---

## Structura de Bază (Scheletul Paginii)
Orice pagină nouă pornește de la această structură. Ea conține configurarea fonturilor, Tailwind CSS, stilul pentru fundalul întunecat și containerul principal flexibil.

```html
<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lecția X.Y - [Titlu Pagina Nouă]</title>
    
    <link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)">
    <link rel="preconnect" href="[https://fonts.gstatic.com](https://fonts.gstatic.com)" crossorigin>
    <link href="[https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=JetBrains+Mono:wght@400;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap](https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=JetBrains+Mono:wght@400;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap)" rel="stylesheet">

    <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                        mono: ['"JetBrains Mono"', 'monospace'],
                        titluCursiv: ['"Dancing Script"', 'cursive'],
                    }
                }
            }
        }
    </script>

    <style>
        body {
            background-image: linear-gradient(to bottom, #0f172a, #020617);
            background-attachment: fixed;
        }
        .premium-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        .premium-card:hover {
            transform: translateY(-4px);
        }
    </style>
</head>
<body class="text-slate-200 min-h-screen p-4 md:p-12 flex flex-col items-center font-sans">

    <div class="max-w-6xl w-full space-y-6">

    </div>
</body>
</html>

```

## Cardul de sus

```html

        <div class="premium-card bg-gradient-to-r from-cyan-600/40 to-sky-700/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="space-y-2">
                <span class="inline-block text-xs font-mono bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-700">
                    Text
                </span>
                <h1 class="text-4xl text-white tracking-wide font-bold">
                    Titlu
                </h1>
                <p class="text-sm text-slate-400">Subtitlu</p>
            </div>
            
            <a href="./../index.html" class="bg-white hover:bg-slate-100 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg transition-colors flex items-center gap-2 group shrink-0 self-start sm:self-auto">
                <svg class="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                </svg>
                <span>Înapoi la Dashboard</span>
            </a>
        </div>

```

## Cardul principal

```html

<div class="premium-card bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl text-slate-900 space-y-8">
    Lecția propriu zisă
</div>

<div class="premium-card bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl text-slate-900 space-y-8">
    Lecția propriu zisă
</div>

```

## Card final

```html

        <div class="premium-card flex flex-col sm:flex-row gap-4 items-center justify-between p-6 bg-white border border-slate-200 rounded-3xl shadow-xl text-slate-900">
            <div>
                <p class="text-sm font-bold text-slate-900">Ai înțeles conceptele?</p>
                <p class="text-xs text-slate-500">Marchează lecția ca finalizată pentru a debloca următorul modul.</p>
            </div>
            <button id="btn-finalizare" class="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all transform active:scale-[0.99] text-center">
                Marchează ca Finalizat &rarr;
            </button>
        </div>

    </div>

    <script>
        document.getElementById('btn-finalizare').onclick = function() {
            const dateSalvate = localStorage.getItem('poo_dashboard_data');
            
            if (dateSalvate) {
                let profil = JSON.parse(dateSalvate);
                
                if (profil.modulCurentIndex === 0) {
                    profil.modulCurentIndex = 1;
                    profil.streakZile = (profil.streakZile || 0) + 1;
                    localStorage.setItem('poo_dashboard_data', JSON.stringify(profil));
                }
            }
            
            window.location.href = './../index.html';
        };
    </script>

```

## Conținut central 



