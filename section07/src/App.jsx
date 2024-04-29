import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  // const isMount = useRef(false);
  const [isMount, setIsMount] = useState(false);

  // Life Cycle의 순서
  // 1. Mount : 탄생 (컴포넌트가 처음 랜더링된 상태)
  useEffect(() => {
    console.log('mount');
  }, []);
  // 2. Update : 변화, 리랜더링 (컴포넌트가 변화하거나 리랜더링된 상태)
  // useEffect(() => {
  //   if (!isMount.current) {
  //     isMount.current = true;
  //     return;
  //   }
  //   console.log('update');
  // });

  const stateTest = () => {
    if (!isMount) {
      setIsMount(true);
      return;
    }
    console.log('update');
  };

  stateTest();

  // 3. Unmount : 죽음 (컴포넌트가 완전히 닫힌 상태)

  // 의존성 배열
  // dependency array
  // deps
  const onClickButton = value => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 == 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
