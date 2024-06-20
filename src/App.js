import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Component, } from 'react';
import { TodoProvider } from './context/todoContext';
import Header from './components/Header';
import AddTodo from './components/AddTodo'
import GetTodo from './components/GetTodo';


class App extends Component {

  render(){
    return (
    <TodoProvider>
      <Header/>
      <Routes>
        <Route excat path='/get-all-todos' element={<Home/>}/>
        <Route exact path='/add-todo' element={<AddTodo/>} />
        <Route exact path='/get-todo/:id' element={<GetTodo/>}/>
      </Routes>
    </TodoProvider>
  )
}
}

export default App;
