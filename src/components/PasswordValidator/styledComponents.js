// Style your elements here
import style from 'styled-components'

export const MainContainer = style.div`
background-color:black;
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;`

export const Card = style.div`
border-radius:9px;
background-color:#475569;
color:white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:50px;`

export const Heading = style.h1`
font-family:'Roboto';
`
export const Para = style.p`
font-family:'Roboto';
`
export const PasswordInput = style.input`
background-color:white;
color:black;
height:40px;
width:300px;`

export const ErrorMsg = style.p`
color:red;
font-size:10px;`
