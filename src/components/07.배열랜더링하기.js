import React from 'react';

const user = [
    {
        id:1,
        name:"timo"
    },
    {
        id:2,
        name:"gargen"
    },
    {
        id:3,
        name:"isreal"
    }
];

//단순한 예
export function 배열랜더링하기1(){

    return(
        <>
            <div>
                <p>번호:{user[0].id}</p>
                <p>이름:{user[0].name}</p>
                <hr/>
            </div>
            <div>
                <p>번호:{user[1].id}</p>
                <p>이름:{user[1].name}</p>
                <hr/>
            </div>
            <div>
                <p>번호:{user[2].id}</p>
                <p>이름:{user[2].name}</p>
                <hr/>
            </div>
        </>
    )
}

//내장함수 map 사용
export function 배열랜더링하기2(){

    return(
        user.map(user=>{
            return(
                <div key={user.id}>
                    <p>번호:{user.id}</p>
                    <p>이름:{user.name}</p>
                    <hr/>
                </div>
            )
        })
    )
}