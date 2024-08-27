import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("white");

  function handlBG(color){
    setColor(color)
  }

  return (
    <>
      <div className="flex flex-wrap-reverse items-center justify-center h-screen" style={{backgroundColor: color}}>
        <div className="bg-slate-400 w-1/2 md:w-1/3 flex p-5 rounded-3xl font-bold text-white shadow-lg">
          <button onClick={()=> handlBG("red")} className="bg-red-500 p-3 flex-auto rounded-2xl mx-2 hover:bg-red-600 transition duration-300">
            RED
          </button>
          <button  onClick={()=> handlBG("blue")} className="bg-blue-500 p-3 flex-auto rounded-2xl mx-2 hover:bg-blue-600 transition duration-300">
            BLUE
          </button>
          <button  onClick={()=> handlBG("green")} className="bg-green-500 p-3 flex-auto rounded-2xl mx-2 hover:bg-green-600 transition duration-300">
            GREEN
          </button>
          <button  onClick={()=> handlBG("yellow")} className="bg-yellow-500 p-3 flex-auto rounded-2xl mx-2 hover:bg-yellow-600 transition duration-300">
            YELLOW
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
