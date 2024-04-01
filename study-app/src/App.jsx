import './App.css'
import Main from './components/Main'
import Button from './components/Button'

function App() {
  return (
    <>
    <Main/>
    <Button text={"메일"} color={"red"}/> 
    <Button text={"카페"} /> 
    <Button text={"블로그"}>
      <div>자식요소</div>
    </Button>
    </>
  )
}

export default App
