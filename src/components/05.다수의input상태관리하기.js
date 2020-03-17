import React, {useState} from 'react';

export default function 다수의Input상태관리하기(){

    const [inputs, setInputs] = useState({
        name:'',
        nickname:'',
    });

    const {name, nickname} = inputs;

    const changeValue = (e) =>{
        const {name, value} = e.target;

        //리액트에서 객체상태를 업데이트할때는
        //기존객체를 복사해서 업데이트해야한다
        //이것을 불변성을 지킨다고함
        setInputs({
            ...inputs,
            [name]:value
        });
    }

    const onReset = () =>{
        setInputs({
            name:'',
            nickname:''
        })
    }

    return(
        <div>
            <input type="text" name="name" value={name} onChange={changeValue} placeholder="이름"/>
            <input type="text" name="nickname" value={nickname} onChange={changeValue} placeholder="닉네임"/>
            <button onClick={onReset}>초기화</button>
            <p>{name}
                {
                    nickname ? <span>({nickname})</span> : null
                }
            </p>
        </div>
    )
}