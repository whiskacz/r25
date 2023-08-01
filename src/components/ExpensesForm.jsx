import React from 'react';
import { FormWrapper } from '../style/component.style'

export default function ExpensesForm() {
  return (
    <FormWrapper>
            <label>Date</label>
            <input type="date" />
            <label>Expense</label>
            <input type="text" placeholder='e.g. rent' />
            <label>Amount</label>
            <input type="number" placeholder='10$'/>
            <button>Add</button>
    </FormWrapper>
  )
}
