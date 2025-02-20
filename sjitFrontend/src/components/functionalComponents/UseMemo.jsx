
import { useState } from "react";
function slowdouble(num){
    for(var i=0;i<100;i++){}
    return 2*num;
}
const UseMemo=()=>{
    var[num,setNum]=useState(0);
    var[theme,setTheme]=useState(false);
    var styling={
        backgroundColor: theme?"black":"white",
        color: theme?"white":"black"
    }
    return(
        <div style={styling}>
            <h1>UseMemo Example</h1>
            <h2>Number Box</h2>
            <input type="number" onChange={()=>{setNum(num+1)}} /> <br />
            <h2>Number: {num}</h2> 
            <h2>Double Number: {slowdouble(num)}</h2>
            <button onClick={()=>{setTheme(!theme)}}>Change Theme</button>
            
        </div>
    );
}
export default UseMemo;