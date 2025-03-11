
const Hortaliza = ({ PedirSemillasDesdeHortaliza }) => {
    const [mensaje, setMensaje] = useState(""); // Estado para el mensaje

    // Función que se llama cuando se hace clic en el botón
    const mandarSemilleros = () => {
        // Generar un número aleatorio para simular los semilleros
        const semillerosGenerados = Math.floor(Math.random() * 100);
        // Llamar a la función pasada como prop para mandar los semilleros al padre
        PedirSemillasDesdeHortaliza(semillerosGenerados);
    };

    return (
        <div>
            <h2>Hortaliza</h2>
            <input
                type="text"
                id="hortaliza"
                name="hortaliza"
                placeholder="Ingrese el mensaje para huerto"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)} // Actualiza el mensaje
            />
            <button onClick={mandarSemilleros}>Mandar Semilleros</button>
            <p>El huerto dice: {mensaje}</p>
        </div>
    );
};

export default Hortaliza;
