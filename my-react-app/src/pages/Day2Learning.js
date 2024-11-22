import { useState } from "react";
import "./Day2Learning.css"; 
import { useRef } from "react";
import { useEffect } from "react";


function Son(props){
    console.log(props);
    return <div>word from Son component {props.text}</div>
}

function Son2 ({onSendMessage}){
    return <button onClick = {() => onSendMessage("message from son")}>send message to father</button>
}

function Day2Learning() {
    const words = "Genshin Impact is the best game in the world!"
  const [value,setValue] = useState("");
  const inputRef = useRef(null);
  const showDom = () => {
    console.dir(inputRef.current);
  }
  const [msg,setMsg] = useState("");
  const sendMessage = (msg) => {
    console.log(msg)
    setMsg(msg);
  }
  
  const [count,setCount] = useState(0);
  useEffect(() => {
    console.log("component changed")
  },[count])

  const [flag,setFlag] = useState(true);
  return (
    <div>

        {flag&& <span>if click the button,the span will be closed</span>}
        <button onClick = {() => setFlag(!flag)}>click to close the span</button>

        <br/>

        <button onClick = {() => setCount(count + 1)}>click then component changed and check console---{count}</button>

        <br/>
        {msg}
        <Son2 onSendMessage = {sendMessage}/>

        


        <br/>

        <Son text = {words}/>

        <br/>
      <input
        value = {value}
        onChange = {(e) => setValue(e.target.value)}
        type = "text"
      />
      
      <br/>

      <input type="text" ref = {inputRef}></input>
      <br/>
      <button onClick={showDom}>获取DOM元素</button>

      
      
    </div>
  );
}

export default Day2Learning;
