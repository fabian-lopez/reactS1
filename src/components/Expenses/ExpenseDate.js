import styles from './ExpenseDate.module.css';
import Card from '../UI/Card';

function ExpenseDate(props){
    
    let mes = "";
    let day = "";

    if(props.date !== undefined && props.date !== null ){        
        mes = props.date.toLocaleDateString("es-MX", {month:"long"});
        day = props.date.toLocaleDateString("es-MX", {day:"2-digit"});
    }

    return (
        <Card className={styles['expense-date']}>
            <Card className={styles['expense-date-month']}>
                {mes}
            </Card>
            <Card className={styles['expense-date-year']}>
                {/* {props.date !== undefined && props.date !== null ? new Date(props.date).getFullYear() : ""} */}
                {props.date.getFullYear().toString()}
            </Card>
            <Card className={styles['expense-date-day']}>
                {day}
            </Card>
        </Card>
    )
}

export default ExpenseDate;