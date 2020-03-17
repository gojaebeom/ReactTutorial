import React, {createContext} from 'react';

//const Context = createContext()// Context 를 만듭니다. 이렇게 만들어도 되지만 굳이 변수에 할당할 필요없이 밑과 같이 사용 가능
// Context 안에는 Provider 와 Consumer 라는게 존재합니다.
// 이 둘은, Context 를 이용하기 위해 필요한 컴포넌트들입니다.
const { Provider, Consumer } =  createContext();
//밑과 같이 비구조할당에서 :으로 선언 이름을 바꿀 수 있다.
//const { Provider:SampleProvider, Consumer:SampleConsumer } =  createContext();


export default function contextAPI사용하기() {

    const data={
        name:"고재범",
        age:"26"
    }
    //먼저 데이터를 넘겨줄 컴포넌트를 provider로 감싼다.
    //그리고 value로 어떠한 자식에게 넘겨줄 값을 줄 수 있다.
    return (
        <div>
            <Provider value={data}>
                <FirstChild/>
            </Provider>
        </div>
    )
}

//임시로 징검다리 역할을 하는 컴포넌트
function FirstChild(){

    return (
        <SecondChild/>
    )
}

//props 를 사용할 때와 달리 
//provide에서 value로 받은 값을
//필요한 컴포넌트에서 cunsumer로 바로 값을 받아 사용할 수 있다.
function SecondChild(){

    return (
        <Consumer>
            {
                ({name,age})=>(<div>{name}{age}</div>)
            }
        </Consumer>
    )
}

