import React, {useRef , useState} from 'react';

//리랜더링이 불필요할때 Ref로 값사용하는 법
export default function 컴포넌트안의변수만들기(){

    const [inputs, setInputs] = useState({
        name:'',
        email:''
    })
    const { name , email } = inputs;

    const nextId = useRef(4);
    const nameInput = useRef();

    const onChange = (e)=>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    }

    const onCreate = () =>{
        const user = {
            id:nextId.current,
            name,
            email
        };
        setUsers([
            ...users,
            user
        ]);
        setInputs({
            name:'',
            email:''
        })
        nextId.current += 1;
        nameInput.current.focus();
        console.log(nextId.current);
    }

    const onRemove = id =>{
        setUsers(users.filter(user=>user.id !== id));
    }

    const onToggle = id =>{
        setUsers(users.map(user=>user.id===id ?{
            ...user, active:!user.active   
        }:user));
    }

    const [users, setUsers] = useState([
        {
            id:1,
            name:"timo",
            email:"timo@gmail.com",
            active:true
        },
        {
            id:2,
            name:"gargen",
            email:"gargen@gmail.com",
            active:false
        },
        {
            id:3,
            name:"isreal",
            email:"isreal@gmail.com",
            active:false
        }
    ]);

    
    return(
        <>
            <CreateUser 
                name={name}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
                nameInput={nameInput}
            />
            <UserList 
                user={users} 
                onRemove={onRemove}
                onToggle={onToggle}
            />
        </>
    )
}

function CreateUser({name, email, onChange, onCreate, nameInput}){
    return(
        <div>
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={onChange} 
                placeholder="계정명"
                ref={nameInput}
            />
            <input 
                type="text" 
                name="email" 
                value={email} 
                onChange={onChange} 
                placeholder="이메일" 
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

function UserList({user, onRemove, onToggle}){
    return(
        <>
        {
            user.map(user=>{
                return(
                    <div key={user.id}>
                        <p style={{fontSize:'30px',cursor:'pointer'}} onClick={()=>onToggle(user.id)}>
                            {user.active ? <span>★</span> : <span>☆</span> }
                        </p>
                        <p>번호:{user.id}</p>
                        <p>이름:{user.name}</p>
                        <p>이메일:{user.email}</p>
                        <p><button onClick={()=>onRemove(user.id)}>삭제</button></p>
                        <hr/>
                    </div>
                )
            })
        }
        </>
    )
}