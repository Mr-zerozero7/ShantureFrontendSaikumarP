import React, { Component, } from 'react'
import {ThreeDots} from 'react-loader-spinner' 
import { BiPlusCircle } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link,  } from 'react-router-dom';
import { 
  HomePageMainContainer,
TodosManagerContainer,
ManagerHeading,
TodoSearchInput,
SearchAndButtonContainer,
SearchButton,
AddNewTodoButton,

LoadingContainer,
FailureViewContainer,
FailureHeading,
FailureNoteTag,
SuccessViewContainer,
} from './stylesComponent'
import TodoCard from '../TodoCards';
import {TodoContext} from '../../context/todoContext';

const apiConstants = {
  initial: "INITIAL",
  inProgress: 'INPOGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE'
}

class Home extends Component {
  state = {searchInput: '', apiStatus: apiConstants.initial, todos:[]}

  static contextType = TodoContext;

  componentDidMount(){
    this.loadTodoData()
  }

  updateTodos = (Data) => {
    const formattedData = Data.map(eachTodo => ({
      title: eachTodo.title,
      completed: eachTodo.completed,
      createdAt: eachTodo.createdAt,
      description: eachTodo.description,
      star: eachTodo.star,
      id: eachTodo._id
    }))
    return formattedData
  }

  loadTodoData= async() => {
    this.setState({apiStatus: apiConstants.inProgress})
    const todosUrl = `https://shanturebackendsaikumarp.onrender.com/get-all-todos`
    const options = {
      method: 'GET'
    }
    try {
      const response = await fetch(todosUrl, options)
      const data = await  response.json()
      if(response.ok){
        // console.log(data.getAllTodos)
        const getData = this.updateTodos(data.getAllTodos)
        this.context.setTodos(getData);
        this.setState({todos: getData,apiStatus: apiConstants.success})
        // todosList: getData,
      }else{
        console.log('data fetching error')
        this.setState({apiStatus: apiConstants.failure})
      }
    } catch (error) {
      console.log(error)
      this.setState({apiStatus: apiConstants.failure})
    }
    
  }

  renderLodingView = () => (
    <LoadingContainer>
      <ThreeDots  color="#ffffff" height="50" width="50" />
    </LoadingContainer>
  )

  renderFailureView= () => {
    <FailureViewContainer>
      <FailureHeading>Data Not Found</FailureHeading>
      <FailureNoteTag>Please try again</FailureNoteTag>
    </FailureViewContainer>
  }

  selectedTodo = () =>{  }

  renderSuccessView= () => {
    const {todosList} = this.context
    return(
      <SuccessViewContainer>
        {todosList.map(eachItem => (
          <TodoCard key={eachItem.id} todoDetails={eachItem} selectedTodo={this.selectedTodo}/>
        ))}
      </SuccessViewContainer>
    )
  }

  renderTodosViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.inProgress:
        return this.renderLodingView()
      case apiConstants.success:
        return this.renderSuccessView()
      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

    handleSearchInput = (event) => {
      const searchInput= event.target.value.toLowerCase();
      // console.log(searchInput)
      const {todosList} = this.context
      const {todos} = this.state

      if(searchInput === ''){
        this.setState({searchInput})
        this.context.setTodos(todos)
      }else{
        const filteredTodos = todosList.filter(eachTodo => 
          eachTodo.title.toLowerCase().includes(searchInput));
          // console.log(filteredTodos)

          this.setState({searchInput})
          this.context.setTodos(filteredTodos)
      }

    }

    onSearchButton = () => {
      // const {searchInput} = this.state
      // const {todosList} = this.context
      // const filterTodos = todosList.filter(eachTodo => eachTodo.title.includes(searchInput))
      // this.context.setTodos(filterTodos)
    }



  render() {
    return(
        <TodoContext.Consumer>
          {
            value=>{
              const {todosList, darkTheme} = value
              
              return(
                <>
                <HomePageMainContainer $dark={darkTheme}>
                    <TodosManagerContainer>
                      <ManagerHeading>Manager</ManagerHeading>
                      <SearchAndButtonContainer>
                        <TodoSearchInput type='search' placeholder='Search here...' onChange={this.handleSearchInput}/>
                        <SearchButton type='button' onClick={this.onSearchButton}><FaSearch /></SearchButton>
                      </SearchAndButtonContainer>
                      <Link to='/add-todo'>
                      <AddNewTodoButton type='button'><BiPlusCircle/></AddNewTodoButton>
                      </Link>
                    </TodosManagerContainer>
                      {this.renderTodosViews(todosList)}
                </HomePageMainContainer >
                </>
              )
            }
          }
        </TodoContext.Consumer>
    )
  }
}

export default Home

