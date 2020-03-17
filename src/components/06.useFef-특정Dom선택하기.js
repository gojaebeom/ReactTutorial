import React, {useRef} from 'react';

export default function Input상태관리하기(){

    const input = useRef();

    function focusInput(){
        //변수가 useRef함수를 참조하면 객체로 current를 사용할 수 있는데
        //이게 dom 자기 자신을 가르킨다. 
        input.current.focus();
        input.current.style.background="red";
    }

    return(
        <>
            <input type="text" ref={input}/>
            <button onClick={focusInput}>click Me!</button>
        </>
    )
}