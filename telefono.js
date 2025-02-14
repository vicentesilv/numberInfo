const axios = require('axios');

async function obtenerInformacionTelefono(numeroTelefono) {
    const apiKey = '3a887f4df69a89fbbff729d13906ff73';
    const url = `http://apilayer.net/api/validate?access_key=${apiKey}&number=${numeroTelefono}&format=1`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.valid) {
            console.log(`Número de teléfono: ${data.number}`);
            console.log(`Tipo: ${data.line_type}`);
            console.log(`País: ${data.country_name}`);
            console.log(`Ubicación: ${data.location}`);
            console.log(`Operador: ${data.carrier}`);
        } else {
            console.log("Número de teléfono no válido.");
        }
    } catch (error) {
        console.error(`Error al obtener la información: ${error.message}`);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduce el número de teléfono (con código de país): ', (numeroTelefono) => {
    obtenerInformacionTelefono(numeroTelefono);
    readline.close();
});