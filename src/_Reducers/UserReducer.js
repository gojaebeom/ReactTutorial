const Reducer = (state, action) =>{
    switch(action.type){
        case "CREATE_USER1" :{
            return {...state, id:"1", name:"고재범", age:"26"}
        }
        case "CREATE_USER2" :{
            return {...state, id:"2", name:"김종원", age:"25"}
        }
        default : {
            throw new Error(`unexpected action.type: ${action.type}`);
        }       
    }
}

export default Reducer;