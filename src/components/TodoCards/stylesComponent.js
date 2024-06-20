import styled from 'styled-components'
import { Link } from 'react-router-dom'

// background-color: rgba( 255, 255, 255, 0.2 );

export const TodoCardContainer = styled.div`
background-image: linear-gradient(to bottom right, #0081A7, #00AFB9);
box-shadow: 4px 4px 3px 0px #0081A7;
padding: 10px;
border-radius: 10px;
margin: 10px;
width: 300px;
min-height: 200px;
max-height: 270px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const TitleAndDescriptionContainer = styled.div`

`
export const TitleText = styled.p`
background-color: #50f1be;
padding: 8px;
border-radius: 10px;
text-overflow: hidden;
`
export const DescriptionText = styled.p`
text-overflow: hidden;
background-color: #ABEDD8;
padding: 8px;
border-radius: 10px;
height: 50%;
`

export const TodoControllContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
export const CheckboxAndStarContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 30%;
`
export const Span = styled.span`
font-weight: bold;
`
export const Checkbox = styled.input`
width:20px;
height: 20px;
outline: none;
cursor: pointer;
`
export const StarButton = styled.button`
border: none;
background-color: transparent;
font-size: 24px;
cursor: pointer;
`
export const DeleteTodoButton = styled.button`
border: none;
outline: none;
cursor: pointer;
padding: 5px;
width: 40px;
font-size: 22px;
background-color: transparent;
`
export const StyledLink = styled(Link)`
text-decoration: none;
color: black;
`