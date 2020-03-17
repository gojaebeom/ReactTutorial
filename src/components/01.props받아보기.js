import React from 'react';

export default function Props받아보기(){
    return(
        <Wrapper>
            <Child color="pink" />
            <Child name="react" color="red"/>
        </Wrapper>
    )
}

function Child(props){
    //비구조화 할당으로 인자값으로 미리 추출할수있다. : {name, color} 
    return (
        <div style={{color:props.color}}>
            안녕하세요 : {props.name}
        </div>
    );
};

//defaultProps
Child.defaultProps ={
    name:'이름없음'
}

function Wrapper(props){
    const style = {
        border:'2px solid black',
        padding:'16px'
    };

    return <div style={style}>{props.children}</div>
}





