import logo from './logo.svg';
import './App.css';
import Firebase from './BD/Firebase';
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
function App() {
  firebase.auth().onAuthStateChanged(user => {
    console.log("Holi soy el usuario : " + user);
  });
  return (
    <div className="App">
      <h1>Holi</h1>
    </div>
  );
}

export default App;
