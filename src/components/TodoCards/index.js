import React from 'react'
import { FaStar } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import {
    TodoCardContainer,
    TitleAndDescriptionContainer,
TitleText,
DescriptionText,
Span,
TodoControllContainer,
CheckboxAndStarContainer,
Checkbox,
StarButton,
DeleteTodoButton,
} from './stylesComponent'
// StyledLink
// import { TodoContext } from '../../context/todoContext';

const TodoCard = (props) => {
    const {title, description,star,id, completed,} = props.todoDetails
    // const checked = completed ? 'checked' : 'unchecked'
    const starColor = star ? 'gold' : 'white'

    const onClickCompleted = async(id) => {
        const marked = completed ? false : true
        try {
            const updateTodoUrl = `https://shanturebackendsaikumarp.onrender.com/update-todo/${id}`
            const options = {
                method: 'UPDATE',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({ completed: marked})
            }

            const response = await fetch(updateTodoUrl, options)
            if(response.ok){
                const data = await response.json()
                console.log(data)
                console.log('Updated Successfully')
            }else{
                console.log('Update under process, have some response issue')
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleDeleteButton = async() =>{
        // const {id} = this.state
        try {
            const deleteTodoUrl = `https://shanturebackendsaikumarp.onrender.com/delete-todo`
            const options = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({_id:id})
            }
            const response = await fetch(deleteTodoUrl, options)
            if(response.ok){
                console.log("Selected todo Deleted Successfully")
                const updateMsg = await response.json()
                console.log(updateMsg.title)
            }else{
                console.log('Deleted under Process, have some backend response issue')
            }
        } catch (error) {
            console.log(error.message)
        }
    }


    const handleSelectedTodo = async() => {
        // selectedTodo(id)
        try {
            const getTodoUrl = `https://shanturebackendsaikumarp.onrender.com/get-todo/${id}`
            const options = {
                method: 'GET',
            }
            const response = await fetch(getTodoUrl, options)
            if(response.ok){
                const data = await response.json()
                console.log('data fetched success')
                console.log(data)
                // successViewGetTodo(data.getTodo)
            }else{
                console.log('fetching error')
            }
        } catch (error) {
            console.log(error.message)
        }
    }


  return (
        <TodoCardContainer onClick={handleSelectedTodo}>
            
                <TitleAndDescriptionContainer>
                    <TitleText><Span>Title:</Span> {title}</TitleText>
                    <DescriptionText><Span>Note:</Span> {description}</DescriptionText>
                </TitleAndDescriptionContainer>
            
            <TodoControllContainer>
                <CheckboxAndStarContainer>
                    <Checkbox type='checkbox' onChange={onClickCompleted}/>
                    <StarButton type='button'><FaStar color={starColor}/></StarButton>
                </CheckboxAndStarContainer>
                <DeleteTodoButton type='button' onClick={handleDeleteButton}><MdDeleteForever/></DeleteTodoButton>
            </TodoControllContainer>
        </TodoCardContainer>
    
  )
}

export default TodoCard


/* <StyledLink to={`/get-todo/${id}`}></StyledLink> */