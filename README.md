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
