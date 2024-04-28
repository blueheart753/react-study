import { useState } from 'react'

const useInput = () => {
  const [input, setInput] = useState('')
  const onChange = e => {
    setInput(e.target.value)
  }
  return [input, onChange]
}
const HookExam = () => {
  const [input, onChange] = useInput()
  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
    </div>
  )
}

export default HookExam
