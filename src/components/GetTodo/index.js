import React from 'react'
import { TodoContext } from '../../context/todoContext'
import { FaStar } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import {
    GetTodoContainer,
} from './stylesComponent'
import { DescriptionText, TitleText,
    TodoCardContainer,
TitleAndDescriptionContainer,
Span,
TodoControllContainer,
CheckboxAndStarContainer,
Checkbox,
StarButton,
DeleteTodoButton,
 } from '../TodoCards/stylesComponent'

const GetTodo = (props) => {
    const {id, title,description,completed,star,selectedTodo} = props
    console.log(id, completed,selectedTodo)
    const starColor = star ? 'gold' : 'white'
  return (
    <TodoContext.Consumer>
        {
            value=>{
                return(
                    <GetTodoContainer>
                        <TodoCardContainer >
                            <TitleAndDescriptionContainer>
                                <TitleText><Span>Title:</Span> {title}</TitleText>
                                <DescriptionText><Span>Note:</Span> {description}</DescriptionText>
                            </TitleAndDescriptionContainer>
                            <TodoControllContainer>
                                <CheckboxAndStarContainer>
                                    <Checkbox type='checkbox' />
                                    <StarButton type='button'><FaStar color={starColor}/></StarButton>
                                </CheckboxAndStarContainer>
                                <DeleteTodoButton type='button' ><MdDeleteForever/></DeleteTodoButton>
                            </TodoControllContainer>
                        </TodoCardContainer>
                    </GetTodoContainer>
                )
            }
        }
    </TodoContext.Consumer>
    
  )
}

export default GetTodo
