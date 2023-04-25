import s from "./style.module.css";
import {setIncomeAction} from "store/Expense/Expense-slice";
import {useDispatch, useSelector} from "react-redux";

export function IncomeInput(props) {
    const income1 = useSelector(store =>store.EXPENSE.incomeList)
    const dispatch = useDispatch()
    const handler = (e) =>{
        dispatch(setIncomeAction(Number.parseFloat(e.target.value)));
    }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
            defaultValue={income1}
            type="number" className="form-control" placeholder="Ex: 3000" onChange={handler} />
      </div>
    </div>
  );
}
