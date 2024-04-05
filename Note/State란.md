# State란?

# State란

현재 가지고 있는 형태나 모양을 정의한다. 즉 변화할 수 있는 동적인 값을 **State**라 한다.

React컴포넌트는 모두 자신의 **State를 정의 하고 있다.**

**_State는 컴포넌트의 현재 상태를 보관하는 변수이며 State의 값에 따라 렌더링 되는 UI가 결정된다. 이 때 변화된 State의 값을 재랜더링 하는 것을 "Re-Render" 또는 "Re-Rendering" 이라고 한다._**

---

# State 사용법

## State 첫 번째 값

`import { useState } from 'react';`

React에 useState를 Import한 후

`const StateName = useState(초기 값);`으로 구성된다.

```jsx
import './App.css';
import { useState } from 'react';

function App() {
  const state = useState(0);
  console.log(state);
  return <></>;
}

export default App;
```

![alt text](/Source/image-1.png)

그림을 보면 state의 초기 값을 0으로 초기화 해주었기에 0으로 잘 있는 것을 볼 수 있다.
만약 초기 값을 정의하지 않을 경우

![alt text](/Source/image-3.png)

Undefinded로 정의 된다.

## State 두 번째 값

State의 첫 번째 값이 상태 값이면 두 번째 는 무엇일까?

State의 두 번째 값은 바로 **_상태 변화 함수_** 다. 상태 변화 함수란 State의 값을 변경 할 때 사용되는 함수다.

```jsx
import './App.css';
import { useState } from 'react';

function App() {
  const [State명, 함수명] = useState(0);
  console.log(state);
  return <main></main>;
}

export default App;
```

```jsx
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);
  console.log(state);
  return (
    <main>
      <h1>{state}</h1>
    </main>
  );
}

export default App;
```

- 버튼 클릭 시 state가 1씩 증가하는 기능

```jsx
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState(0);
  console.log(state);
  return (
    <main>
      <h1>{state}</h1>
      <button onClick={() => setState(state + 1)}>+</button>
    </main>
  );
}

export default App;
```

![alt text](/Source/ButtonClickEvent.gif)

```jsx
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('Off');
  return (
    <main>
      <div>
        <h1>{light}</h1>
        <button onClick={() => setLight(light == 'On' ? 'Off' : 'On')}>
          {light == 'On' ? 'Off' : 'On'}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </main>
  );
}

export default App;
```

![alt text](/Source/ButtonClickEventOnOff.gif)

### 정리하자면...

React에서 State를 리랜더링 하는 것은 컴포넌트안에 있는 함수(State)를 재호출 후 새롭게 반환된 값을 화면에 다시 랜더링 한다.

---

# 여기서 잠깐!! 렌더링에 대해 잠깐 알아보자

## "렌더링"이란?

> 컴포넌트에서 현재 Props와 State에 기반하여 UI에서 어떻게 보여지고 싶은지 알려달라고 요청하는 과정
>
> > 쉽게 설명하면 "Props와 State라는 재료로 컴포넌트라는 **집안의 방**을 꾸미는 것"

![alt text](/Source/Frame_2.png)

## "리렌더링"이란?

> > 여기서 "리렌더링"은 전체를 바꾸는 것이 아닌 해당 부분만 바꾸는 것이다.
> >
> > > 비유하면 집의 인테리어를 **"전부"** 끄집어 내고 다시 재구성하는 것이 아닌 **"바뀌어야 하는 부분"** 만 골라서 재구성한다.

![alt text](/Source/Frame_1.png)

### 리렌더링이 되는 3가지 조건

```jsx
import './App.css';
import { useState } from 'react';

const Bulb = ({ light }) => {
  console.log(light);
  return (
    <div>
      {light === 'On' ? (
        <h1 style={{ backgroundColor: 'orange' }}>On</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>Off</h1>
      )}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('Off');
  return (
    <main>
      <div>
        <h1>
          <Bulb light={light} />
        </h1>
        <button onClick={() => setLight(light == 'On' ? 'Off' : 'On')}>
          {light == 'On' ? 'Off' : 'On'}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </main>
  );
}

export default App;
```

