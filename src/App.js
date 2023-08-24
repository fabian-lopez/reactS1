import Expenses from "./components/Expenses/Expenses";
import Contador from "./components/Actividades/Contador";
import Ej2WayBinding from "./components/Actividades/Ej2WayBinding";
import NewExpense from "./components/NewExpense/NewExpense";
import React ,{ useState } from "react";
import Button from "./components/UI/Button";


function App() {

  const [expenses, setExpenses] = useState( [
    {
      id: Math.random(),
      Fecha: new Date(2023,4,23),
      Descripcion: "Libros",
      Monto: 250,
    },
    {
      id: Math.random(),
      Fecha: new Date(2022,3,21),
      Descripcion: "Libro JS",
      Monto: 600,
    },
    {
      id: Math.random(),
      Fecha: new Date(2021,2,19),
      Descripcion: "Libro COSMOS",
      Monto: 750,
    },
    {
      id: Math.random(),
      Fecha: new Date(2021,2,1),
      Descripcion: "Cafe",
      Monto: 50,
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState])

  }

  const [modalEstado, setModalEstado] = useState(false);
  const handleShow = () => setModalEstado(true);
  const handleClose= () => setModalEstado(false);

  const modalClickHandler = () => {
    setModalEstado(!modalEstado);
    console.log("desde app.js", modalEstado)
  }

  return (
    <React.Fragment>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}/>
      {/* {modalEstado && <Modal title="MODAL DESDE APP.js pero usando PORTAL" onClose={handleClose}></Modal>}*/}
      <Button type="submit" accion="Abrir Modal" onClick={modalClickHandler}>MODAL</Button>
      {/* <Contador></Contador>
      <Ej2WayBinding/> */}
    </React.Fragment>
  );
}

export default App;
