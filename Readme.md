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
