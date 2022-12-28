import './App.css';
import OneComponent from './Components/OneComponent';
import TwoComponent from './Components/TwoComponent';
import OnClick from './onClick/OnClick.js';

function App() {
  const user = {
    name: "Anna",
    age: 19
  }

  const useR = {
    name: "macho",
    age: 100
  }
  return (
    <div className="App">
     
   {/* <OneComponent user={user}/> */}
   {/* <h1>----------------------</h1>
   <TwoComponent user={useR}/>
   <h1>----------------------</h1> */}
   <OnClick/>

    </div>
  );
}


export default App;
