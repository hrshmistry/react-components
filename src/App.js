// import logo from './logo.svg';
import './App.css';
import UserDetails from './UserDetails'

let name = "Harsh"

function App() {
  return (
    <div className = "App">
    <h1>{name}</h1>
    
    <UserDetails name="Harsh" age={23}>
      <h1>children of Component</h1>
    </UserDetails>
    </div>
  );
}

export default App;
