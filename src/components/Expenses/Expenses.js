import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

function Expenses(props){

  const [year, setYear] = useState("2023");

  const onYearChangedHandler = (selectedYear) => {
    setYear(selectedYear);
  }

  //console.log("esto llega desde App.js; se intenta iterar", props.items);
  const filteredYaer =  props.items.filter((expense) => {
    
    let year1 = new Date(expense.Fecha);
    //console.log("se supone que funciona", String(year1.getFullYear()));
    return String(year1.getFullYear()) === year;
    
  });
  
   
    return (
        <Card className='expenses'>

          <ExpensesFilter selectedYear={year} onYearChange={onYearChangedHandler} />

          {/* {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              title={expense.title}
              amount={expense.amount}
            />
          ))} */}

            {filteredYaer.length === 0 
              ? (<h3>No se encontraron gastos</h3>) 
              : (
                filteredYaer.map((expense) => (
                  <ExpenseItem
                      key={expense.id}
                      date={expense.Fecha}
                      title={expense.Descripcion}
                      amount={expense.Monto}
                  />
                ))
            )}

        </Card>
    );
}

export default Expenses;