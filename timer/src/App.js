import React,{useState,useEffect} from 'react'
import './App.css';

function App() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
         setInterval(() => setDateState(new Date()), 30000);
  }, []);


  const [time,setTime] = useState(0);
    const [run,setRun] = useState(false);

useEffect(()=> {
    let stopWatch;
    if(run){
        stopWatch = setInterval(()=>{
        setTime((stop) => stop + 10)    
        },10)
    } else if (!run){
      clearInterval(stopWatch)
    }
    return () => clearInterval(stopWatch)
},[run])
  return (
    <div className='App'>
      <div>
        <h2></h2>
        </div>
        <div className='spans'>
   <div>
        <h3 className='time'>Calender</h3>
  
            <p>
              {' '}
              {dateState.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
            </p>
            <h3 className='time'>Time</h3>
            <p>
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',second: "numeric",
                hour12: true,
            })}
            </p>
            <h3 className='time'>Timer</h3>
   </div>
      <span>{("0" + Math.floor((time / 6000))% 60).slice(-2)}</span>:
      <span>{("0" + Math.floor((time / 1000))% 60).slice(-2)}</span>:
      <span>{("0" + Math.floor((time / 100))% 60).slice(-2)}</span>
      </div>
     <br/>
      <div>
        <button className='buttons' onClick={() => setRun(true)}>start</button>
        <button className='buttons' onClick={() => setRun(false)}>stop</button>
        <button  className='buttons' onClick={() => setTime(0)}>reset</button>
      </div>
      <footer className='footer'>lonerkiddow15@gmail.com</footer>
    </div>
  )
}
export default App;
