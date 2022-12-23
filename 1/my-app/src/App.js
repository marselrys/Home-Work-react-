import './App.css';

function App() {
  return (
    <div className="App">
      <AboutPage/>
    </div>
  );
}

export default App;

function AboutPage () {
  return (
    <div>
      <h1>this is AboutPage</h1>
      <OneComp/>
      <TwoComp/>
    </div>
  )
}

function OneComp () {
  return (
    <div>
      <h1>1компонент</h1>
    </div>
  )
}

function TwoComp () {
  return (
    <div>
      <h1>2компонент</h1>
    </div>
  )
}