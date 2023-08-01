import React from 'react';
import { BudgetWrapper  } from '../style/component.style';


export default function ExpensesBudget() {
  return (
    <>
      <BudgetWrapper>
        <div className="budgetUpper">
          <label>Budget</label>
          <input type="number" />
        </div>
        <div>Total expenses: $ 1234</div>
        <div>Economies</div>
      </BudgetWrapper>
    </>
  )
}
