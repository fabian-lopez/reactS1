import { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const FormControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const FormControl = styled.div`
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
    color: ${(props) => (props.invalid ? "#ad0000" : "000")}
  }

  & input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid ${(props) => (props.invalid ? "#ad0000" : "#ccc")};
    width: 20rem;
    max-width: 100%;
  }
`;

const FormActions = styled.div`
  text-align: right;
`;

const Button_BK = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: 1px solid #464646;
  background-color: #464646;
  color: #e5e5e5;
  border-radius: 12px;
  margin-right: 1rem;
  width: 100%;

  &:hover,
  &:active {
    background-color: #afafaf;
    border-color: #afafaf;
    color: black;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

function ExpenseForm(props) {
  // const [descripcion, setDescripcion] = useState("");
  // const [monto, setMonto] = useState("");
  // const [fecha, setFecha] = useState("");

  const descRef = useRef(null);
  
  const [error, setError] = useState(
    {
      error: false,
      title: "",
      message:""
    }
  );
  const [isValid, setIsValid] = useState(true);

  const [isDescValid, setIsDescValid] = useState(true);
  const [isMontoValid, setIsMontoValid] = useState(true);
  const [isFechaValid, setIsFechaValid] = useState(true);

  const [data, setData] = useState({
    Fecha: "",
    Descripcion: "",
    Monto: "",
  });

  const inputChangeHandler = (event) => {
    const {value} = event.target;
    
    switch (event.target.id) {
      case "Descripcion":
        //setDescripcion(event.target.value);
        if(value.length === 0){
          setIsDescValid(false);
          descRef.current.focus();
        }

        if(value.length > 0){
          setIsDescValid(true);
        }

        setData((prevState) => ({
          // lo que traigas ponlo aqui
          ...prevState,
          // y cambia la descripcion
          Descripcion: value, 
        }));
        break;
      case "Monto":
        setIsMontoValid(value.length > 0);
        setData((prevState) => ({
          ...prevState,
          Monto: value,
        }));
        break;
      case "Fecha":
        setIsFechaValid(value.length > 0);
        if(new Date(value) > new Date()){
          setError((prevState) => ({
            ...prevState, 
            error: true,
            title: "Fecha inválida",
            message: "La fecha no puede estar vacia. Favor de ingresar fecha."
          }));
          setIsFechaValid(false);
        }
        

        setData((prevState) => ({
          ...prevState,
          Fecha: value === null || value === undefined ? "" : value,
        }));
        break;
    }
  };

  const validaFormulario = () => {
    let descValido = false;
    let montoValido = false;
    let fechaValida = false;
    let resultado = false;
    
    if(data === undefined || data === null){
        setIsDescValid( false);
        setIsMontoValid(false);
        setIsFechaValid(false);
        setIsValid(false);
    } else {
      if (data.Descripcion.trim().length === 0){
        setIsDescValid( false);
        descRef.current.focus();
      }
      else{
        descValido = true;
        setIsDescValid( true);
      }

      if (data.Monto.trim().length === 0)
        setIsMontoValid(false);
      else {
        montoValido = true;
        setIsMontoValid(true);
      }

      if(data.Fecha === undefined || data.Fecha === null){
        setIsFechaValid(false);
        setError((prevState) => ({
            ...prevState, 
            error: true,
            title: "Fecha invalida",
            message: "La fecha no puede estar vacia. Favor de ingresar fecha."
          })
        );
      }
      else {
        if(data.Fecha.toString().trim().length === 0){
          setError((prevState) => ({
              ...prevState, 
              error: true,
              title: "Fecha invalida",
              message: "La fecha no puede estar vacia. Favor de ingresar fecha."
            })
          );
          setIsFechaValid(false);
        }
        else{

          if(new Date(data.Fecha) > new Date()){
            setError((prevState) => ({
                ...prevState, 
                error: true,
                title: "Fecha invalida",
                message: "La fecha ingresadaa no puede ser mayor a la actual. Favor de ingresar fecha valida."
              })
            );
            setIsFechaValid(false);
            fechaValida = false;
          } else {
            fechaValida = true
            setIsFechaValid(true);
            setError((prevState) => ({
                ...prevState, 
                error: false,
                title: "OK",
                message: "OK"
              })
            );
          }
        }
      }

      if (descValido && montoValido && fechaValida){
          setIsValid(true);
          resultado = true;
      } else {
          setIsValid(false);
          console.log("Formulario INVALIDO");
      }
    }

    console.log("desde validacion", isDescValid, isMontoValid, isFechaValid, "extra:", (descValido && montoValido && fechaValida));
    return resultado;
  };

  const submitHandler = (event) => {
    event.preventDefault(); 
    const datos = { ...data };
    
    console.log("despies de validacion", isDescValid, isMontoValid, isFechaValid);
    validaFormulario();

    if(!isValid){
      console.log("regresando porque no son validos", isValid)
      return;
    }

    const expense = {
      Fecha: new Date(datos.Fecha),
      Descripcion: datos.Descripcion,
      Monto: datos.Monto,
    };

    console.log("despies de validacion", isDescValid, isMontoValid, isFechaValid);

    props.onSaveExpense(expense);
    
    setData({ 
      Fecha: null,
      Descripcion: "",
      Monto: "",
    }); 
  };

  const toglleModal = () => {
    setError((prevState) => ({
      ...prevState,
      error:false,
      title: "",
      message: "",
    }));
  }

  return (
    <form onSubmit={submitHandler}>
      <FormControls>
        <FormControl invalid={!isDescValid}>
          <label>Descripción</label>
          <input
            id="Descripcion"
            type="text"
            onChange={inputChangeHandler}
            value={data.Descripcion}
            ref={descRef}
          />
        </FormControl>
        <FormControl invalid={!isMontoValid}>
          <label>Monto</label>
          <input
            id="Monto"
            type="number"
            onChange={inputChangeHandler}
            min="1"
            setp="1"
            value={data.Monto}
          />
        </FormControl>
        <FormControl invalid={!isFechaValid}>
          <label>Fecha</label>
          <input
            id="Fecha"
            type="date"
            onChange={inputChangeHandler}
            min="2019-01-01"
            max="2023-12-31"
            value={data.Fecha === null || data.Fecha === undefined ? "" : data.Fecha}
          />
        </FormControl>
      </FormControls>
      <FormActions>
        <Button type="submit">Agregar</Button>
        {/* <Button_BK type="submit">Agregar</Button_BK> */}
      </FormActions>
      {
        error.error && (
          <Modal 
            title={error.title}
            content={error.message}
            onConfirm={toglleModal}>

          </Modal>
        )
      }
    </form>
  );
}

export default ExpenseForm;
