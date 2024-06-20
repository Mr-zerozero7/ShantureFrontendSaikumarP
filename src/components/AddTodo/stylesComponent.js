import styled from "styled-components";

export const AddTodoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 90vh;
`
export const TodoForm = styled.form`
background-color: #9582f5;
width: 400px;
height: 400px;
border-radius: 10px;
display: flex;
flex-direction: column;
padding: 20px;
`
export const TitleInput = styled.input`
display: block;
padding: 10px;
border-radius: 10px;
outline: none;
border: none;
margin: 10px;
font-weight: 600;
`
export const DescriptionInput = styled.textarea`
display: block;
padding: 10px;
border-radius: 10px;
outline: none;
border: none;
margin: 10px;
height: 200px;
`
export const StarButton = styled.button`
width:60px;
padding: 5px;
border: none;
outline: none;
cursor: pointer;
border-radius: 10px;
font-size: 20px;
background-color: transparent;
margin: 10px;
`
export const AddButton = styled.button`
padding: 10px;
border-radius: 10px;
outline: none;
border: none;
margin: 10px;
font-weight: 600;
background-color: #543fbf;
color: #ffffff;
`

export const UpdateMsgNote = styled.p``
export const ErrorMsgNote = styled.p``