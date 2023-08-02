import React from 'react';
import { ItemWrapper } from '../style/component.style';
import { HiPencil, HiTrash } from "react-icons/hi";

export default function ExpensesItem() {
  return (
    <ItemWrapper>
        <div className="leftContainer">
          <div>Rent</div>
          <div>2023-08-02</div>
        </div>
        <div>$599</div>
        <div>
          <HiPencil style={{
            width:"35px",
            height:"30px",
            background:"black",
            color:"white",
            borderRadius:"5px",
            marginLeft:"7px"
          }} />
          <HiTrash style={{
            width:"35px",
            height:"30px",
            background:"red",
            color:"white",
            borderRadius:"5px",
            marginLeft:"7px"
          }}
           />
        </div>
     
    </ItemWrapper>
  )
}
