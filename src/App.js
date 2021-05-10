// import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails'

function App() {
  return (
    <div className = "App">

    <UserDetails name="Harsh Mistry" age={21}>
      <h3>Information specific to Harsh</h3>
    </UserDetails>

    <hr/>

    <UserDetails name="Kush Mistry" age={19}>
      <h3>Information specific to Kush</h3>
      <button>Kush's button</button>
    </UserDetails>

    <hr/>
    
    <UserDetails/>

    </div>
  );
}

export default App;
