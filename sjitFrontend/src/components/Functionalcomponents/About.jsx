import React, { useState } from "react";

function About(){
    var statetinit=0;
    var[num,setnum]=useState(statetinit);
    function ubdate(){
        setnum(num+1);
    }
    function reset(){
        setnum(0);
    }
    var[txt,settxt]=useState("");
    function change(){
        var v=document.getElementById("txt").value
        settxt(v);
    }
    return(
        <div>
        <h1>About Page</h1>
        <h3>State initial value is {statetinit}</h3>
        <div class="button"><button onClick={()=>setnum(num-1)}>-</button></div>
        <h3>Current state: {num}</h3>
        <div class="button">
        <button onClick={ubdate}>+</button>
        </div>
        <div class="button">
        <button onClick={()=>{setnum(0)}}> reset </button><br></br>
        Text Area<input id="txt" type="text" onChange={change} placeholder="textarea"/>
        <h3>Text is {txt}</h3>
        </div>
        </div>
    )
}
export default About;
