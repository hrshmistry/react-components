// import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails'

let name = "Harsh"

function App() {
  return (
    <div className = "App">

    <UserDetails name="Harsh" age={23}>
      <h1>Information specific to Harsh</h1>
    </UserDetails>

    <hr/>

    <UserDetails name="Kush" age={23}>
      <h1>Information specific to Kush</h1>
      <button>Kush's button</button>
    </UserDetails>

    </div>
  );
}

export default App;
