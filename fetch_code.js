document.addEventListener("DOMContentLoaded", function() {
    const codeBlocks = document.querySelectorAll('pre[data-src]');
    
    codeBlocks.forEach(pre => {
        const url = pre.getAttribute('data-src');
        const codeElement = pre.querySelector('code');
        console.log(url);
        
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Fișierul nu a putut fi accesat');
                return response.text();
            })
            .then(text => {
                // textContent rezolvă automat caracterele speciale gen < și >
                codeElement.textContent = text;
                // Îi spunem lui Prism să coloreze noul text inserat
                Prism.highlightElement(codeElement);
            })
            .catch(error => {
                console.error(error);
                codeElement.textContent = `// Eroare la încărcarea fișierului: ${url}`;
            });
    });
});

