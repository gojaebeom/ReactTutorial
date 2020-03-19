# React Study
#### *리액트 api 문서를 참고하여 연습. src/components 경로에 연습파일들을 올려놓았지만 찾아보기 귀찮을 나를 위해 링크를 걸어두자.*
<br/>

#### _file download_
-  _git clone https://github.com/gojaebeom/react-study.git_
#### _install and start_
-  _1. 최상위 경로에서 npm install_
-  _2. npm run start_
<br/>
<br/>


### 연습하는 방법
```javascript
import React from 'react';
import Exam from './components/01.props받아보기' 
//이와같은 방식으로 자신이 만든 컴포넌트 경로를 import 해주기만 하면 된다. 
//최대한 App 함수는 건드리지 않고 연습할 컴포넌트내부에서 코딩을 하면 
//다른 파일을 불러와도 별다른 설정없이 실행이 가능함. 

function App() {
	return (
		<div className="App">
			<Exam/>
		</div>
	);
}

export default App;
```
<br/>

### Categories
-  _[props 받아보기](https://github.com/gojaebeom/react-study/blob/master/src/components/01.props%EB%B0%9B%EC%95%84%EB%B3%B4%EA%B8%B0.js)_
-  _[조건부 랜더링](https://github.com/gojaebeom/react-study/blob/master/src/components/02.%EC%A1%B0%EA%B1%B4%EB%B6%80%EB%9E%9C%EB%8D%94%EB%A7%81.js)_
-  _[useState 사용하기](https://github.com/gojaebeom/react-study/blob/master/src/components/03.useState%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0.js)_
-  _[input 상태 관리하기](https://github.com/gojaebeom/react-study/blob/master/src/components/04.input%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0.js)_
-  _[다수의 input 상태 관리하기](https://github.com/gojaebeom/react-study/blob/master/src/components/05.%EB%8B%A4%EC%88%98%EC%9D%98input%EC%83%81%ED%83%9C%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0.js)_
-  _[useRef를 활용한 특정 돔 선택하기](https://github.com/gojaebeom/react-study/blob/master/src/components/06.useFef-%ED%8A%B9%EC%A0%95Dom%EC%84%A0%ED%83%9D%ED%95%98%EA%B8%B0.js)_
-  _[배열 랜더링 하기](https://github.com/gojaebeom/react-study/blob/master/src/components/07.%EB%B0%B0%EC%97%B4%EB%9E%9C%EB%8D%94%EB%A7%81%ED%95%98%EA%B8%B0.js)_
-  _[useRef를 활용한 컴포넌트 안의 변수 만들기](https://github.com/gojaebeom/react-study/blob/master/src/components/08.useRef-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%95%88%EC%9D%98%EB%B3%80%EC%88%98%EB%A7%8C%EB%93%A4%EA%B8%B0.js)_
-  _[useEffect 사용하기](https://github.com/gojaebeom/react-study/blob/master/src/components/09.useEffect%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0.js)_
-  _[useReducer 사용하기](https://github.com/gojaebeom/react-study/blob/master/src/components/10.useReducer%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0.js)_
-  _[contextAPI 사용하기](https://github.com/gojaebeom/react-study/blob/master/src/components/11.contextAPI%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0.js)_
-  _[Context 와 useReducer 응용](https://github.com/gojaebeom/react-study/blob/master/src/components/12.Context%EC%99%80UseReducer%EC%9D%91%EC%9A%A9.js)_
<br/>

## Creater
- [gojaebeom](https://github.com/gojaebeom)
    - email address : const.gjb@gmail.com
	- create-react-app을 이용하여 만들었다. 관련 링크는 [create-react-app](https://github.com/facebook/create-react-app)
