import react, {useState} from 'react';
import './Ej2WayBinding.css';

function Ej2WayBinding(){

    const [input, setInput] = useState("");
    const txtChangeHandler = (event) => setInput(event.target.value);
    const clickClearHandler = () => setInput("");

    return (
        <div className='main-Ej2WayBinding'>
            <div>
                <h2>Hello {input}</h2>
            </div>
            <div className="wrapper-Ej2WayBinding">
                <div className="Ej2WayBinding-input">
                    <input 
                        type="text" 
                        id='txtEjemplo'
                        onChange={txtChangeHandler}
                        value={input}
                    ></input>
                </div>
                <div className="Ej2WayBinding-clear">
                    <button 
                        id='btnEj2WayBinding' 
                        className="btn2WayBinding" 
                        onClick={clickClearHandler}
                    >LIMPIAR</button>
                </div>
            </div>
        </div>
    )
}

export default Ej2WayBinding;