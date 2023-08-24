import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const changeHandler = (e) => {
    props.onYearChange(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filtrar por año</label>
        <select selected={props.selectedYear} onChange={changeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
