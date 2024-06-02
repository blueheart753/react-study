import './App.css'
import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import Exam from './components/exam'

const moukData = [
  {
    id: 0,
    isDone: false,
    content: '리액트 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '노래 연습하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '취업 준비하기',
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(moukData)
  const idRef = useRef(3)

  const onCreate = content => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }

    setTodos([newTodo, ...todos])
  }

  const onUpdate = targetId => {
    setTodos(
      todos.map(todo => {
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
      })
    )
  }

  const onDelete = targetId => {
    setTodos(todos.filter(todo => todo.id !== targetId))
  }

  return (
    <div className="App">
      {/* <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}
      <Exam />
    </div>
  )
}

export default App
