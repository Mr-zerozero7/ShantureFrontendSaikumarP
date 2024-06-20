import React, { Component } from 'react'
import { TodoContext } from '../../context/todoContext'
import { FaStar } from "react-icons/fa6";
import {
  AddTodoContainer,
TodoForm,
TitleInput,
DescriptionInput,
StarButton,
AddButton,
UpdateMsgNote,
ErrorMsgNote,
} from './stylesComponent'

class AddTodo extends Component {
  state = {titleInput:'', descriptionInput:'', updateMsg: '', errorMsg:''}

  static contextType = TodoContext;


  handleTitleInput = (event) => {
    this.setState({titleInput: event.target.value})
  }

  handleDescriptionInput = (event) => {
    this.setState({descriptionInput: event.target.value})
  }

  onFormSubmit=async (event) =>{
    event.preventDefault()
    const {titleInput, descriptionInput,} = this.state
    
    // this.setState({todoObject: todoInputObject})
    // console.log(titleInput, descriptionInput)
    try {
      const postTodoUrl = 'https://shanturebackendsaikumarp.onrender.com/add-todo'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: titleInput, description: descriptionInput})
      }
      const response = await fetch(postTodoUrl, options)
      if(response.ok){
        const fromBackendRes = await response.json()
        console.log(fromBackendRes)
        this.setState({updateMsg: "Todo Saved Successfully from Frontend"})
        // this.context.addTodo()
        // this.props.history.push('/')
      }else{
        this.setState({errorMsg: 'Todo Saved but have some response issue'})
      }

      this.setState({titleInput:'', descriptionInput:''})
    } catch (error) {
      console.log(error.message)
    }
  }


  // refreshAddedTodos = (addTodo) => {
  //   const {titleInput, descriptionInput,} = this.state
  //   const todoInputObject = {titleInput, descriptionInput}
  //   addTodo(todoInputObject)
  //   onClick={this.refreshAddedTodos(addTodo)}
  // }

  render(){
    const {updateMsg, errorMsg} = this.state
    return (
      <TodoContext.Consumer>
        {
          value=>{
            // const {addTodo} = value
            return(
              <AddTodoContainer>
                {updateMsg.length > 0 ? (<UpdateMsgNote>{updateMsg}</UpdateMsgNote>) : null}
                {errorMsg.length > 0 ? (<ErrorMsgNote>{errorMsg}</ErrorMsgNote>) : null}
                <TodoForm onSubmit={this.onFormSubmit}>
                  <TitleInput type='text' placeholder='Title...' onChange={this.handleTitleInput}/>
                  <DescriptionInput  placeholder='Description...' onChange={this.handleDescriptionInput}/>
                  <StarButton><FaStar/></StarButton>
                  <AddButton type='submit' >Add</AddButton>
                </TodoForm>
              </AddTodoContainer>
            )
          }
        }
      </TodoContext.Consumer>
    )
  }
}

export default AddTodo
