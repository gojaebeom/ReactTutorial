import React, {useReducer} from 'react';

const userData={
    id:"",
    name:"",
    age:""
}

const UserReducer = (state, action) =>{
    switch(action.type){
        case "CREATE_USER1" :{
            return {...state, id:"1", name:"james", age:"26"}
        }
        case "CREATE_USER2" :{
            return {...state, id:"2", name:"lee", age:"25"}
        }
        default : {
            throw new Error(`unexpected action.type: ${action.type}`);
        }       
    }
}

function ReducerExam() {


    const [user, dispatch] = useReducer(UserReducer, userData);

    const clickButton1 = () =>{
        dispatch({type:"CREATE_USER1"})
    }
    const clickButton2 = () =>{
        dispatch({type:"CREATE_USER2"})
    }
    const clickButton3 = () =>{
        dispatch({type:"CREATE_USER"})
    }

    return (
        <div>
            <button onClick={clickButton1}>버튼을 클릭해보세요!</button>
            <button onClick={clickButton2}>버튼을 클릭해보세요!</button>
            <button onClick={clickButton3}>버튼을 클릭해보세요!</button>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.age}</p>
        </div>
    )
}

export default ReducerExam;
