import { useState, useRef } from 'react'
import './Editor.css'

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('')
  const contentRef = useRef()

  const onChangeContent = e => {
    setContent(e.target.value)
  }
  const onSubmit = () => {
    if (content == '') {
      contentRef.current.focus()
      return
    }
    onCreate(content)
    setContent('')
  }

  const onKeyDown = e => {
    if (e.keyCode == 13) {
      onSubmit()
    }
  }
  return (
    <div className="Editor">
      <input
        type="text"
        ref={contentRef}
        placeholder="새로운 Todo..."
        onChange={onChangeContent}
        value={content}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor
