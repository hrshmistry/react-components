// import logo from './logo.svg';
import './App.css';
import ConditionalRendering from './ConditionalRendering';

function App() {

  return (
    <div className = "App">
      <ConditionalRendering isLoggedIn={false}/>
    </div>
  );
}

export default App;
