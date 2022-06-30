## 컴포넌트

### 함수형 컴포넌트, 클래스형 컴포넌트

propTyeps 함수내부와 compoenet.propType으로 할당
클래스형에서 props 사용하기비 -> 비구조화 할당

**state**
생성자에서 선언, state변수로 선언
`생성자에서 생성자 함수 super(props) 의 라이프 사이클`
`js에서의 동기 비동기 다시보기`
**setState()**
setState()는 비동기적으로 업데이트됨.
동기적으로 하고싶으면 this.setState(prevState, props) => {}
`prevState가 들어오는 과정 물어보기`
**useState()**
함수형 Compoenet 에서 state 사용하는 법 (Hooks 이용)
비구조화 할당으로 변수, 함수 배치
const [xxx, setXxx] = useState('initial value');
**state사용시 유의사항**
state 값을 바꿀땐 setter 함수를 사용해야 함
잘못된 예들

```js
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;

const [object, setObject] = useState({ a: 1, b: 1 });
object.b = 2;
```

이럴땐 배열이나 객체 사본을 만들고 사본에 업데이트해서 setter함수를 이용해서 덮어씌워야함

정상적 예시

```js
const object = { a: 1, b: 2, c: 3 };
const nextObejct = { ...object, b: 2 }; //사본을 만들어서 b값만 덮어쓰기

const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: false },
];
let nextArray = array.concat({ id: 4 }); // 새 항목 추가
nextArray.filter((item) => item.id !== 2); // id가 2인 항목 제거
nextArray.map((item) => (item.id === 1 ? { ...item, value: false } : item)); // id가 1인 항목의 value만 false로 변경
```

## 이벤트 핸들링

### 리엑트의 이벤트 시스템

함수로 만들어서 onClick같은 이벤트에 넣어줌, DOM요소에만 넣어줄 수 있음.(Component엔 안됨 ex. <Compnent onClick={xxx} />)

### 예제로 이벤트 핸들링 익히기

`e 는 SyntheticEvent 검색해봐야함 콜백함수의 인자로 들어감`

```js
onChange={(e) => {
            console.log(e);
          }}
```

object에서 key값을 []로 감싸면 변수값이 할당됨.

```js
this.setState({
  [e.target.name]: e.target.value,
});
```

### Ref달기

```js
<xxx
  ref={(ref) => {
    this.refname = ref;
  }}
/>
```

```js
refname = React.createRef();

handleFocus = (e) => {
  this.refname.current.focus();
};
<xxx ref={this.refname} />;
```

## 컴포넌트 반복

arr.map(callback)으로 하는게 가장 기본적

반복요소에 key prop이 필요함. 리엑트에서는 배열을 렌더링했을때 원소에 변동을 알아내기 위해 key값을 사용하기때문.

웬만하면 key값을 index값으로 사용하지 않는게 좋음. 배열이 리렌더링 될때 효율적으로 하지 못함.

## Hooks

### useState

State생성

### useEffect

component가 mount되거나 update되고 나서 실행.
마운트시에만 실행하고 싶을 때는 useEffect(xxx, [])
처럼 defendency List(이 값들이 변할때만 실행)에 빈 배열 넣어주면 됨.

conponent가 언마운트나 업데이트 하기 직전에 실행하고 싶을 때는
useEffect callback함수의 return값으로 정의

### useReducer

dispatch로 action값을 주면 callback으로 처리해서 렌더링

```js
callback(state, action) => {...};
```

```js
const [state, dispatch] = useReducer(callback, state 초기값);
```

### useMemo

onChange에 의해서 새로 렌더링되는 DOM에 함수가 포함되어있으면 렌더링될때마다 필요없이 실행됨.
그래서 렌더링 과정에서 값이 변할때만 렌더링하게 하기 위해 useMemo 사용

두번쨰 parameter는 dependency list

```js
const avg = useMemo(() => getAverage(list), [list]);
```
