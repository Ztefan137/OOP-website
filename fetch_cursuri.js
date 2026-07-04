async function incarcaCursuri() {
    const container = document.getElementById('cursuri-container');
    if (!container) return;

    try {
        const response = await fetch('cursuri.json?nocache=' + Date.now());
        if (!response.ok) throw new Error(`Eroare HTTP: ${response.status}`);
        
        const data = await response.json();
        
        // 1. Sortare corectă după numărul capitolului
        const cursuriSortate = (data.cursuri || []).sort((a, b) => {
            const numaraA = parseInt(a.titlu.match(/\d+/)?.[0] || a.id);
            const numaraB = parseInt(b.titlu.match(/\d+/)?.[0] || b.id);
            return numaraA - numaraB;
        });

        // 2. Generare HTML
        container.className = "content-card space-y-4"; 
        container.innerHTML = cursuriSortate.map((capitol, index) => {
            const idDropdown = `drop-${capitol.id}`;
            const tipEticheta = capitol.categorie;
            const culoareEticheta="bg-amber-400 text-black";

            // Generare și stilizare listă de lecții cu noi simboluri
            const lectiiHtml = capitol.lectii.map(lectie => `
                <li class="flex items-center gap-3 py-1.5 group/item">
                    <svg class="w-3 h-3 text-cyan-400 opacity-70 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all shrink-0" 
                         fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                    </svg>
                    
                    <a href="lectii/${lectie.url}" class="content-card-text text-slate-300 hover:text-cyan-300 transition-colors font-medium">
                        ${lectie.nume}
                    </a>
                </li>
            `).join('');

            return `
                <div class="border border-slate-800/60 rounded-xl overflow-hidden bg-[#020c1b]/50">
                    <button type="button"
                            data-target="${idDropdown}"
                            class="dropdown-trigger w-full text-left p-4 flex justify-between items-center hover:bg-[#03254E]/40 transition-colors group">
                        
                        <div class="flex items-center gap-3">
                            <span class="content-card-text text-xs px-3 py-1 rounded-full ${culoareEticheta} font-semibold tracking-wide uppercase shadow-sm">
                                ${tipEticheta}
                            </span>
                            <span class="text-sm md:text-base font-medium text-slate-200 group-hover:text-cyan-400">
                                ${capitol.titlu}
                            </span>
                        </div>

                        <svg id="arrow-${idDropdown}" class="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-transform duration-200"
                             fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </button>

                    <div id="${idDropdown}" class="hidden border-t border-slate-800/40 bg-[#020c1b]/30 p-4">
                        <ul class="space-y-1 text-sm pl-2">
                            ${lectiiHtml}
                        </ul>
                    </div>
                </div>
            `;
        }).join('');

        // 3. Logica de Dropdown
        container.querySelectorAll('.dropdown-trigger').forEach(buton => {
            buton.addEventListener('click', () => {
                const idTinta = buton.getAttribute('data-target');
                const panou = document.getElementById(idTinta);
                const sageata = document.getElementById(`arrow-${idTinta}`);

                if (panou && sageata) {
                    panou.classList.toggle('hidden');
                    sageata.classList.toggle('rotate-180');
                }
            });
        });

    } catch (err) {
        console.error("Eroare:", err);
        container.innerHTML = `<p class="text-red-400">Eroare la încărcarea cursurilor.</p>`;
    }
}