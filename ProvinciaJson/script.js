window.onload = inicio;

const url = "getProvincias.json";
const body = document.querySelector("body");

function inicio() {
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((provincia) => mostrarResultados(provincia)) // Llama a mostrarResultados directamente aquí
        .catch((error) => console.error('Error al cargar los datos:', error)); // Manejo de errores
}

// Función para contar representantes por partido
function contarRepresentantesPorPartido(provincias) {
    let reps = { PA: 0, PB: 0, PC: 0, PD: 0 };  // Vectores para los representantes de cada partido

    provincias.forEach(provincia => {
        const maxVotos = Math.max(provincia.votosPA, provincia.votosPB, provincia.votosPC, provincia.votosPD);
        if (maxVotos === provincia.votosPA) reps.PA += provincia.Representantes;
        else if (maxVotos === provincia.votosPB) reps.PB += provincia.Representantes;
        else if (maxVotos === provincia.votosPC) reps.PC += provincia.Representantes;
        else if (maxVotos === provincia.votosPD) reps.PD += provincia.Representantes;
    });

    return reps;
}

// Función para listar las provincias ganadas por cada partido
function listarProvinciasGanadas(provincias) {
    let provinciasGanadas = { PA: [], PB: [], PC: [], PD: [] };  // Vectores de provincias para cada partido

    provincias.forEach(provincia => {
        const maxVotos = Math.max(provincia.votosPA, provincia.votosPB, provincia.votosPC, provincia.votosPD);
        if (maxVotos === provincia.votosPA) provinciasGanadas.PA.push(provincia.nombreProvincia);
        else if (maxVotos === provincia.votosPB) provinciasGanadas.PB.push(provincia.nombreProvincia);
        else if (maxVotos === provincia.votosPC) provinciasGanadas.PC.push(provincia.nombreProvincia);
        else if (maxVotos === provincia.votosPD) provinciasGanadas.PD.push(provincia.nombreProvincia);
    });

    return provinciasGanadas;
}

// Función para contar votos totales por partido
function contarVotosTotales(provincias) {
    let votos = { PA: 0, PB: 0, PC: 0, PD: 0 };  // Vectores para los votos totales de cada partido

    provincias.forEach(provincia => {
        votos.PA += provincia.votosPA;
        votos.PB += provincia.votosPB;
        votos.PC += provincia.votosPC;
        votos.PD += provincia.votosPD;
    });

    return votos;
}

// Función para obtener el orden de ganadores por representantes
function obtenerOrdenGanadores(representantes) {
    const partidos = [
        { partido: 'PA', representantes: representantes.PA },
        { partido: 'PB', representantes: representantes.PB },
        { partido: 'PC', representantes: representantes.PC },
        { partido: 'PD', representantes: representantes.PD }
    ];

    // Ordenar los partidos por el número de representantes de mayor a menor
    partidos.sort((a, b) => b.representantes - a.representantes);

    return partidos;
}

// Función principal para mostrar los resultados en la página
function mostrarResultados(provincias) {
    const representantes = contarRepresentantesPorPartido(provincias);
    const provinciasGanadas = listarProvinciasGanadas(provincias);
    const votosTotales = contarVotosTotales(provincias);
    const ganadores = obtenerOrdenGanadores(representantes);

    // Mostrar representantes por partido
    document.getElementById('representantes').innerHTML = `
        <p>PA: ${representantes.PA} representantes</p>
        <p>PB: ${representantes.PB} representantes</p>
        <p>PC: ${representantes.PC} representantes</p>
        <p>PD: ${representantes.PD} representantes</p>
    `;

    // Mostrar provincias ganadas por cada partido
    document.getElementById('provincias').innerHTML = `
        <p>PA: ${provinciasGanadas.PA.join(', ')}</p>
        <p>PB: ${provinciasGanadas.PB.join(', ')}</p>
        <p>PC: ${provinciasGanadas.PC.join(', ')}</p>
        <p>PD: ${provinciasGanadas.PD.join(', ')}</p>
    `;

    // Mostrar votos totales por partido
    document.getElementById('votos').innerHTML = `
        <p>PA: ${votosTotales.PA} votos</p>
        <p>PB: ${votosTotales.PB} votos</p>
        <p>PC: ${votosTotales.PC} votos</p>
        <p>PD: ${votosTotales.PD} votos</p>
    `;

    // Mostrar orden de ganadores
    document.getElementById('ganadores').innerHTML = ganadores.map(ganador => `
        <p>${ganador.partido}: ${ganador.representantes} representantes</p>
    `).join('');
}
