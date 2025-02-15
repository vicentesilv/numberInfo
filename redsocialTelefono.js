const axios = require('axios');
const readline = require('readline');

async function buscarRedesSociales(numeroTelefono) {
    console.log(`Buscando redes sociales asociadas al número: ${numeroTelefono}`);

    try {
        console.log("Buscando en Facebook...");
        const facebookUrl = `https://www.facebook.com/search/top/?q=${encodeURIComponent(numeroTelefono)}`;
        console.log(`URL de búsqueda en Facebook: ${facebookUrl}`);
        console.log("Nota: Debes iniciar sesión en Facebook para ver resultados.");
    } catch (error) {
        console.error("Error al buscar en Facebook:", error.message);
    }

    try {
        console.log("Buscando en Instagram...");
        const instagramUrl = `https://www.instagram.com/accounts/account_recovery/?phone_number=${encodeURIComponent(numeroTelefono)}`;
        console.log(`URL de búsqueda en Instagram: ${instagramUrl}`);
        console.log("Nota: Debes iniciar sesión en Instagram para ver resultados.");
    } catch (error) {
        console.error("Error al buscar en Instagram:", error.message);
    }


    try {
        console.log("Buscando en LinkedIn...");
        const linkedinUrl = `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(numeroTelefono)}`;
        console.log(`URL de búsqueda en LinkedIn: ${linkedinUrl}`);
        console.log("Nota: Debes iniciar sesión en LinkedIn para ver resultados.");
    } catch (error) {
        console.error("Error al buscar en LinkedIn:", error.message);
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el número de teléfono (con código de país): ', (numeroTelefono) => {
    buscarRedesSociales(numeroTelefono);
    rl.close();
});
