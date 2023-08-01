import React from "react"
import ReactDOM from 'react-dom/client';
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import ExpensesBudget from "./components/ExpensesBudget";
import './style/index.css'

function R25App () {
    return (

        <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            width:"100vw",
            height:"100vh",
            background:"lightblue",
            justifyContent:"space-around",
            alignItems:'center'
            
        }}>
            <ExpensesForm /> 
            <ExpensesBudget />
            <ExpensesList />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R25App />)