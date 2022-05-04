const Reducer=(state=0,action)=>{

switch(action.type){
    case "increment":return state+20;
    case "decrement":return state-30;
    default:return state;
}

}

export default Reducer;