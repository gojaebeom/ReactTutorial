import React, {useContext} from 'react';
import {dispatch} from '../components/13.Context와UseReducer응용2';

function Sample() {
    const data = useContext(dispatch);
    return (
        <div>
            <button onClick={()=>data({type:"helloWord"})}>클릭미!</button>
        </div>
    )
}

export default Sample;
