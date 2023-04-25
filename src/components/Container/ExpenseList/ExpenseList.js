import {List} from "../../List/List";
import {useSelector} from "react-redux";

//useSelector used to get the data from redux store
const ExpenseList = () =>{
    const items = useSelector(store => store.EXPENSE.expenseList)
    return(<List items={items}/>)
}

export default ExpenseList;