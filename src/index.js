import React from "react"
import ReactDOM from 'react-dom/client';
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import ExpensesBudget from "./components/ExpensesBudget";
import './styled/index.css'

function R25App () {
    return (

        <div style={{
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            gap:"50px",
            width:"100vw",
            height:"100vh",
            background:"lightblue",
            justifyContent:"space-between",
            
        }}>
            <ExpensesForm /> 
            <ExpensesBudget />
            <ExpensesList />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R25App />)