import React, {createContext, Component} from 'react'


//  Create Context
const TodoContext = createContext();

class TodoProvider extends Component{
    state = {darkTheme: false, todosList: [], actionStatus: '',selectedId:''}




    onToggleThemeButton= () => {
        this.setState(prevState => ({darkTheme: !prevState.darkTheme}));
    }

    addTodo = (todoInput) => {
        this.setState(prevState => ({
            todosList: [...prevState.todosList, {todoInput}]
        }))
    }

    removeTodo = (id) => {
        this.setState(prevState => ({
            todosList: prevState.todosList.filter(todo => todo.id !== id)
        }))
    }

    setTodos = (todos) => {
        this.setState({todosList: todos})
    }

    render() {
        const {darkTheme, todosList, actionStatus,selectedId} = this.state;
        // console.log(todosList)
        return(
            <TodoContext.Provider
                value={{darkTheme,onToggleThemeButton: this.onToggleThemeButton,
                    todosList,
                    removeTodo: this.removeTodo,
                    setTodos: this.setTodos,
                    actionStatus,selectedId
                }}
                // addTodo: this.addTodo, 
            >
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}


export {TodoContext, TodoProvider};