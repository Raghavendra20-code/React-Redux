import {createSlice} from "@reduxjs/toolkit";

export var expenseSlice = createSlice({
    name:'expenseSlice1',
    initialState:{
        expenseList:[],
        incomeList:1000
    },
    reducers:{
        addExpenseAction:(currentSlice,actions) =>{
            currentSlice.expenseList.push(actions.payload)
        },
        setIncomeAction:(currentSlice,actions)=>{
            console.log('actions',actions.payload)
            currentSlice.incomeList= actions.payload;
        }
    }
})

export const {addExpenseAction,setIncomeAction} = expenseSlice.actions