import React from 'react';

export default function 조건부랜더링(){
    return(
        <>
            <Child color="pink" isSpecial={true} /*prop를 넘겨줄때 값을 주지않으면 기본값은 true *//>
            <Child name="react" color="red"/>
        </>
    )
}

function Child({color, name, isSpecial}){
    return (
        <div style={{color:color}}>
            {/* 삼항연산자 */}
            {/* isSpecial ? <b>*</b> : null */}
            {/* and 연산자 : 두개의 값이 다 참일때만 이기때문에 숨기고 보여줄땐 and연산자 사용 */}
            {isSpecial && <b>*</b>}
            안녕하세요  {name}
        </div>
    );
};

//defaultProps
Child.defaultProps ={
    name:'이름없음'
}




