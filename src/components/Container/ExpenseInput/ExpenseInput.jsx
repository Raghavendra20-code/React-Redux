import s from "./style.module.css";
import {addExpenseAction} from "store/Expense/Expense-slice";
import {useDispatch} from "react-redux";
import {useState} from "react";

export function ExpenseInput(props) {
  const dispatch = useDispatch();
  const [expenseName,setExpenseName] = useState();
  const [price,setPrice] = useState();
  function submit(e) {
    e.preventDefault(); //page reloads after button click so we use this so that it will remain on default page
    dispatch(addExpenseAction({name:expenseName,price:price}));
    setPrice('');
    setExpenseName('')

  }

  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
            value={expenseName}
            onChange={(e)=>setExpenseName(e.target.value)}
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}


//Usually we add int container folder the files which uses redux store.