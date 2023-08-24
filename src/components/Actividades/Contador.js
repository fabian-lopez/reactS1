import React, {useState} from 'react';
import './Contador.css';

function numeroEnteroRandom(){
    return Math.floor(Math.random() * 100) + 1;
}

function Contador(){
    const [count, setContador] = useState(numeroEnteroRandom());
    const clickHandler = () => {
        setContador(numeroEnteroRandom());
    }

    return (
        <div className="wraper-contador">
            <h2>{count}</h2>
            <button id="btnContador" className="btn" onClick={clickHandler}>Nuevo valor</button>
        </div>
    )
}

export default Contador;