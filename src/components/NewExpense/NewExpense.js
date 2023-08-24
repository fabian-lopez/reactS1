import './NewExpense.css';
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
    const saveExpense = (expense) => {
        const newExpense = {
            ...expense,
            id: (Math.random() * 100).toString()
        }
        props.onAddExpense(newExpense);

        console.log("que se esta guardando? ", newExpense)
    }

    return (
        <Card className='new-expense'>
            <ExpenseForm onSaveExpense = {saveExpense}/>
        </Card>
    )   
}

export default NewExpense;