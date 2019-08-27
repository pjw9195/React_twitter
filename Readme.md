# React + Node 를 이용한 유사 twitter 구현

```
npm init
npm i react react-dom next
npm i -D nodemon webpack
npm i -D eslint //세미콜론 전용
npm i eslint-plugin-import eslint-plugin-reack-hooks eslint-plugin-react
npm i -g next
npm i antd
```

```
npm run dev
```

### 서버사이드 렌더링

![](https://subicura.com/assets/article_images/2016-06-20-server-side-rendering-with-react/client-side-vs-server-side.png)

서버 사이드 렌더링의 장점

- 유저가 처음으로 컨텐츠를 보는 속도가 빨라짐
- 서버따로 클라이언트따로 작성하던 코드가 하나로 합쳐짐
- SEO 적용도 OK
- 웹앱의 단점 대부분 없어짐!

### 코드 스플리팅

우리가 자바스크립트로 애플리케이션을 개발하게 되면, 기본적으로는 하나의 파일에 모든 로직들이 들어가게 됩니다. 그럼, 프로젝트의 규모가 커질수록 자바스크립트 파일 용량도 커지겠죠? 용량이 커지면, 인터넷이 느린 환경에서는 페이지 로딩속도도 느려질 것입니다.

코드 스플리팅을 하게 되면, 지금 당장 필요한 코드가 아니라면 따로 분리시켜서, 나중에 필요할때 불러와서 사용 할 수 있습니다. 이를 통하여, 페이지의 로딩 속도를 개선 할 수 있죠.

### Next 장점

- 라우터체계 url이 상대경로처럼 들어갈 수 있다.

### Layout에서 사용하는 children

![image](https://user-images.githubusercontent.com/26537104/63342832-71dfbb80-c387-11e9-9dfb-f6c6093e8f4a.png)

![image](https://user-images.githubusercontent.com/26537104/63342867-8e7bf380-c387-11e9-91c7-159db74c6e75.png)

### input required 와 style

![image](https://user-images.githubusercontent.com/26537104/63417101-9b5a1f00-c43b-11e9-92bf-ef60b510e2f1.png)

style은 {{}}형식이며, required 를 붙여주면 조건이 붙는다.

### Custom hook

![image](https://user-images.githubusercontent.com/26537104/63741597-b364ef00-c8d0-11e9-8246-0cc5fa384086.png)

### React hook을 사용하기 위한 useState

useState는 무엇을 반환할까요?  
**state 변수, 해당 변수를 갱신할 수 있는 함수 이 두 가지 쌍을 반환합니다.**  
이것이 바로 const [count, setCount] = useState()라고 쓰는 이유입니다. 클래스 컴포넌트의 this.state.count와 this.setState와 유사합니다. 만약 이러한 문법에 익숙하지 않다면 현재 페이지의 끝에서 살펴볼게요.

### useCallback

useCallback 은 useMemo와 상당히 비슷한 함수입니다. 주로 렌더링 성능을 최적화해야 하는 상황에서 사용하는데요, 이 Hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성 할 수 있습니다.
우리가 방금 구현한 Average 컴포넌트를 보면, onChange 와 onInsert 라는 함수를 선언해주었습니다. 이렇게 선언을 하게 되면 컴포넌트가 리렌더링 될 때마다 이 함수들이 새로 생성됩니다. 대부분의 경우에는 이러한 방식이 문제가 되지 않지만, 컴포넌트의 렌더링이 자주 발생하거나, 렌더링 해야 할 컴포넌트의 개수가 많아진다면 이 부분을 최적화 해주시는 것이 좋습니다.

![image](https://user-images.githubusercontent.com/26537104/63743080-13aa5f80-c8d6-11e9-82fb-45b487daad92.png)
