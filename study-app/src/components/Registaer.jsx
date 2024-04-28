import { useState, useRef } from 'react'
const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    contry: '',
    bio: '',
  })

  const countRef = useRef(0)
  const inputRef = useRef()

  const onChanged = e => {
    countRef.current++
    console.log(countRef.current)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = () => {
    if (input.name === '') {
      inputRef.current.focus()
    }
  }
  return (
    <div>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="이름"
          onChange={onChanged}
          name="name"
        />
      </div>
      <div>
        <input
          type="date"
          onChange={onChanged}
          placeholder="생년월일"
          name="birth"
        />
      </div>

      <div>
        <select onChange={onChanged} name="contry">
          <option value=""></option>
          <option value="Korea">한국</option>
          <option value="USA">미국</option>
          <option value="UK">영국</option>
        </select>
      </div>

      <div>
        <textarea
          onChange={onChanged}
          placeholder="자기소개를 작성해주세요."
          name="bio"
        ></textarea>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  )
}

export default Register
