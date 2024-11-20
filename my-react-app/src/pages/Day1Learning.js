import { useState } from "react";
import "./Day1Learning.css";

function Day1Learning() {
  const message = "yes, you are right, but Genshin Impact is the best game";

  function addition(a,b){
    return a+b;
  }

  const list = [{id:1,name:"Alice"},{id:2,name:"Bob"},{id:3,name:"Charlie"}];

  const flag = true;

  const buttonClicked = function (e,args) {
    console.log("button clicked",e,args);
  }

  function handleClick(args){
    console.log("button clicked",args);
  }

  function Button(){
    return <button style={{color:"purple"}}>由组件渲染的按钮</button>
  }

  const [count,setCount] = useState(98);

  function counter(){
    setCount(count+1)
  }

  const [game,setGame] = useState({name:"Elden Ring"});

  function changeGame(){
    setGame({...game,name:"Genshin Impact"})
  }

  return (
    <div className="learning-page">
      <h1>React 学习 - 第一天</h1>

      <span className="foo">测试别的文件导入css样式</span>
      <br/>
      <button onClick={changeGame}>修改组件状态-{game.name}</button>
      <br/>
      <button onClick={counter}> 组件状态-{count} </button>
      <br/>
      <Button/>
      <br/>
      <button onClick={handleClick("args1")}> 普通函数 </button>
      <br/>
      <button onClick={(e)=>buttonClicked(e,"args1")}> 函数表达式 </button>
      <br/>
      {flag ? "yes" : "no"} 
      <br/>
      {list.map(item=> <li key={item.id}>{item.name}</li>)}
      <br/>
      <h1>{message}</h1>
      {'test'}
      test
      {addition(3,4)}
      <br/>
      {new Date().getTime()}
      <div style={{color:"pink"}}>
        this is another div
      </div>
    </div>
  );
}

export default Day1Learning; 