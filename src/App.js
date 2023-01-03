
import React,{useState} from "react";
import Header from "./Header";
import Main from "./Main";

function App() {

  const [number,setnumber]=useState(0)

  const plus=()=>{
      setnumber(number+1)
  }
  
  const minus=()=>{
      setnumber(number-1)
  }

  return (
<>
<Header number={number}  plus={plus} minus={minus}/>
<Main number={number} plus={plus} minus={minus}/>
</>
  );
}

export default App;
