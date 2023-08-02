import React from 'react';
import { BudgetWrapper  } from '../style/component.style';


export default function ExpensesBudget( {budget, handleBudgetChange, budgetInput}) {
  return (
      <BudgetWrapper>
        <div className="budgetUpper">
          <label>Budget</label>
          <input type="number" onChange={handleBudgetChange} value={budget} ref={budgetInput}/>
        </div>
        <div>Total expenses: $ 1234</div>
        <div>Economies</div>
      </BudgetWrapper>
  )
}
