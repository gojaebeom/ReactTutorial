import React, {useState} from 'react';

export default function Input상태관리하기(){

    const [input, setInput] = useState('');

    const changeValue = (e) =>{
        console.log(e.target.value);
        setInput(e.target.value);
        console.log(input);
    }

    const onReset = () =>{
        setInput('');
    }

    return(
        <div>
            <input type="text" value={input} onChange={changeValue}/>
            <button onClick={onReset}>초기화</button>
            <p>값:{input}</p>
        </div>
    )
}