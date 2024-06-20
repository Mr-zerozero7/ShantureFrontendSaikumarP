import styled from "styled-components";

export const HomePageMainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 90vh;
background-color: ${props=>(props.$dark? '#515151' : '#ffffff')};
`
// color: ${props=>(props.$dark?  '#ffffff' :'#515151')};
export const TodosManagerContainer = styled.div`
display:flex;
flex--direction: row;
justify-content: space-between;
align-items: center;
width: 90%;
background-color:#6ddee5;
border-radius: 10px;
margin-top: 30px;
padding-left: 20px;
padding-right: 20px;
`
export const ManagerHeading = styled.h1`
font-size: 22px;
`
export const TodoSearchInput = styled.input`
padding: 10px;
outline: none;
border-radius: 8px 0px 0px 8px;
border: 1px solid #bfbfbf;
background-color: #ffffff;
`

export const SearchAndButtonContainer = styled.div`
display: flex;
align-items: center;
`
export const SearchButton = styled.button`
background-color: #ffffff;
border-radius: 0px 8px 8px 0px;
border: none;
padding: 5px;
font-size: 20px;
margin-left: 4px;
`
export const AddNewTodoButton = styled.button`
background-color: transparent;
padding: 10px;
font-size: 28px;
border: none;
cursor: pointer;
`
// export const TodosContainer = styled.div`
// display: flex;
// width: 96%;
// height: 100%;
// `

export const LoadingContainer = styled.div``

export const FailureViewContainer = styled.div``
export const FailureHeading = styled.h1``
export const FailureNoteTag = styled.p``
export const SuccessViewContainer = styled.div`
width: 96%;
height: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
border-radius: 20px;
margin-top: 16px;
`