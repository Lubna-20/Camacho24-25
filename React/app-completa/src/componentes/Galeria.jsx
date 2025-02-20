import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Galeria({ onSelectItem }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <div className="galeria">
            {items.map((item) => (
                <div key={item.id} className="item" onClick={() => onSelectItem(item)}>
                    {item.type === 'imagenes' ? (
                        <img src={item.url} alt={item.description} />
                    ) : (
                        <video src={item.url} controls />
                    )}
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

Galeria.propTypes = {
    onSelectItem: PropTypes.func.isRequired,
};

export default Galeria;