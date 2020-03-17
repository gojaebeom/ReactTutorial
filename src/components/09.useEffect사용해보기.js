import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default function UseEffect사용하기(){

    useEffect(()=>{
        setExam('안녕하세요!');
        console.log('useEffect실행됨!');
    },[]);

    const [exam, setExam] = useState("");

    return(
        <>
            <Router>
                <Link to="/exam">눌러보세요</Link>
                <Route path="/exam">
                    <Child exam={exam}/>
                </Route>
            </Router>
        </>
    )
}

function Child({exam}){

    useEffect(()=>{
        console.log('자식 useEffect실행됨!');
    }, []);

    return(
        <div>{exam}</div>
    )
}