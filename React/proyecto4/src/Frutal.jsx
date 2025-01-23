import Hortaliza from './Hortaliza';

const Huerto = () => {
    const [semillerosHortaliza, setSemillerosHortaliza] = useState(0); // Estado para almacenar los semilleros

    // Función para recibir las semillas desde Hortaliza
    const PedirSemillasDesdeHortaliza = (e) => {
        setSemillerosHortaliza(e); // Actualiza el estado con el valor recibido
    };

    return (
        <div>
            <h2>Huerto</h2>
            <h3>Semilleros recibidos de Hortaliza: {semillerosHortaliza}</h3>

            {/* Pasar la función PedirSemillasDesdeHortaliza como prop */}
            <Hortaliza PedirSemillasDesdeHortaliza={PedirSemillasDesdeHortaliza} />
        </div>
    );
};

export default Huerto;
