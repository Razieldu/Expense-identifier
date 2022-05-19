import React ,{useState}from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense =(props)=>{

const[isEditing,setIsEditing]=useState(false)


 const SaveExpenseDataHandler=(enteredExpenseData)=>{
   const expenseData={
    ...enteredExpenseData,
    id:Math.random().toString()

   };
  props.onAddExpense(expenseData)
  setIsEditing(false)
 };

const StartEditingHandler=()=>{
  setIsEditing(true) 
}

const StopEditingHandler=()=>{
   setIsEditing(false)
}

return(

<div className="new-expense">
{!isEditing && <button onClick={StartEditingHandler}>Add New Expense</button>}
{isEditing &&<ExpenseForm  onCancel={StopEditingHandler}    onSaveExpenseData={SaveExpenseDataHandler}/>}
</div>

)
}


export default NewExpense