
import PropTypes from 'prop-types';

function Detalle({ item }) {
    if (!item) return <div>Selecciona un elemento para ver los detalles.</div>;

    return (
        <div className="detalle">
            {item.type === 'imagenes' ? (
                <img src={item.url} alt={item.description} />
            ) : (
                <video src={item.url} controls autoPlay />
            )}
            <p>{item.description}</p>
        </div>
    );
}

Detalle.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.oneOf(['imagenes']).isRequired,
        url: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
};

export default Detalle;