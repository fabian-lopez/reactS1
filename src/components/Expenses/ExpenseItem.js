import './ExpenseItem.css'; // extension por defecto es js asi que hay que colocar explicitamente nuestro archivo
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    return (
      <Card className='expense-item'>
        <ExpenseDate
            date = {props.date}
        />
        <Card className='expense-item-description'>
          <h2>{props.title}</h2>
          <Card className='expense-item-price'>
            ${props.amount}
          </Card>
        </Card>
      </Card>
    )
  }
  
  export default ExpenseItem;