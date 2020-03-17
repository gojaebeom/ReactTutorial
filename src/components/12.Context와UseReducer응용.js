import React, {createContext, useReducer, useState} from 'react';

const examContext = createContext();

const userInfo = {
    name:"",
    age:""
}

const UserReducer = (state, action) =>{
    switch(action.type){
        case "CREATE1": {
            return {...state, name:"james", age:"26"}
        }
        case "CREATE2": {
            return {...state, name:"kim", age:"30"}
        }
        default : {
            throw new Error(`${action.type}`)
        }
    }
}

export default function Constext와UseReducer응용() {

    const [user, dispatch] = useReducer(UserReducer, userInfo);

    const [value, setValue] = useState(true);

    const clickButton = (data) =>{
        if(value){
            dispatch({type:"CREATE1"});
        }else{
            dispatch({type:"CREATE2"});
        }
        setValue(!value);
    }

    return (
        <div>
            <examContext.Provider value={user}>
                <FirstChild/>
            </examContext.Provider>
            <button onClick={clickButton}>클릭하세요!</button>
        </div>
    )
}

function FirstChild(){

    return (
        <>
            <SecondChild/>
        </>
    )
}

function SecondChild(){

    return(
        <>
            <examContext.Consumer>
                {
                    ({name,age})=>(
                        <div>
                            이름:{name}
                            <p></p>
                            나이:{age}
                        </div>
                    )
                }
            </examContext.Consumer>
        </>
    )
}