![alt text](/Source/Re-Rendering.gif)

분명히 + 버튼을 눌렀는 데 왜 "Bulb"이 리렌더링이 될까?

바로 React가 리렌더링 되는 3가지 조건 때문이다.

#### 3가지 조건은...

1. 자신의 State값이 변경되었을 때
2. 자신이 제공 받는 Props가 변경되었을 때
3. 부모 컴포넌트가 리렌더링 됬을 때

이 경우에는 **3**번째에 해당 되는 경우다.

순서는 이렇다.

1. count State가 변경된다.
2. count State가 있는 App함수가 리렌더링이 된다.
3. App 함수가 리렌더링이 되기에 Bulb도 같이 리렌더링이 된다.

- 만약 이렇게 되면 React를 사용하는 이유가 사라진다.

#### 그럼 어떻게 해야 할까?

사실 간단히 해결될 문제다.

- **count State**가 있는 컴포넌트와 **Bulb** 컴포넌트를 따로 분리 해주면 된다.

##### ❌ 잘못된 경우 (서로 다른 역할을 하는 컴포넌트가 분리되지 않은 경우)

```jsx
import './App.css';
import { useState } from 'react';

const Bulb = ({ light }) => {
  console.log(light);
  return (
    <div>
      {light === 'On' ? (
        <h1 style={{ backgroundColor: 'orange' }}>On</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>Off</h1>
      )}
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('Off');
  return (
    <main>
      <div>
        <h1>
          <Bulb light={light} />
        </h1>
        <button onClick={() => setLight(light == 'On' ? 'Off' : 'On')}>
          {light == 'On' ? 'Off' : 'On'}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </main>
  );
}

export default App;
```

![alt text](/Source/Not_Components_separately.gif)

#### ⭕올바른 방식(서로 다른 역할을 하는 컴포넌트가 분리되는 경우)

```jsx
import './App.css';
import { useState } from 'react';

const Bulb = ({ light }) => {
  console.log(light);
  return (
    <div>
      {light === 'On' ? (
        <h1 style={{ backgroundColor: 'orange' }}>On</h1>
      ) : (
        <h1 style={{ backgroundColor: 'gray' }}>Off</h1>
      )}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

function App() {
  const [light, setLight] = useState('Off');
  return (
    <main>
      <div>
        <h1>
          <Bulb light={light} />
        </h1>
        <button onClick={() => setLight(light == 'On' ? 'Off' : 'On')}>
          {light == 'On' ? 'Off' : 'On'}
        </button>
      </div>
      <Counter />
    </main>
  );
}

export default App;
```

![alt text](/Source/Components_separately.gif)

---

# State는 왜 사용해야 할까?

## State❌ 그냥 변수⭕

```jsx
import './App.css';

function App() {
  let count = 0;
  let light = 'Off';
  return (
    <main>
      <div>
        <h1>{light}</h1>
        <button onClick={() => (light == 'On' ? 'Off' : 'On')}>
          {light == 'On' ? 'Off' : 'On'}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => (count += 1)}>+</button>
      </div>
    </main>
  );
}

export default App;
```

![alt text](/Source/NotState.gif)

아무 일도 일어나지 않았다...

## 왜 작동을 안할까?

아주 간단한 사실이다. "리렌더링"이 되지 않았기 때문이다.
그럼 왜 리렌더링은 안됬을까?그건 **State**때문이다. 리엑트에서 리렌더링은 오직 **State**의 값이 변환 됬을 때만 일어나기 때문이다.

![alt text](/Source/Frame_3.png)
위 사진을 보면 리엑트 컴포넌트는 State의 변화를 감지한다. 만약 State값이 변화가 되면 Re-Rendering을 진행하게 된다.

만약 화면의 있는 값을 가변적으로 변환 시키고 싶을 때는 State의 사용은 필수 적이다.
