import React, {useState} from 'react';

export default function UseState사용해보기(){

    //비구조화 할당(구조분해) 을 사용하지 않는다면 밑과 같이 번거로울 것입니다.
    // const numberState = useState(0);
    // const nums = numberState[0];
    // const setNums = numberState[1];

    const [nums, setNums] = useState(0);

    const onIncrease = () =>{
        setNums(num+1);

        //함수형 업데이트 방법 (성능최적화 시 사용)
        //setNums(prevNum => prevNum+1);
    }

    const onDecrease = () =>{
        setNums(nums-1);
    }

    return(
        <div>
            <h1>{nums}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}