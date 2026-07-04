document.getElementById('btn-finalizare').onclick = async function(event) {
    event.preventDefault(); 
    
    try {
        const urlBara = window.location.href.toLowerCase();

        // 1. Preluăm structura din cursuri.json
        const raspuns = await fetch('../cursuri.json');
        if (!raspuns.ok) throw new Error('Nu s-a putut încărca cursuri.json');
        const dateCurs = await raspuns.json();

        // 2. Platizăm toate lecțiile pentru a le putea parcurge
        let toateLectiile = [];
        dateCurs.cursuri.forEach(capitol => {
            toateLectiile.push(...capitol.lectii);
        });

        // 3. Identificăm indexul lecției curente în funcție de URL-ul din browser
        const indexCurent = toateLectiile.findIndex(l => urlBara.includes(l.url.toLowerCase().trim()));

        if (indexCurent !== -1) {
            // Indexul simulat pe post de ID (0 pentru prima lecție, 1 pentru a doua, etc.)
            // Sau dacă în JSON capitolele tale au id-uri (1, 2, 3), poți folosi indexCurent
            const idLectieCurenta = indexCurent; 
            const idLectieUrmatoare = indexCurent + 1;

            // 4. Citim exact cheia folosită inițial
            const dateSalvate = localStorage.getItem('poo_dashboard_data');
            
            // Dacă nu există nimic salvat, plecăm de la 0 (așa cum sugera codul tău inițial)
            let profil = dateSalvate ? JSON.parse(dateSalvate) : { modulCurentIndex: 0, streakZile: 0 };

            // 5. Aplicăm fix logica ta inițială, dar extinsă dinamic pentru orice index:
            // „Dacă utilizatorul a terminat lecția la care era blocat, îl trecem la următoarea și creștem streak-ul”
            if (profil.modulCurentIndex === idLectieCurenta) {
                profil.modulCurentIndex = idLectieUrmatoare;
                
                // Salvăm înapoi în localStorage în formatul dorit
                localStorage.setItem('poo_dashboard_data', JSON.stringify(profil));
            }
        } else {
            console.error("URL-ul paginii nu se potrivește cu nimic din cursuri.json");
        }
    } catch (eroare) {
        console.error("Eroare la scrierea în localStorage:", eroare);
    }

    // 6. Redirecționarea finală
    window.location.href = './../index.html';
};