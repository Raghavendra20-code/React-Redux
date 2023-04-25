import s from "./style.module.css";
import {useSelector} from "react-redux";

export function ExpenseTotal(props) {
    const expenseList = useSelector(store=>store.EXPENSE.expenseList);
    const totalPrice = useSelector(store=>store.EXPENSE.incomeList)
    const sum = (prev,current)=>{
        return prev+Number.parseFloat(current.price);
    }
    const totalAmt = expenseList.reduce(sum,0);
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalAmt} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{totalPrice-totalAmt} $</div>
      </div>
    </div>
  );
}
