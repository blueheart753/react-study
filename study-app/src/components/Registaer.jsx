import { useState, useRef } from 'react';
const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    contry: '',
    bio: '',
  });

  const refObj = useRef();
  console.log(refObj);

  console.log(input);

  const onChanged = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <div>
        <input
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
    </div>
  );
};

export default Register;
