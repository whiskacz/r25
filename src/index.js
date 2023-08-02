import React, { useState, useRef, useEffect } from "react"
import ReactDOM from 'react-dom/client';
import ExpensesForm from "./components/ExpensesForm";
import ExpensesList from "./components/ExpensesList";
import ExpensesBudget from "./components/ExpensesBudget";
import './style/index.css';
import { v4 as uuidV4 } from 'uuid';

const initialExpense = localStorage.getItem("expenses")
? JSON.parse(localStorage.getItem("expenses"))
: [];

function R25App () {

    //Expenses
    const [expenses,setExpense] = useState(initialExpense)

    //Charge
    const [charge,setCharge] = useState("")
    const handleChargeChange = (e) => {
        setCharge(e.target.value)
    }

    //Date
    const [date, setDate] = useState("")
    
    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    //Amount
    const [amount, setAmount] = useState("")

    const handleAmountChange = (e) => {
        setAmount(e.target.value)    
    }

    //Budget
    const [budget, setBudget] = useState("")

    const handleBudgetChange = (e) => {
        setBudget(budgetInput.current.value)
    }

    //Id
    const [id, setId] = useState(0);
    
     // Edit?
    const [edit, setEdit] = useState(false);

    //Submit    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (date !== "" && charge !== "" && amount > 0) {
            if (edit) {
              let tempExpense = expenses.map((item) => {
                return item.id === id ? { ...item, date, charge, amount } : item;
              });
              setExpense(tempExpense);
              //setEdit(false);
              // todo: Alert
             
            } else {
              const singleExpense = { id: uuidV4(), date, charge, amount };
              setExpense([...expenses, singleExpense]);
              // todo: Alert
             
            }
            setCharge("");
            setAmount("");
          } else {
            
          }
    }

    let budgetInput = useRef(null)

    useEffect(()=> {
       budgetInput.current.value !== "" && budgetInput.current.focus()
        localStorage.setItem("expenses", JSON.stringify(expenses))
    },[expenses])

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
            <ExpensesForm 
            charge={charge}
            handleChargeChange={handleChargeChange}
            date={date}
            handleDateChange={handleDateChange}
            amount={amount}
            handleAmountChange={handleAmountChange}
            budget={budget}
            handleBudgetChange={handleBudgetChange}
            handleSubmit={handleSubmit}

            /> 
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                flexDirection:"column",
                minHeight:"35vh",
                width:"30vw"
            }}>
                <ExpensesBudget 
                budget={budget}
                handleBudgetChange={handleBudgetChange}
                budgetInput={budgetInput}
                />
                <ExpensesList />
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<R25App />)