import React from 'react';
import { FormWrapper } from '../style/component.style'

export default function ExpensesForm( { 
  handleDateChange,
  date,
  handleAmountChange,
  amount,
  handleSubmit,
  charge,
  handleChargeChange,

}) {
  return (

    <div style={{
      display:"flex",
      justifyContent:"space-around",
      flexDirection:"column",
      minHeight:"50vh",
      width:"30vw"
  }}>
      <FormWrapper onSubmit={handleSubmit}>
            <label>Date</label>
            <input type="date" value={date} onChange={handleDateChange}/>
            <label>Expense</label>
            <input type="text" placeholder='e.g. rent' value={charge} onChange={handleChargeChange}/>
            <label>Amount</label>
            <input type="number" placeholder='10$' value={amount} onChange={handleAmountChange}/>
            <button>Add</button>
      </FormWrapper>
      <button style={{
        height:"35px",
        border:"none",
        borderRadius:"5px",
        background:"#BF0A30",
        color:"white",
        fontSize:"1.3rem",
        cursor:"pointer"
      }}>
        Clear all expenses
      </button>
    </div>
  )
}
