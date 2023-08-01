import styled from 'styled-components'

export const FormWrapper = styled.form `

display : flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
background-color: #ddd;
width: 30%;
height: 35%;
border-radius: 20px;
background-color: #483D8B;
color: #fff;


input{
    width:90%;
    margin: 0px 20px 15px;
}
label{
    margin: 0px 20px 5px;
}

button {
    margin-top: 30px;
    width: 80%;
    align-self: center;
    height: 10%;
    background-color: #ffd800;
    border: none;
    cursor: pointer;
    color: #000;
    font-weight: 700;
    font-size: 1.5rem;
    transition: .2s ;
}
button:hover {
    background-color: #dfff00
}

`

export const BudgetWrapper = styled.div `

display : flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
background-color: #ddd;
width: 30%;
height: 20%;
border-radius: 20px;
background-color: #483D8B;
color: #fff;


.budgetUpper {
    display:flex;
    flex-direction: row;
}

input{
    margin-left: 10px;

}

div {
    margin: 20px 20px 0px 10px;
}
input {
    background-color: #483D8B;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    font-size: 1.1rem;
    width:105px;
}

`

export const ItemWrapper = styled.div `

display: flex;
flex-direction: row;
width:30vw;
height: 50px;
background-color: #eee;
border-radius: 5px;
box-shadow: 0px 0px 13px 0px rgba(147, 147, 179, 1);

`